import React from "react";
import clsx from "clsx";

import MatThemeService from "../themes/matThemeService";

import {
    createStyles, makeStyles, Theme, Drawer,
    Hidden, useTheme, Toolbar,
} from "@material-ui/core";

interface IProps {
    window?: () => Window; // auto-injected
    isSideNavOpen: boolean;
    onMobileSideNavClose: () => void;
    contentJsx: JSX.Element;
}
const SideNavComponent = (_props: IProps) => {
    const classes = useStyles();
    const theme = useTheme();

    const { window } = _props;
    const navContainer = window !== undefined ? () => window().document.body : undefined;

    return (
        <>
            {/* this drawer will be hidden on larger screens */}
            <Hidden smUp implementation="css">
                <Drawer variant="temporary"
                    open={MatThemeService.isMobileScreen && _props.isSideNavOpen}
                    onClose={_props.onMobileSideNavClose}
                    container={navContainer}
                    anchor={theme.direction === 'rtl' ? 'right' : 'left'}
                    ModalProps={{ keepMounted: true }} // Better open performance on mobile.
                    classes={{ paper: classes.drawerPaper }}
                >
                    {/* for spacing add empty toolbar */}
                    <Toolbar />

                    {/* content to render */}
                    {_props.contentJsx}

                </Drawer>
            </Hidden>

            {/* this drawer will be hidden on smaller screens */}
            <Hidden xsDown implementation="css">
                <Drawer variant="permanent"
                    className={clsx(classes.drawer, {
                        [classes.drawerOpen]: _props.isSideNavOpen,
                        [classes.drawerClose]: !_props.isSideNavOpen,
                    })}
                    classes={{
                        paper: clsx({
                            [classes.drawerOpen]: _props.isSideNavOpen,
                            [classes.drawerClose]: !_props.isSideNavOpen,
                        }),
                    }}
                    ModalProps={{ keepMounted: true }} // Better open performance on mobile.
                >
                    {/* for spacing add empty toolbar */}
                    <Toolbar />

                    {/* content to render */}
                    {_props.contentJsx}

                </Drawer>
            </Hidden>
        </>
    );
}
export default SideNavComponent;

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        drawer: {
            width: MatThemeService.drawerWidth,
            flexShrink: 0,
            whiteSpace: 'nowrap',
        },
        drawerPaper: {
            width: MatThemeService.drawerWidth,
        },

        drawerOpen: {
            width: MatThemeService.drawerWidth,
            transition: theme.transitions.create('width', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.enteringScreen,
            }),
        },
        drawerClose: {
            transition: theme.transitions.create('width', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen,
            }),
            overflowX: 'hidden',
            width: 0,//theme.spacing(7) + 1,
            [theme.breakpoints.up('sm')]: {
                width: 0,//theme.spacing(9) + 1,
            },
        },

    }),
);