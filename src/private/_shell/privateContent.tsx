import React from "react";
import ModelClientComponent from "../../shared/components/modelClientComponent";
import { createStyles, makeStyles, Theme, Toolbar } from "@material-ui/core";

const PrivateContent = () => {
    const classes = useStyles();

    return (
        <main className={classes.content}>
            <Toolbar />
            <ModelClientComponent />
        </main>
    );
}
export default PrivateContent;

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        content: {
            height: "100vh",
            overflow: "hidden"
        },
    }),
);


// import React from "react";
// import { createStyles, makeStyles, Theme, Toolbar, Typography } from "@material-ui/core";

// const PrivateContent = () => {
//     const classes = useStyles();

//     return (
//         <main className={classes.content}>
//             <Toolbar />
//             <div style={{
//                 padding: 24,
//                 height: `calc(${100}vh - ${64}px)`,
//                 overflow: "auto"
//             }}>
//                 {[1, 2, 3, 4, 5, 6, 7, 8].map((x, i) => {
//                     return (
//                         <Typography key={`key_${i}`} paragraph>
//                             {x} - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
//                             ut labore et dolore magna aliqua. Rhoncus dolor purus non enim praesent elementum
//                             facilisis leo vel. Risus at ultrices mi tempus imperdiet. Semper risus in hendrerit
//                             gravida rutrum quisque non tellus. Convallis convallis tellus id interdum velit laoreet id
//                             donec ultrices. Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
//                             adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra nibh cras.
//                             Metus vulputate eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo quis
//                             imperdiet massa tincidunt. Cras tincidunt lobortis feugiat vivamus at augue. At augue eget
//                             arcu dictum varius duis at consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem
//                             donec massa sapien faucibus et molestie ac.
//                         </Typography>
//                     );
//                 })}
//             </div>
//         </main>
//     );
// }
// export default PrivateContent;

// const useStyles = makeStyles((theme: Theme) =>
//     createStyles({
//         content: {
//             height: "100vh",
//             overflow: "hidden"
//         },
//     }),
// );
