import { Theme } from "@material-ui/core";
import IosDarkTheme from "./iosDarkTheme";
import IosLightTheme from "./iosLightTheme";

export class ThemeInfo {
    constructor(public readonly id: number, public readonly light: Theme, public readonly dark: Theme) { }
}

export default class MatThemeService {

    /** holds the user preference for dark or light mode */
    // TODO: implement the below
    static userSystemPrefersDarkMode = false;

    /** contains references to all the themes */
    private static applicationThemes: ThemeInfo[] = [];

    /** contains reference to the both the dark & light version of the current theme */
    private static currentThemeInfo: ThemeInfo;

    /** contains reference to the current-theme in either dark-mode or light-mode */
    private static currentTheme: Theme;
    /** returns the current-theme either dark-mode or light-mode */
    static getCurrentTheme(): Theme {
        return MatThemeService.currentTheme;
    }

    /** helps to idetify whether the current theme is in dark-mode */
    private static isCurrentThemeInDarkMode: boolean = false;
    /** helps to idetify whether the current theme is in dark-mode */
    static isDarkMode(): boolean { return MatThemeService.isCurrentThemeInDarkMode; }

    /** helps to idetify whether the current theme is in light-mode */
    private static isCurrentThemeInLightMode: boolean = false;
    /** helps to idetify whether the current theme is in light-mode */
    static isLightMode(): boolean { return MatThemeService.isCurrentThemeInLightMode; }

    /** should be called during the app init */
    static INIT = () => {
        let themeIndex = 0;
        MatThemeService.applicationThemes.push(new ThemeInfo(++themeIndex, IosLightTheme, IosDarkTheme));

        // set the curren theme as the default theme
        MatThemeService.setTheme(MatThemeService.applicationThemes[0], true);
    }


    /** set's the current-theme to light-Mode */
    static setLightMode = (): Theme => { return MatThemeService.setTheme(MatThemeService.currentThemeInfo, true); }

    /** set's the current-theme to dark-Mode */
    static setDarkMode = (): Theme => { return MatThemeService.setTheme(MatThemeService.currentThemeInfo, false); }

    /** Toggles to dark/light mode fo the curren-theme */
    static toggleMode = (): Theme => { return MatThemeService.isCurrentThemeInLightMode ? MatThemeService.setDarkMode() : MatThemeService.setLightMode(); }

    /** set the light theme version of the current theme */
    static setTheme = (_themeInfo: ThemeInfo, _isLightMode: boolean): Theme => {
        MatThemeService.isCurrentThemeInLightMode = _isLightMode;
        MatThemeService.isCurrentThemeInDarkMode = !_isLightMode;
        MatThemeService.currentThemeInfo = _themeInfo;
        MatThemeService.currentTheme = _isLightMode ? _themeInfo.light : _themeInfo.dark;
        // return
        return MatThemeService.currentTheme;
    }

    /** used to set the variants of the material-ui controls */
    static inputVariant: "standard" | "outlined" = "standard";
    /** used to set the layout spacing to dense or normal accross the applications */
    static useDenseLayout = false;
    /** side-nav drawer width */
    static drawerWidth = 312;

    /** delay in ms to show the toooltip after an element is being focused */
    static tooltipEnterDelay = 500;
    /** delay in ms to hide the toooltip after an element looses its focus */
    static tooltipExitDelay = 0;
    /** toast autohide duration */
    static toastAutoHideDuration = 3000;

    /** gives the theme's current toolbar height */
    static toolbarHeightInPx = 64;
    /** set the toolbar height based on the screen width
     * @param _isMinWidth600px pass the result of useMediaQuery('(min-width:600px)')
     */
    static setToolbarHeight = (_isMinWidth600px: boolean) => {
        MatThemeService.toolbarHeightInPx = _isMinWidth600px ? 64 : 56;
    }

    /** returns true if mobile screen */
    static isMobileScreen: boolean = false;

    /** returns true if desktop screen */
    static isDesktopScreen: boolean = false;

    /** set the toolbar height based on the screen width
     * @param _isMobileScreen pass the result of isWidthDown('xs', _props.width) 
     * Note: Hoc withWidth()(App) should be used for props to have the width
     */
    static setIsMobileScreen = (_isMobileScreen: boolean) => {
        MatThemeService.isMobileScreen = _isMobileScreen;
        MatThemeService.isDesktopScreen = !_isMobileScreen;
    }

    //---
}