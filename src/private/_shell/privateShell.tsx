import React from "react";
import MatThemeService from "../../shared/themes/matThemeService";
import PrivateContent from "./privateContent";
import PrivateHeader from "./privateHeader";
import PrivateNav from "./privateNav";

interface IProps {
    onThemeModeToggle: () => void;
}
const PrivateShell = (_props: IProps) => {

    // sideNav - sate
    const [isSideNavOpen, setIsSideNavOpen] = React.useState(!MatThemeService.isMobileScreen);
    const [isSideNavHiddenOnDesktop, setIsSideNavHiddenOnDesktop] = React.useState(false);

    const onSideNavToggle = () => {
        const isOpen = isSideNavOpen || (MatThemeService.isDesktopScreen && !isSideNavHiddenOnDesktop);
        if (MatThemeService.isDesktopScreen) { // dektop view
            setIsSideNavHiddenOnDesktop(isOpen); // requested to hide
        }
        // toggle it
        setIsSideNavOpen(!isOpen);
    };

    const closeMobileSideNav = () => {
        setIsSideNavHiddenOnDesktop(false);
        setIsSideNavOpen(false);
    };

    return (
        <>
            <PrivateHeader onThemeModeToggle={_props.onThemeModeToggle} onSideNavToggle={onSideNavToggle} />
            <PrivateNav isSideNavOpen={isSideNavOpen || (MatThemeService.isDesktopScreen && !isSideNavHiddenOnDesktop)} onMobileSideNavClose={closeMobileSideNav} />
            <PrivateContent />
        </>
    );
}
export default PrivateShell;