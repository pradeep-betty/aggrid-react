import React from "react";
import { createStyles, Grid, makeStyles, Theme } from "@material-ui/core";
import PublicHeader from "./publicHeader";
import PublicFooter from "./publicFooter";
import PublicContent from "./publicContent";
import PublicSideNav from "./publicSideNav";

interface IProps {
    onThemeModeToggle: () => void;
}
const PublicShell = (_props: IProps) => {
    const classes = useStyles();
    return (
        <Grid container direction="column" justify="flex-start" alignItems="stretch" className={classes.root}>
            <PublicHeader onThemeModeToggle={_props.onThemeModeToggle} />
            <PublicSideNav />
            <PublicContent />
            {/* <PublicFooter /> */}
        </Grid>
    );
}
export default PublicShell;

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
        }
    }),
);