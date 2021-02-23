import red from "@material-ui/core/colors/red";
import { createMuiTheme } from "@material-ui/core/styles";

/** ios Style Light theme for this App
 * https://developer.apple.com/design/human-interface-guidelines/ios/visual-design/color/
 * https://material-ui.com/customization/default-theme/
 */
const IosLightTheme = createMuiTheme({
    palette: {
        // dark/light mode
        type: "light",
        // background-colors
        background: {
            paper: "#FFF",
            default: "#F2F2F7"
        },
        // primary-colors
        primary: {
            light: "#69a8ff",
            main: "#007aff",
            dark: "#004fcb",
            contrastText: "#FFF"
        },
        // secondary-colors
        secondary: {
            light: "#ff6b81",
            main: "#ff2d55",
            dark: "#c4002d",
            contrastText: "#FFF"
        },
        // error-colors
        error: {
            light: "#ff745b",
            main: "#ff3b30",
            dark: "#c30005",
            contrastText: "#FFF"
        },
        // warning-colors
        warning: {
            light: "#ff9501",
            main: "#ff9501",
            dark: "#c66600",
            contrastText: "#FFF"
        },
        // info-colors
        info: {
            light: "#93fbff",
            main: "#59c8fa",
            dark: "#0097c7",
            contrastText: "#FFF"
        },
        // success-colors
        success: {
            light: "#71fb88",
            main: "#34c759",
            dark: "#00952b",
            contrastText: "#FFF"
        },
    }
});

export default IosLightTheme;