import React from "react";
import { createStyles, Divider, Drawer, List, ListItem, ListItemIcon, ListItemText, makeStyles, Theme, Toolbar } from "@material-ui/core";
import MatIconService from "../../shared/themes/matIconService";

interface IProps {

}
const PublicSideNav = (_props: IProps) => {
    const classes = useStyles();

    return (
        <Drawer
            variant="permanent"
            className={classes.drawer}
            classes={{ paper: classes.drawerPaper }}
        >
            <Toolbar />
            <div className={classes.drawerContainer}>
                <List>
                    {['Inbox', 'Starred', 'Send email', 'Drafts', "1", "2", "3", "4", "5", "6", "7"].map((text, index) => (
                        <ListItem button key={text}>
                            <ListItemIcon>{index % 2 === 0 ? MatIconService.HOME : MatIconService.SETTINGS}</ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItem>
                    ))}
                </List>
                <Divider />
                <List>
                    {['All mail', 'Trash', 'Spam', "1", "2", "3", "4", "5", "6", "7"].map((text, index) => (
                        <ListItem button key={"brah" + text}>
                            <ListItemIcon>{index % 2 === 0 ? MatIconService.HOME : MatIconService.SETTINGS}</ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItem>
                    ))}
                </List>
            </div>
        </Drawer>
    );

}
export default PublicSideNav;


const drawerWidth = 312;
const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
        },
        appBar: {
            zIndex: theme.zIndex.drawer + 1,
        },
        drawer: {
            width: drawerWidth,
            flexShrink: 0,
        },
        drawerPaper: {
            width: drawerWidth,
        },
        drawerContainer: {
            overflow: 'auto',
        },
        content: {
            flexGrow: 1,
            padding: theme.spacing(3),
        },
    }),
);