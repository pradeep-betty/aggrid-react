import React from "react";
import { AppBar, Grid, Toolbar, Typography } from "@material-ui/core";

interface IProps {

}
const PublicFooter = (_props: IProps) => {
    return (
        <Grid container direction="row" justify="space-between" alignItems="center" style={{
            maxHeight: 24, minHeight: 24,
            paddingLeft: 8, paddingRight: 8,
            backgroundColor: "red",
        }}>
            <Typography variant="body1" color="inherit">Left</Typography>
            <Typography variant="body1" color="inherit">Center</Typography>
            <Typography variant="body1" color="inherit">Right</Typography>
        </Grid>
    );
}
export default PublicFooter;