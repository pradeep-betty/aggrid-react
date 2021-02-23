import { Divider, Paper, Typography } from "@material-ui/core";
import React from "react";
import ToastService from "../services/toastService";
import MatIconService from "../themes/matIconService";
import MatThemeService from "../themes/matThemeService";
import ToolbarComponent from "./toolbarComponent";

const ModelClientComponent = () => {

    return (
        <>
            {/* fixed-toolbar area */}
            <ToolbarComponent title="Sample" titleThemeColor="textSecondary" paddingLeft={8} bottomDivider
                leftActions={[
                    { icon: MatIconService.BACK, hint: "back", themeColor: "secondary", onClick: () => { ToastService.showInfo("Did you notice.?"); } }
                ]}
                rightActions={[
                    { icon: MatIconService.CLEAR, hint: "error", themeColor: "secondary", onClick: () => { ToastService.showError("An Error Occured."); } },
                    { icon: MatIconService.RELOAD, hint: "warn", onClick: () => { ToastService.showWarning("Warning Occured."); } },
                    { icon: MatIconService.SAVE, hint: "save", themeColor: "primary", onClick: () => { ToastService.showSuccess("Successfully saved."); } },
                ]}
            />

            {/* scrollable-content area */}
            <Paper style={{
                padding: 24,
                height: `calc(${100}vh - ${(MatThemeService.toolbarHeightInPx * 2)}px)`,
                overflow: "auto"
            }}>
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((x, i) => {
                    return (
                        <Typography key={`key_${i}`} paragraph>
                            {x} - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                        ut labore et dolore magna aliqua. Rhoncus dolor purus non enim praesent elementum
                        facilisis leo vel. Risus at ultrices mi tempus imperdiet. Semper risus in hendrerit
                        gravida rutrum quisque non tellus. Convallis convallis tellus id interdum velit laoreet id
                        donec ultrices. Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
                        adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra nibh cras.
                        Metus vulputate eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo quis
                        imperdiet massa tincidunt. Cras tincidunt lobortis feugiat vivamus at augue. At augue eget
                        arcu dictum varius duis at consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem
                        donec massa sapien faucibus et molestie ac.
                        </Typography>
                    );
                })}
            </Paper>
        </>
    )
}
export default ModelClientComponent;