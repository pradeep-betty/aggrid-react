import React from "react";
import { Menu, MenuItem, ListItemIcon, ListItemText, Divider, PopoverOrigin } from "@material-ui/core";
import MatIconService from "../themes/matIconService";

interface IMenuItem {
    isDivider?: boolean;
    text?: string | undefined;
    icon?: JSX.Element;
    iconColor?: string | undefined;
}

interface IProps {
    anchorEl: Element | ((element: Element) => Element) | null | undefined;
    anchorOrigin?: PopoverOrigin | undefined;
    transformOrigin?: PopoverOrigin | undefined;
    minWidth?: number | undefined;
    onMenuClose: (e: any) => void;
    menuItems: IMenuItem[];
}
const MenuComponent = (_props: IProps) => {

    const isMenuOpen = Boolean(_props.anchorEl);

    const getMenuItemOrDivider = (_menuItem: IMenuItem, _menuItemIndex: number) => {
        if (_menuItem.isDivider) {
            return <Divider key={`menuDivider${_menuItemIndex}`} />
        } else {
            return (
                <MenuItem key={`menuItem${_menuItemIndex}`} onClick={_props.onMenuClose}>
                    <ListItemIcon key={`menuItemIcon${_menuItemIndex}`} color={_menuItem.iconColor || "inherit"} >{_menuItem.icon}</ListItemIcon>
                    <ListItemText key={`menuItemText${_menuItemIndex}`} primary={_menuItem.text} />
                </MenuItem>
            );
        }
    }

    return (
        <Menu
            anchorEl={_props.anchorEl}
            anchorOrigin={_props.anchorOrigin || { vertical: 'top', horizontal: 'right' }}
            transformOrigin={_props.transformOrigin || { vertical: 'top', horizontal: 'right' }}

            keepMounted
            open={isMenuOpen}
            onClose={_props.onMenuClose}
            PaperProps={{
                style: {
                    minWidth: _props.minWidth || 240,
                },
            }}
        >
            {/* render menu-items */}
            {(_props.menuItems).map((_menuItem, _menuItemIndex) => { return getMenuItemOrDivider(_menuItem, _menuItemIndex); })}

        </Menu>
    );
}
export default MenuComponent;