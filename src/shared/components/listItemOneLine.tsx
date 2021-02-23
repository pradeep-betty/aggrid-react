import { Divider, ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import React from "react";

interface IProps {
    icon: JSX.Element;
    text: string;
}
const ListItemOneLine = (_props: IProps) => {
    return (
        <>
            <ListItem button >
                <ListItemIcon>{_props.icon}</ListItemIcon>
                <ListItemText primary={_props.text} />
            </ListItem>
            {/* <Divider variant="inset" /> */}
        </>
    );
}
export default ListItemOneLine;