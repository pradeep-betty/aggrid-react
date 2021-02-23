import React from "react";
import MatIconService from "../../shared/themes/matIconService";
import ToolbarComponent from "../../shared/components/toolbarComponent";
import MenuComponent from "../../shared/components/menuComponent";
import { AppBar, createStyles, makeStyles, Theme } from "@material-ui/core";


interface IProps {
    onThemeModeToggle: () => void;
}
const PublicHeader = (_props: IProps) => {
    const classes = useStyles();

    const [menuAnchorEl, setMenuAnchorEl] = React.useState<null | HTMLElement>(null);

    const onNotificationsClick = (event: any) => { }
    const onSearchClick = (e: any) => { }

    return (
        <>
            <AppBar position="static" color="primary" elevation={1} className={classes.appBar} >
                <ToolbarComponent title="Google" titleThemeColor="inherit"
                    leftActions={[
                        { icon: MatIconService.MENU, hint: "toggle sidenav", themeColor: "inherit" },
                    ]}
                    rightActions={[
                        { icon: MatIconService.SEARCH, hint: "global search", themeColor: "inherit", onClick: onSearchClick },
                        { icon: MatIconService.CONTRAST, hint: "toggle night mode", themeColor: "inherit", onClick: _props.onThemeModeToggle },
                        { icon: MatIconService.NOTIFICATIONS, hint: "notifications", themeColor: "inherit", onClick: onNotificationsClick, badgeCount: 2 },
                        { icon: MatIconService.ACCOUNT, hint: "account", themeColor: "inherit", onClick: (e: any) => { setMenuAnchorEl(e.currentTarget); }, },
                    ]}
                />
            </AppBar>
            <MenuComponent anchorEl={menuAnchorEl} onMenuClose={(e: any) => { setMenuAnchorEl(null); }}
                menuItems={[
                    { icon: MatIconService.ACCOUNT, text: "Account" },
                    { icon: MatIconService.SETTINGS, text: "Preferences" },
                    { isDivider: true },
                    { icon: MatIconService.LOGOUT, text: "Logout" }
                ]}
            />
        </>
    );
}
export default PublicHeader;

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        appBar: {
            zIndex: theme.zIndex.drawer + 1,
        },
    }),
);