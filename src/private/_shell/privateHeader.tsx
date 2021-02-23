import { AppBar, createStyles, makeStyles, Theme } from "@material-ui/core";
import React from "react";
import MenuComponent from "../../shared/components/menuComponent";
import ToolbarComponent from "../../shared/components/toolbarComponent";
import MatIconService from "../../shared/themes/matIconService";

interface IProps {
    onThemeModeToggle: () => void;
    onSideNavToggle: () => void;
}
const PrivateHeader = (_props: IProps) => {
    const classes = useStyles();

    const [menuAnchorEl, setMenuAnchorEl] = React.useState<null | HTMLElement>(null);
    const onNotificationsClick = (event: any) => { }
    const onSearchClick = (e: any) => { }

    const getAccountMenu = () => {
        return (
            <MenuComponent anchorEl={menuAnchorEl} onMenuClose={(e: any) => { setMenuAnchorEl(null); }}
                menuItems={[
                    { icon: MatIconService.ACCOUNT, text: "Account" },
                    { icon: MatIconService.SETTINGS, text: "Preferences" },
                    { isDivider: true },
                    { icon: MatIconService.LOGOUT, text: "Logout" }
                ]}
            />
        );
    }

    return (
        <>
            <AppBar position="fixed" className={classes.appBar}>
                <ToolbarComponent title="Google" titleThemeColor="inherit"
                    paddingLeft={4} // to match the mini drawer icons
                    leftActions={[
                        { icon: MatIconService.MENU, hint: "toggle sidenav", themeColor: "inherit", onClick: _props.onSideNavToggle },
                    ]}
                    rightActions={[
                        { icon: MatIconService.SEARCH, hint: "global search", themeColor: "inherit", onClick: onSearchClick },
                        { icon: MatIconService.CONTRAST, hint: "toggle night mode", themeColor: "inherit", onClick: _props.onThemeModeToggle },
                        { icon: MatIconService.NOTIFICATIONS, hint: "notifications", themeColor: "inherit", onClick: onNotificationsClick, badgeCount: 2 },
                        { icon: MatIconService.ACCOUNT, hint: "account", themeColor: "inherit", onClick: (e: any) => { setMenuAnchorEl(e.currentTarget); }, },
                    ]}
                />
            </AppBar>
            {getAccountMenu()}
        </>
    );
}
export default PrivateHeader;

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        appBar: {
            zIndex: theme.zIndex.drawer + 1,
            paddingLeft: 0
        },
        toolBar: {
            paddingLeft: 0
        }
    }),
);