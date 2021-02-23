import React, { useState } from "react";
import MatIconService from "../../shared/themes/matIconService";
import ToastService from "../../shared/services/toastService";
import ToolbarComponent from "../../shared/components/toolbarComponent";
import { Divider, Grid, LinearProgress, Paper, Typography } from "@material-ui/core";
import { POSITION } from "../../shared/types/enums";

const SampleClient = () => {
    const [isProcessing, setIsProcessing] = useState(false);

    const handleSave = (e: any): void => {
        setIsProcessing(true);
        setTimeout(() => {
            setIsProcessing(false);
            ToastService.showSuccess("Saved", 3000, POSITION.TOP_CENTER);
        }, 3000);
    }

    const getContent = (count: number): string[] => {
        const oRET: string[] = [];
        for (let i = 1; i <= count; i++) {
            oRET.push(`Content-${i}`);
        }
        return oRET;
    }

    return (
        <Grid container direction="column" style={{ overflowY: "hidden", flexWrap: "nowrap" }}>
            <ToolbarComponent title="Dashboard" titleThemeColor="textSecondary"
                leftActions={[
                    { icon: MatIconService.BACK, hint: "back", onClick: (e: any) => { ToastService.showInfo("Information to notice.") } },
                    { icon: MatIconService.RELOAD, hint: "reload", themeColor: "secondary", onClick: (e: any) => { ToastService.showError("Error Occured.") } }
                ]}
                rightActions={[
                    { icon: MatIconService.SAVE, hint: "save", themeColor: "primary", disabled: isProcessing, onClick: handleSave }
                ]}
            />

            <Divider />
            {isProcessing ? <LinearProgress color="secondary" /> : null}

            <Grid container direction="column"
                style={{
                    height: `calc(100vh - ${129}px)`,
                    overflowX: "hidden", overflowY: "auto",
                    flexWrap: "nowrap"
                }}>
                <Paper style={{ padding: 8, flexWrap: "nowrap" }}>
                    {getContent(100).map((text, index) => {
                        return <Typography key={`keyTypography${index}`}>{text}</Typography>
                    })}
                </Paper>
            </Grid>
        </Grid>
    );
}
export default SampleClient;