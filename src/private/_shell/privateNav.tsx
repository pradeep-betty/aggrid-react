import React from "react";
import MatIconService from "../../shared/themes/matIconService";

import SideNavComponent from "../../shared/components/sideNavComponent";
import ListItemOneLine from "../../shared/components/listItemOneLine";

import {
    Divider, List
} from "@material-ui/core";

interface IProps {
    isSideNavOpen: boolean;
    onMobileSideNavClose: () => void,
}
const PrivateNav = (_props: IProps) => {

    return (
        <SideNavComponent isSideNavOpen={_props.isSideNavOpen} onMobileSideNavClose={_props.onMobileSideNavClose}
            contentJsx={
                <>
                    <List>
                        {['Inbox', 'Starred', 'Send email', 'Drafts']
                            .map((text, index) => (
                                <ListItemOneLine key={`liol_${index}`} text={text} icon={index % 2 === 0 ? MatIconService.SETTINGS : MatIconService.CONTRAST} />
                            ))}
                    </List>
                    <Divider variant="inset" />
                    <List>
                        {['All mail', 'Trash', 'Spam']
                            .map((text, index) => (
                                <ListItemOneLine key={`liol_${index}`} text={text} icon={index % 2 === 0 ? MatIconService.SETTINGS : MatIconService.CONTRAST} />
                            ))}
                    </List>
                    <Divider variant="inset" />
                </>
            }
        />
    );
}
export default PrivateNav;