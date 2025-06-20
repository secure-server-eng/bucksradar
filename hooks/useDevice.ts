import { useMediaQuery } from "usehooks-ts";

/** A custom hook to check for the client device and determine the layout to be rendered */
export const useDevice = () => {
    const isDesktop = useMediaQuery(`(min-width: 1280px)`);
    const isMobile = useMediaQuery(`(max-width: 600px)`);
    const isTablet = useMediaQuery(
        `(min-width: 601px) and (max-width: 1279px)`,
    );
    const isTabletPortrait = useMediaQuery(
        `(min-width: 601px) and (max-width: 1279px) and (orientation: portrait)`,
    );
    const isMobileOrTabletLandscape = useMediaQuery(
        `(max-width: 1279px) and (orientation: landscape)`,
    );
    return {
        /** returns Larger screen tablets [min-width: 1280px] */
        isDesktop,
        /**  returns Smaller screen tablets [max-width: 600px] */
        isMobile,
        /** returns Larger screen phones and smaller screen desktop [min-width: 601px and max-width: 1279px] */
        isTablet,
        /** returns tablet screen with portrait orientation [min-width: 601px and max-width: 1279px and orientation: portrait] */
        isTabletPortrait,
        /** returns mobile or medium screens in landscape orientation [max-width: 1279px and orientation: landscape] */
        isMobileOrTabletLandscape
    };
};
