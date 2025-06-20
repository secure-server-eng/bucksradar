import { ComponentProps, PropsWithChildren } from "react";
import "./TradershubLink.scss";
import clsx from "clsx";

export const TradershubLink = ({
    children,
    className,
    href = "#",
    target = "_blank",
    ...rest
}: PropsWithChildren<ComponentProps<"a">>) => {
    return (
        <div
            className={clsx(
                "deriv-account-switcher__tradershub-link",
                className,
            )}
        >
            <a href={href} target={target} {...rest}>
                {children}
            </a>
        </div>
    );
};
