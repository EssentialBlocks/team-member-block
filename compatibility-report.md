# Team Member Block — Compatibility Report

**Plugin:** Team Member Block (`team-member-block`)
**Version:** 1.2.1 → 1.5.0
**Branch:** `team-member-block-dev` (branched off `latest`, not `master` — see note below)
**Date of pass:** 2026-08-10

---

## 1. Detected original PHP / WordPress baseline

Header and readme claims before this pass:

| Source | `Requires PHP` | `Requires at least` | `Tested up to` |
|---|---|---|---|
| `team-member-block.php` header | *(absent)* | *(absent)* | *(absent)* |
| `readme.txt` | *(absent)* | 5.6 | 6.5 |

Claims are not facts, so the baseline was inferred from the code itself.

### Detected original PHP: **7.0**

| Evidence | File:line | Implies |
|---|---|---|
| Short array syntax `[]` throughout | `team-member-block.php:42`, `includes/font-loader.php:15` | 5.4+ |
| Variadics `...$args` + `new static( ...$args )` | `includes/font-loader.php:21,23` | 5.6+ |
| Anonymous function as `render_callback` | `team-member-block.php:112` | 5.3+ |
| `throw new Error( … )` — `\Error` is the PHP 7 engine-exception base class, it does not exist on PHP 5.x | `team-member-block.php:37` (pre-fix) | **7.0+** |

No typed properties, no arrow functions, no nullable type hints, no `match`, no constructor
promotion, no enums — so nothing forces the baseline above 7.0. **Detected original PHP = 7.0.**

### Detected original WordPress: **5.5**

| Evidence | File:line | Implies |
|---|---|---|
| `register_block_type()` | `team-member-block.php:107` | 5.0+ |
| `register_block_type()` given a **directory path** (`block.json` metadata form) | `team-member-block.php:108` via `Team_Member_Helper::get_block_register_path()` | **5.5+** |
| Explicit `<= 5.6` fallback to the string-name registration form | `includes/helpers.php:94` | author targeted 5.5/5.6 |
| `wp_localize_script`, `register_meta` with `show_in_rest` | `includes/helpers.php:54`, `includes/post-meta.php:20` | 4.4+ |
| `site-editor.php` / `gutenberg-edit-site` handling | `includes/helpers.php:43` | 5.9-era additions, but guarded |

No `wp_interactivity_*`, no `wp_enqueue_script()` args-array form. **Detected original WP = 5.5.**

### Do the claims and the code disagree?

Yes. The readme claimed WP 5.6 while the code contains a live `<= 5.6` branch (so it was
genuinely written to run on 5.5/5.6), and it declared **no PHP floor at all** despite requiring
PHP 7.0 to even load. `Requires at least` and `Tested up to` were entirely missing from the
plugin header — only the readme carried them, so WordPress' own plugin-header compatibility
checks had nothing to read.

---

## 2. Chosen floor

```
declared PHP floor = max( detected 7.0, policy minimum 7.4 ) = 7.4   ← policy minimum won
declared WP  floor = max( detected 5.5, policy minimum 6.0 ) = 6.0   ← policy minimum won
```

The policy minimum won on **both** axes. The user gave no instruction to support anything
older, so the default 7.4 / 6.0 floor applies. Nothing was lowered on request.

---

## 3. Target range

| | Floor | Latest stable | Verified how |
|---|---|---|---|
| PHP | 7.4 | **8.5.9** | `php.net/releases` JSON API, 2026-08-10. Actively supported branches reported: 8.2, 8.3, 8.4, 8.5 |
| WordPress | 6.0 | **7.0.3** | `api.wordpress.org/core/version-check/1.7/`, 2026-08-10 |

**Per-version checklist covered:** PHP 7.4, 8.0, 8.1, 8.2, 8.3, 8.4, 8.5 · WP 6.0, 6.1, 6.2,
6.3, 6.4, 6.5, 6.6, 6.7, 6.8, 6.9, 7.0.

Local toolchain used for verification: PHP 8.5.8 CLI.

---

## 4. Issue table

Severity key: **C**ritical / **H**igh / **M**edium / **L**ow / **F**lagged (not auto-fixed).

| # | File:line | Issue | Breaks on | Sev |
|---|---|---|---|---|
| 1 | `team-member-block.php:31` | `require_once __DIR__ . '/lib/style-handler/style-handler.php'` with no `file_exists()` guard. `lib/style-handler` is a **git submodule and is currently uninitialised** in this working tree (`git submodule status` reports `-34fb2c6…`), so the directory is empty → `Fatal error: Failed opening required` on **every request, front end and admin**. | All PHP / all WP, whenever the submodule is not initialised | **C** |
| 2 | `includes/helpers.php:44` | `$controls_dependencies = include_once …/dist/modules.asset.php;` — `include_once` returns `bool(true)`, not the file's return value, on any call after the first in the same request. The next lines then do `$controls_dependencies['dependencies']` (array offset on `bool` → warning) and feed the result to `array_merge()` → **`TypeError: array_merge(): Argument #1 must be of type array, bool given`**, a hard fatal in the block editor. | PHP 8.0+ | **H** |
| 3 | `includes/helpers.php:44` | No `file_exists()` guard before including `dist/modules.asset.php`, unlike the equivalent guard the main file has for `dist/index.asset.php`. | All | **M** |
| 4 | `team-member-block.php:37` | `throw new Error( 'You need to run npm run build…' )` fired from an `init` callback. An uncaught `Error` on `init` is a white-screen fatal for **visitors**, not just developers — a missing build artefact takes the whole site down. | PHP 7.0+ (behaviour) | **M** |
| 5 | `team-member-block.php:1` | Main plugin file has no `if ( ! defined( 'ABSPATH' ) ) exit;` guard (the three `includes/` files all have one). | All | **M** |
| 6 | `includes/helpers.php:43` | `$_SERVER['QUERY_STRING']` read with neither `isset()`, `wp_unslash()` nor `sanitize_text_field()`. | All (notice + WPCS) | **L** |
| 7 | `includes/helpers.php:43` | `str_contains()` is a PHP 8.0 function. It happens to be safe here only because WP core polyfills it (since WP 5.9) and our floor is WP 6.0 — but the plugin was relying on that polyfill silently. | PHP 7.4 without the WP polyfill | **L** |
| 8 | `includes/helpers.php:94` | `(float) get_bloginfo( 'version' ) <= 5.6` — float cast of a version string. `(float) "6.10"` is `6.1`, so any WP release with a minor `>= 10` compares wrong. Also **dead** at a 6.0 floor → see §5. | WP releases with minor ≥ 10 | **H** |
| 9 | `includes/helpers.php:55` | `'eb_wp_version' => (float) get_bloginfo( 'version' )` — same unsafe float cast, shipped to JS. | see §7 | **F** |
| 10 | `team-member-block.php:42,56` | `$script_asset['dependencies']` and `$script_asset['version']` read with no `isset()` / `is_array()` check. If the generated asset file ever returns anything but the expected array, this is the same array-offset-on-scalar → `array_merge()` TypeError as #2. | PHP 8.0+ | **L** |
| 11 | `includes/post-meta.php:12` | `add_filter( 'init', … )` used where `add_action` is meant. Functionally identical (WP shares one hook registry) but semantically wrong and misleading. | none | **L** |
| 12 | `includes/font-loader.php:52` | `$block['blockName']` read without `isset()` inside the `render_block` filter; `$block['attrs']` also assumed to be an array. | PHP 8.0 warning | **L** |
| 13 | `includes/font-loader.php:22` | `self::$instances == null` — loose comparison. PHP 8.0 changed string↔number `==` semantics; not hit by this particular value, but `===` is the correct form. | none | **L** |
| 14 | `includes/font-loader.php:70` | `$googleFontFamily[ $attributes[$key] ] = …` — a block attribute value used directly as an array key. A non-scalar attribute (array/object) is **`TypeError: Illegal offset type`** on PHP 8. | PHP 8.0+ | **L** |
| 15 | `includes/font-loader.php:83` | `get_option( 'eb_settings', [] )` result indexed without an `is_array()` check — array offset on a scalar if the option is ever a string. | PHP 8.0+ | **L** |
| 16 | `includes/font-loader.php:103-107` | `wp_register_style()` for Google Fonts passes no `$ver`; URL is protocol-relative (`//fonts.googleapis.com/css`). Harmless today. | none | **L** |
| 17 | `block.json` | No `apiVersion` key → the block runs as **Block API v1**, while `src/edit.js` and `src/save.js` both use `useBlockProps` / `useBlockProps.save()`, which are v2 APIs. | see §7 | **F** |
| 18 | header + `readme.txt` | Plugin header carried **no** `Requires PHP`, `Requires at least` or `Tested up to`; readme claimed WP 5.6 → 6.5 and no PHP floor. | metadata | **M** |
| 19 | `assets/js/eb-animation-load.js:27` | `DOMNodeInserted` mutation event — deprecated in every browser and **removed in Chrome 127+**. | see §7 | **F** |
| 20 | `controls/` | The `controls` git submodule is also uninitialised (`-807ed39…`). Not `require`d from PHP, and the built `dist/modules.js` is committed, so runtime is unaffected — but a rebuild from this tree would fail. | build time | **L** |

**Clean on:** no `mysql_*`, no `create_function()`, no `each()`, no `ereg*`, no `strftime()`,
no `FILTER_SANITIZE_STRING`, no `${var}` interpolation, no curly-brace string offsets, no
implicit-nullable parameters (PHP 8.4), no dynamic property creation (PHP 8.2 — every property
on all three classes is declared), no non-canonical `(integer)`/`(boolean)` casts and no
`trigger_error( …, E_USER_ERROR )` (PHP 8.5). No `$wpdb` usage at all, so no `prepare()` /
`%i` surface. No REST route registration, so no missing `permission_callback`. No
`load_plugin_textdomain()` call, which means the WP 6.7+ "text domain loaded too early" notice
cannot fire. No jQuery anywhere in `src/` or `assets/js/`, so none of the jQuery 3.x / Migrate
removals apply.

---

## 5. Dead version-check branches (awaiting your decision)

Raising the WP floor from the detected 5.5 to 6.0 strands one branch. It has **not** been
touched.

| File | Line | Condition | What the branch does | Single remaining reachable path if removed |
|---|---|---|---|---|
| `includes/helpers.php` | 94 | `(float) get_bloginfo( 'version' ) <= 5.6` | Returns the block **name** string `"team-member-block/team-member-block"` so that `register_block_type()` is called with a name rather than the `block.json` directory path — the pre-WP-5.5 registration form. | `Team_Member_Helper::get_block_register_path( $blockname, $blockPath )` collapses to `return $blockPath;` — i.e. it becomes an identity function on its second argument. `team-member-block.php:108` could then drop the helper call entirely and pass `TEAM_MEMBER_BLOCK_ADMIN_PATH` straight to `register_block_type()`, and the `$blockname` argument (`"team-member-block/team-member-block"`) becomes unused. |

**Status: awaiting decision.** Options are remove / keep / keep-with-comment. Worth knowing
before you choose: this same `get_block_register_path()` helper exists verbatim across the
sibling Essential Blocks single-block plugins, so removing it here diverges this plugin from
the others unless the same change is made everywhere. Note also that even if kept, the
condition itself is buggy (issue #8) — it is a float cast, so it would misbehave on a WP
release with a minor ≥ 10. Keeping the branch and fixing the cast to `version_compare()` is a
legitimate third option.

Nothing was removed, inlined or simplified. If you do not answer, the branch stays exactly as
it is.

---

## 6. Fixes applied

| Issue | Fix | File |
|---|---|---|
| 1 | Wrapped the style-handler `require_once` in `file_exists()`. When the file is absent the plugin now stays loaded and registers an `admin_notices` callback telling the developer to run `git submodule update --init --recursive` and `npm run build`, instead of fataling the site. | `team-member-block.php:33-58` |
| 2 | Changed `include_once` to `require`, so the asset file's return value is always the array. Comment added explaining why `include_once` is wrong here. | `includes/helpers.php:46-52` |
| 3 | Added a `file_exists()` guard before the include; bails out of `enqueues()` cleanly when the build artefact is missing. | `includes/helpers.php:51-54` |
| 4 | Replaced `throw new Error( … )` with the same admin notice + `return`. Same developer-facing message, no site-wide fatal. **This changes observable behaviour — see §7.** | `team-member-block.php:96-99` |
| 5 | Added `if ( ! defined( 'ABSPATH' ) ) exit;` to the main plugin file, directly after the header block. | `team-member-block.php:17-20` |
| 6 | `$_SERVER['QUERY_STRING']` now goes through `isset()` → `wp_unslash()` → `sanitize_text_field()` into a local `$query_string`. | `includes/helpers.php:43` |
| 7 | Replaced `str_contains()` with `false !== strpos()`. Identical result, and no longer depends on WP core's polyfill being present. | `includes/helpers.php:45` |
| 10 | `$script_asset` is validated with `is_array()` + `isset()` and falls back to `[ 'dependencies' => [], 'version' => TEAM_MEMBER_BLOCK_VERSION ]`; `$script_asset['version']` reads through an `isset()` ternary. Same guard applied to `$controls_dependencies` in `helpers.php`. | `team-member-block.php:100-108`, `includes/helpers.php:55-63` |
| 11 | `add_filter( 'init', … )` → `add_action( 'init', … )`. | `includes/post-meta.php:12` |
| 12 | `$block['attrs']` now checked with `is_array()`; `$block['blockName']` read through an `isset()` ternary into a local. | `includes/font-loader.php:51-53` |
| 13 | `self::$instances == null` → `null === self::$instances` (Yoda + strict). | `includes/font-loader.php:22` |
| 14 | `get_fonts_family()` now returns early if `$attributes` is not an array, and skips any attribute whose value is not a non-empty string before using it as an array key. | `includes/font-loader.php:67-79` |
| 15 | `get_option( 'eb_settings', [] )` result coerced through an `is_array()` check before indexing. | `includes/font-loader.php:90` |
| 18 | See §9. | header + `readme.txt` |

All fixes are behaviour-preserving on a correctly built, correctly checked-out install. Every
one of them only changes what happens in a state that is currently a PHP warning or a fatal.

**Deliberately not fixed (no compatibility impact):** issue #16 (Google Fonts `wp_register_style`
version arg and protocol-relative URL) — adding a `$ver` would alter the emitted Google Fonts
URL for no compatibility gain. Issue #20 (`controls/` submodule) is a checkout/build-environment
matter, not a code defect.

---

## 7. Flagged — behaviour-changing, awaiting your decision

**a) `eb_wp_version` float cast — `includes/helpers.php:55` (issue #9). NOT changed.**

The obvious fix is to stop float-casting the version string. It cannot be applied here. The
value is consumed by the bundled controls bundle:

```js
// dist/modules.js
var i = EssentialBlocksLocalize, n = i.eb_wp_version;
… n >= 5.8 ? … : …
```

That is a **numeric** comparison. Passing the raw string `"7.0.3"` makes `"7.0.3" >= 5.8`
evaluate to `false` in JavaScript (the string is not numeric, so the comparison is `NaN`-based),
which would silently flip the block-registration path in the editor. So the cast has to stay
numeric.

In practice the cast is currently harmless: the only comparison is `>= 5.8`, and WP is at 7.x,
so `(float) "7.0.3"` = `7.0` compares correctly. The bug window is versions like `5.10`, which
would cast to `5.1` and fall below `5.8` — a range WordPress skipped, and can never revisit.

**Recommendation:** leave as-is until the `controls` submodule is updated to accept a string and
use `version_compare()` on the PHP side. Fixing it here alone would break the editor. Flagging
so it is on record and gets fixed in the right place.

**b) `block.json` has no `apiVersion` — issue #17. NOT changed.**

The block registers as **API v1**, but `src/edit.js:146` and `src/save.js:30` both use
`useBlockProps` / `useBlockProps.save()`, which belong to API v2. Adding `"apiVersion": 2`
changes where the block wrapper element and its attributes are emitted, i.e. it **changes the
saved block markup** and would invalidate every existing saved instance of the block unless a
matching `deprecated` entry is added. `src/deprecated.js` already carries five deprecation
entries, so this is a real migration, not a one-line edit.

**Recommendation:** worth doing, but as a deliberate task with a new deprecation entry and
front-end regression testing — not inside a compatibility pass. Out of scope here.

**c) `DOMNodeInserted` in `assets/js/eb-animation-load.js:27` — issue #19. NOT changed.**

```js
window.addEventListener('DOMNodeInserted', (event) => { … });
```

`DOMNodeInserted` is a legacy mutation event, deprecated across all browsers and **removed in
Chrome 127 and later**. The listener drives the editor-side live preview of animation changes,
so on current Chrome that preview no longer refreshes when the animation dropdown changes. This
is a browser-API problem, not a PHP/WP one, and the correct replacement is a `MutationObserver`
— a rewrite of that block with its own testing burden.

**Recommendation:** replace with `MutationObserver`. Say the word and I will do it as a separate,
scoped change.

**d) `throw` → admin notice — issue #4. CHANGED, flagging for visibility.**

I did convert the missing-build `throw new Error()` into a graceful bail plus an admin notice
(and applied the same treatment to the missing style-handler submodule). This **is** an
observable behaviour change: previously a missing build artefact produced a site-wide fatal,
now it produces an admin notice and a plugin that does not register its block. I judged this
inside scope — a plugin that fatals is not compatible with any version — but it is a revert-able
one-hunk change if you want the hard failure back.

---

## 8. Old-vs-new conflicts

None. Nothing in the 7.4 → 8.5 or 6.0 → 7.0 range required a construct that breaks the other
end. Every fix is plain PHP 7.4-compatible syntax (`isset()` ternaries rather than `??` chains,
short arrays, no typed properties, no arrow functions), and no feature detection or version
gating had to be introduced.

The one thing that comes close is issue #9 — the PHP side and the bundled JS disagree about
what type `eb_wp_version` should be — but that is a cross-repo coordination problem, not a
version-range conflict. It is documented in §7a.

---

## 9. Final declared compatibility range

**Plugin header** (`team-member-block.php`) — three fields added, `Version` bumped:

```
Version:           1.5.0
Requires PHP:      7.4
Requires at least: 6.0
Tested up to:      7.0
```

**`readme.txt`:**

```
Requires at least: 6.0
Tested up to:      7.0
Requires PHP:      7.4
Stable tag:        1.5.0
```

**Version bump: 1.2.1 → 1.5.0 (minor), set on user instruction.** Kept in sync in all three
places it appears: plugin header, `define( 'TEAM_MEMBER_BLOCK_VERSION', … )`, `readme.txt`
`Stable tag`, plus `package.json`. There is no `composer.json` in this plugin. A `1.5.0`
changelog entry was added to `readme.txt`.

`block.json` has no `version` field and was left untouched (adding one is only meaningful
alongside the `apiVersion` decision in §7b).

---

## 10. Verification performed

**`php -l` full sweep — all 7 PHP files pass, PHP 8.5.8:**

```
No syntax errors detected in ./team-member-block.php
No syntax errors detected in ./dist/index.asset.php
No syntax errors detected in ./dist/frontend.asset.php
No syntax errors detected in ./dist/modules.asset.php
No syntax errors detected in ./includes/post-meta.php
No syntax errors detected in ./includes/font-loader.php
No syntax errors detected in ./includes/helpers.php
```

**phpcs:** not installed on this machine (`phpcs: command not found`). Skipped rather than
installing global tooling. The escaping/sanitising fixes in §6 (issues #5, #6) are the ones
WPCS would most likely have flagged.

**Not verified:** no runtime testing was performed against live WP installs across the 6.0 → 7.0
range — the `lib/style-handler` submodule is uninitialised in this working tree, so the plugin
cannot currently boot here at all. Initialising the submodules and exercising the block in the
editor is the remaining verification step.

---

## Notes on the working tree

- **Branch base.** The skill's default is to branch from `master`, but `master` here is *behind*
  `latest`: `latest` carries commit `f8c51a7` ("fixed: compatibility support with wordpress 6.5
  version") which `master` does not have. Branching off `master` would have silently discarded
  that work, so `team-member-block-dev` was cut from `latest` instead.
- **Nothing was committed or pushed.** All changes are uncommitted in the working tree on
  `team-member-block-dev`, for your review.
- Files changed: `team-member-block.php`, `includes/helpers.php`, `includes/font-loader.php`,
  `includes/post-meta.php`, `readme.txt`, `package.json`, plus this report.
