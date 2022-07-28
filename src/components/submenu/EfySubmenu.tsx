import React from "react";
import "./submenu.css";
// @ts-ignore
import versanddienstleisterIcon from "../assets/Versanddienstleister-icon.png";
// @ts-ignore
import versanddienstleisterIconHover from "../assets/Versanddienstleister-icon-hover.png";

interface EfySubMenus {
    name: string,
    srcIcon: string,
    altIcon: string
    linkTo: string,
    submenuesMenu?: EfySubMenusMenue[]
}

interface EfySubMenusMenue {
    name: string,
    linkTo: string
}

export interface EfySubmenuProps {
    submenues: EfySubMenus[],
    submenuesMenu?: EfySubMenusMenue[]
}

const EfySubmenu = ({
    submenues,
 } : EfySubmenuProps) => {
    return (
        <>
            { submenues ? (
                <>
                    <div className={"efy-submenu"}>
                        <div className={"efy-submenu-content"}>
                            <div className={"efy-submenu-menu"}>
                                <ul>
                                    {submenues.map(submenue =>
                                        <>
                                            <li id={"submenue-" + submenue.name.toLocaleLowerCase()}>
                                                <a href={submenue.linkTo} className={"sm"}>
                                                    <div className={"sub"}>
                                                        <img src={submenue.srcIcon} alt={submenue.altIcon}/>
                                                        <span>{submenue.name}</span>
                                                    </div>
                                                    <div className={"sm-menue"}>
                                                        {submenue.submenuesMenu?.map(sm =>
                                                            <div className={"sm-items"}>
                                                                <a href={sm.linkTo}>{sm.name}</a>
                                                            </div>
                                                        )}
                                                    </div>
                                                </a>
                                            </li>
                                        </>
                                    )}
                                </ul>
                            </div>
                        </div>
                        <div className={"clr-divider-submenu"} />
                    </div>
                </>
            ) : (
                <></>
            )}
        </>
    )
}

export default EfySubmenu;