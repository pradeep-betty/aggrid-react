import red from "@material-ui/core/colors/red";
import { createMuiTheme } from "@material-ui/core/styles";

/** ios Style Dark theme for this App
 * https://developer.apple.com/design/human-interface-guidelines/ios/visual-design/color/
 * https://material-ui.com/customization/default-theme/
 */
const IosDarkTheme = createMuiTheme({
    palette: {
        // dark/light mode
        type: "dark",
        // background-colors
        background: {
            paper: "#1C1C1E",
            default: "#000"
        },
        // primary-colors
        primary: {
            light: "#6bb3ff",
            main: "#0a84ff",
            dark: "#0058cb",
            contrastText: "#FFF"
        },
        // secondary-colors
        secondary: {
            light: "#ff375e",
            main: "#ff375e",
            dark: "#c50035",
            contrastText: "#FFF"
        },
        // error-colors
        error: {
            light: "#ff7b66",
            main: "#ff453a",
            dark: "#c40011",
            contrastText: "#FFF"
        },
        // warning-colors
        warning: {
            light: "#ffd14c",
            main: "#ffa00b",
            dark: "#c67100",
            contrastText: "#FFF"
        },
        // info-colors
        info: {
            light: "#9cffff",
            main: "#64d2ff",
            dark: "#1aa1cc",
            contrastText: "#FFF"
        },
        // success-colors
        success: {
            light: "#71ff88",
            main: "#30d158",
            dark: "#009e28",
            contrastText: "#FFF"
        },
    }
});

export default IosDarkTheme;