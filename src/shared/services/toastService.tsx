import React from "react";
import MatThemeService from "../themes/matThemeService";
import { POSITION } from "../types/enums";

export interface SnackbarOrigin {
    vertical: 'top' | 'bottom';
    horizontal: 'left' | 'center' | 'right';
}
export default class ToastService {

    /**
     * Usage: ToastService.showSuccess("Successfully Saved");
     * @param {*} _message 
     * @param {*} _autoHideDuration 
     * @param {*} _postition 
     */
    static showSuccess = (_message = "Success", _autoHideDuration = MatThemeService.toastAutoHideDuration, _postition = POSITION.TOP_CENTER) => {
        ToastService._show("success", _message, _autoHideDuration, _postition);
    }

    /**
     * Usage: ToastService.showError("Error Occured while saving");
     * @param {*} _message 
     * @param {*} _autoHideDuration 
     * @param {*} _postition 
     */
    static showError = (_message = "Error", _autoHideDuration = MatThemeService.toastAutoHideDuration, _postition = POSITION.TOP_CENTER) => {
        ToastService._show("error", _message, _autoHideDuration, _postition);
    }

    /**
     * Usage: ToastService.showWarning("No Changes to Save");
     * @param {*} _message 
     * @param {*} _autoHideDuration 
     * @param {*} _postition 
     */
    static showWarning = (_message = "Warning", _autoHideDuration = MatThemeService.toastAutoHideDuration, _postition = POSITION.TOP_CENTER) => {
        ToastService._show("warning", _message, _autoHideDuration, _postition);
    }

    /**
     * Usage: ToastService.showInfo("300 Vendors are available");
     * @param {*} _message 
     * @param {*} _autoHideDuration 
     * @param {*} _postition 
     */
    static showInfo = (_message = "Information", _autoHideDuration = MatThemeService.toastAutoHideDuration, _postition = POSITION.TOP_CENTER) => {
        ToastService._show("info", _message, _autoHideDuration, _postition);
    }


    //#region INTERNALs

    /**
     * Should be called only once in the container component
     * container component should be always loaded and available eg: shell
     * eg: ToastService.INIT(this);
     */
    static INIT = (_setShowToast = (_value: boolean) => { }) => {
        ToastService.setShowToast = _setShowToast;
    }

    static setShowToast = (_value: boolean) => { };
    static autoHideDuration = 3000;
    static toastType: "info" | "success" | "warning" | "error" = "info";
    static message = "Information";
    static variant: "filled" | "outlined" | "standard" = "filled";
    static elevation = 6;
    static anchorOrigin: SnackbarOrigin = { vertical: "top", horizontal: "center" };

    static closeToast = () => {
        ToastService.setShowToast(false);
    }

    /**
     * 
     * @param {*} _toastType "info" | "success" | "warning" | "error" <default: "info">
     * @param {*} _message 
     * @param {*} _autoHideDuration <default: 3000>
     * @param {*} _postition eg: POSITION.BOTTOM_RIGHT <Default: POSITION.TOP_CENTER>
     */
    static _show = (_toastType: "info" | "success" | "warning" | "error",
        _message: string, _autoHideDuration: number, _postition: number) => {
        ToastService.closeToast();

        ToastService.toastType = _toastType;
        ToastService.message = _message;
        ToastService.autoHideDuration = _autoHideDuration;

        switch (_postition) {
            case POSITION.TOP_LEFT: ToastService.anchorOrigin = { vertical: "top", horizontal: "left" }; break;
            case POSITION.TOP_CENTER: ToastService.anchorOrigin = { vertical: "top", horizontal: "center" }; break;
            case POSITION.TOP_RIGHT: ToastService.anchorOrigin = { vertical: "top", horizontal: "right" }; break;
            case POSITION.BOTTOM_LEFT: ToastService.anchorOrigin = { vertical: "bottom", horizontal: "left" }; break;
            case POSITION.BOTTOM_CENTER: ToastService.anchorOrigin = { vertical: "bottom", horizontal: "center" }; break;
            case POSITION.BOTTOM_RIGHT: ToastService.anchorOrigin = { vertical: "bottom", horizontal: "right" }; break;
            default: ToastService.anchorOrigin = { vertical: "top", horizontal: "center" }; break;
        }

        ToastService.setShowToast(true);
    }

    //#endregion

    //---
}