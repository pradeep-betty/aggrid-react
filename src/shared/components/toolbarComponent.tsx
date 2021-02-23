import React from "react";
import { OverridableComponent } from "@material-ui/core/OverridableComponent";
import { Toolbar } from "@material-ui/core";
import { Tooltip } from "@material-ui/core";
import MatThemeService from "../themes/matThemeService";
import HelperService from "../services/helperService";
import { Badge, Divider, IconButton, SvgIconTypeMap, Typography } from "@material-ui/core";

interface IActionElement {
    // element
    isElement?: boolean;
    element?: any;

    // icons props
    icon?: JSX.Element;
    badgeCount?: number;
    badgeColor?: "primary" | "secondary" | "error" | "default" | undefined;
    styleColor?: string;
    themeColor?: "primary" | "secondary" | "inherit";
    hint?: string;
    disabled?: boolean;
    onClick?: (e: any) => void;  //React.MouseEvent<HTMLElement>
}


const getBadgeOrIcon = (_actionElement: IActionElement) => {
    if (HelperService.isNotValidNumber(_actionElement.badgeCount, 1)) {
        return _actionElement.icon;
    } else {
        return (<Badge badgeContent={_actionElement.badgeCount} color={_actionElement.badgeColor || "secondary"}>
            {_actionElement.icon}
        </Badge>);
    }
}
const getAction = (_actionKeyPrefix: string, _actionElement: IActionElement, _actionIndex: number) => {
    if (_actionElement.isElement) { return _actionElement.element; }
    else {
        return (
            <Tooltip key={`${_actionKeyPrefix}ActionToolTip${_actionIndex}`} enterDelay={MatThemeService.tooltipEnterDelay} title={_actionElement.hint || ""} placement="bottom" arrow>
                <IconButton key={`${_actionKeyPrefix}ActionIconButton${_actionIndex}`}
                    disabled={_actionElement.disabled}
                    color={_actionElement.themeColor || undefined}
                    style={{ color: _actionElement.styleColor || undefined }}
                    onClick={_actionElement.onClick}
                >
                    {getBadgeOrIcon(_actionElement)}

                </IconButton>
            </Tooltip>
        );
    }
}

interface IProps {
    title: string;
    titleThemeColor?: "primary" | "secondary" | "inherit" | "initial" | "textPrimary" | "textSecondary" | "error" | undefined;
    paddingLeft?: number | undefined;
    leftActions: IActionElement[];
    rightActions: IActionElement[];
    bottomDivider?: boolean;
}
const ToolbarComponent = (_props: IProps) => {
    const leftActions: IActionElement[] = _props.leftActions || [];
    const title: string = _props.title || "Title";
    const titleThemeColor = _props.titleThemeColor;
    const rightActions: IActionElement[] = _props.rightActions || [];
    return (
        <>
            <Toolbar style={{ paddingLeft: _props.paddingLeft ? _props.paddingLeft : undefined }}>
                {/* leftIcons */}
                {leftActions.map((action, actionIndex) => { return getAction("left", action, actionIndex); })}
                {/* title */}
                <Typography variant="h6" style={{ flexGrow: 1 }} color={titleThemeColor}>{title}</Typography>
                {/* rightActions */}
                {rightActions.map((action, actionIndex) => { return getAction("right", action, actionIndex); })}
            </Toolbar>
            {_props.bottomDivider ? <Divider /> : null}
        </>
    );
}
export default ToolbarComponent;