import React from "react";
import { createStyles, Grid, makeStyles, Theme } from "@material-ui/core";
import SampleClient from "../sample-client/sampleClient";

interface IProps {
}
const PublicContent = (_props: IProps) => {
    const classes = useStyles();

    return (
        <Grid container direction="column"
            style={{
                height: `calc(100vh - ${64}px)`,
                overflowX: "hidden", overflowY: "hidden",
                flexWrap: "nowrap"
            }}>
            <SampleClient />
        </Grid>
    );
}
export default PublicContent;

const useStyles = makeStyles((theme: Theme) =>
    createStyles({

    }),
);