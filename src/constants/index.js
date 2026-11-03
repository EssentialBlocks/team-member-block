import { __ } from "@wordpress/i18n";
import { Dashicon } from "@wordpress/components";

export const sizeUnitTypes = [
    { label: "px", value: "px" },
    { label: "%", value: "%" },
    { label: "em", value: "em" },
];

export const IconsHzAligns = [
    { label: "Center", value: "center" },
    { label: "Left", value: "flex-start" },
    { label: "Right", value: "flex-end" },
    { label: "Space Between", value: "space-between" },
    { label: "Space Around", value: "space-around" },
    { label: "Space Evenly", value: "space-evenly" },
];

export const ContentsVerticalAligns = [
    { label: "Top", value: "flex-start" },
    { label: "Center", value: "center" },
    { label: "Bottom", value: "flex-end" },
];

export const STYLE_PRESETS = [
    { label: __("Default", "team-member-block"), value: "default" },
    { label: __("Preset 1", "team-member-block"), value: "preset1" },
    // { label: __("Preset 2 (hover overlay)"), value: "preset2" }, // this was preset 3
    { label: __("Preset 2 (hover overlay)", "team-member-block"), value: "preset3" }, // this was preset 5
    // { label: __("Preset 4 (hover overlay)"), value: "preset4" }, // this was preset 8
    // { label: __("Preset 5", "team-member-block"), value: "preset5" }, // this was preset 9
    // { label: __("Preset 6", "team-member-block"), value: "preset6" }, // this was preset 15
    { label: __("Preset 3", "team-member-block"), value: "new-preset1", isPro: true },
    { label: __("Preset 4", "team-member-block"), value: "new-preset2", isPro: true },
    { label: __("Preset 5", "team-member-block"), value: "new-preset3", isPro: true },
];
export const HOVER_ALIGN = [
    { label: __("Left", "team-member-block"), value: "hover-left" },
    { label: __("Right", "team-member-block"), value: "hover-right" },

];

export const separatorTypes = [
    { label: __("Solid", "team-member-block"), value: "solid" },
    { label: __("Dashed", "team-member-block"), value: "dashed" },
    { label: __("Dotted", "team-member-block"), value: "dotted" },
    { label: __("Double", "team-member-block"), value: "double" },
    { label: __("Groove", "team-member-block"), value: "groove" },
    { label: __("Inset", "team-member-block"), value: "inset" },
    { label: __("Outset", "team-member-block"), value: "outset" },
    { label: __("Ridge", "team-member-block"), value: "ridge" },
];

export const HOVER_EFFECT = [
    { label: __("Select Hover Effect", "team-member-block"), value: "" },
    { label: __("Grow", "team-member-block"), value: "hvr-grow" },
    { label: __("Shrink", "team-member-block"), value: "hvr-shrink" },
    { label: __("Pulse", "team-member-block"), value: "hvr-pulse" },
    { label: __("Pulse Grow", "team-member-block"), value: "hvr-pulse-grow" },
    {
        label: __("Pulse Shrink", "team-member-block"),
        value: "hvr-pulse-shrink",
    },
    { label: __("Push", "team-member-block"), value: "hvr-push" },
    { label: __("Pop", "team-member-block"), value: "hvr-pop" },
    { label: __("Bounce In", "team-member-block"), value: "hvr-bounce-in" },
    { label: __("Bounce Out", "team-member-block"), value: "hvr-bounce-out" },
    { label: __("Rotate", "team-member-block"), value: "hvr-rotate" },
    { label: __("Grow Rotate", "team-member-block"), value: "hvr-grow-rotate" },
    { label: __("Float", "team-member-block"), value: "hvr-float" },
    { label: __("Sink", "team-member-block"), value: "hvr-sink" },
    { label: __("Bob", "team-member-block"), value: "hvr-bob" },
    { label: __("Hang", "team-member-block"), value: "hvr-hang" },
    { label: __("Skew", "team-member-block"), value: "hvr-skew" },
    {
        label: __("Skew Forward", "team-member-block"),
        value: "hvr-skew-forward",
    },
    {
        label: __("Skew Backward", "team-member-block"),
        value: "hvr-skew-backward",
    },
    {
        label: __("Wobble Horizontal", "team-member-block"),
        value: "hvr-wobble-horizontal",
    },
    {
        label: __("Wobble Vertical", "team-member-block"),
        value: "hvr-wobble-vertical",
    },
    {
        label: __("Wobble To Bottom Right", "team-member-block"),
        value: "hvr-wobble-to-bottom-right",
    },
    {
        label: __("Wobble To Top Right", "team-member-block"),
        value: "hvr-wobble-to-top-right",
    },
    { label: __("Wobble Top", "team-member-block"), value: "hvr-wobble-top" },
    {
        label: __("Wobble Bottom", "team-member-block"),
        value: "hvr-wobble-bottom",
    },
    { label: __("Wobble Skew", "team-member-block"), value: "hvr-wobble-skew" },
    { label: __("Buzz", "team-member-block"), value: "hvr-buzz" },
    { label: __("Buzz Out", "team-member-block"), value: "hvr-buzz-out" },
    { label: __("Forward", "team-member-block"), value: "hvr-forward" },
    { label: __("Fade", "team-member-block"), value: "hvr-fade" },
    { label: __("Back Pulse", "team-member-block"), value: "hvr-back-pulse" },
    {
        label: __("Sweep To Right", "team-member-block"),
        value: "hvr-sweep-to-right",
    },
    {
        label: __("Sweep To Left", "team-member-block"),
        value: "hvr-sweep-to-left",
    },
    {
        label: __("Sweep To Bottom", "team-member-block"),
        value: "hvr-sweep-to-bottom",
    },
    {
        label: __("Sweep To Top", "team-member-block"),
        value: "hvr-sweep-to-top",
    },
    {
        label: __("Bounce To Right", "team-member-block"),
        value: "hvr-bounce-to-right",
    },
    {
        label: __("Bounce To Left", "team-member-block"),
        value: "hvr-bounce-to-left",
    },
    {
        label: __("Bounce To Bottom", "team-member-block"),
        value: "hvr-bounce-to-bottom",
    },
    {
        label: __("Bounce To Top", "team-member-block"),
        value: "hvr-bounce-to-top",
    },
    { label: __("Radial Out", "team-member-block"), value: "hvr-radial-out" },
    { label: __("Radial In", "team-member-block"), value: "hvr-radial-in" },
    {
        label: __("Rectangle In", "team-member-block"),
        value: "hvr-rectangle-in",
    },
    {
        label: __("Rectangle Out", "team-member-block"),
        value: "hvr-rectangle-out",
    },
    {
        label: __("Shutter In Horizontal", "team-member-block"),
        value: "hvr-shutter-in-horizontal",
    },
    {
        label: __("Shutter Out Horizontal", "team-member-block"),
        value: "hvr-shutter-out-horizontal",
    },
    {
        label: __("Shutter In Vertical", "team-member-block"),
        value: "hvr-shutter-in-vertical",
    },
    {
        label: __("Shutter Out Vertical", "team-member-block"),
        value: "hvr-shutter-out-vertical",
    },
    { label: __("Icon Back", "team-member-block"), value: "hvr-icon-back" },
    {
        label: __("Icon Forward", "team-member-block"),
        value: "hvr-icon-forward",
    },
    { label: __("Icon Down", "team-member-block"), value: "hvr-icon-down" },
    { label: __("Icon Up", "team-member-block"), value: "hvr-icon-up" },
    { label: __("Icon Spin", "team-member-block"), value: "hvr-icon-spin" },
    { label: __("Icon Drop", "team-member-block"), value: "hvr-icon-drop" },
    { label: __("Icon Fade", "team-member-block"), value: "hvr-icon-fade" },
    {
        label: __("Icon Float Away", "team-member-block"),
        value: "hvr-icon-float-away",
    },
    {
        label: __("Icon Sink Away", "team-member-block"),
        value: "hvr-icon-sink-away",
    },
    {
        label: __("Icon Grow", "team-member-block"),
        value: "hvr-icon-grow",
    },
    {
        label: __("Icon Shrink", "team-member-block"),
        value: "hvr-icon-shrink",
    },
    {
        label: __("Icon Pulse", "team-member-block"),
        value: "hvr-icon-pulse",
    },
    {
        label: __("Icon Pulse Grow", "team-member-block"),
        value: "hvr-icon-pulse-grow",
    },
    {
        label: __("Icon Pulse Shrink", "team-member-block"),
        value: "hvr-icon-pulse-shrink",
    },
    {
        label: __("Icon Push", "team-member-block"),
        value: "hvr-icon-push",
    },
    {
        label: __("Icon Pop", "team-member-block"),
        value: "hvr-icon-pop",
    },
    {
        label: __("Icon Bounce", "team-member-block"),
        value: "hvr-icon-bounce",
    },
    {
        label: __("Icon Rotate", "team-member-block"),
        value: "hvr-icon-rotate",
    },
    {
        label: __("Icon Grow Rotate", "team-member-block"),
        value: "hvr-icon-grow-rotate",
    },
    {
        label: __("Icon Float", "team-member-block"),
        value: "hvr-icon-float",
    },
    {
        label: __("Icon Sink", "team-member-block"),
        value: "hvr-icon-sink",
    },
    {
        label: __("Icon Bob", "team-member-block"),
        value: "hvr-icon-bob",
    },
    {
        label: __("Icon Hang", "team-member-block"),
        value: "hvr-icon-hang",
    },
    {
        label: __("Icon Wobble Horizontal", "team-member-block"),
        value: "hvr-icon-wobble-horizontal",
    },
    {
        label: __("Icon Wobble Vertical", "team-member-block"),
        value: "hvr-icon-wobble-vertical",
    },
    {
        label: __("Icon Buzz", "team-member-block"),
        value: "hvr-icon-buzz",
    },
    {
        label: __("Icon Buzz Out", "team-member-block"),
        value: "hvr-icon-buzz-out",
    },
    {
        label: __("Curl Top Left", "team-member-block"),
        value: "hvr-curl-top-left",
    },
    {
        label: __("Curl Top Right", "team-member-block"),
        value: "hvr-curl-top-right",
    },
    {
        label: __("Curl Bottom Right", "team-member-block"),
        value: "hvr-curl-bottom-right",
    },
    {
        label: __("Curl Bottom Left", "team-member-block"),
        value: "hvr-curl-bottom-left",
    },
];
