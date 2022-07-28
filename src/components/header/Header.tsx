import React from 'react';
import "./header.css";
// @ts-ignore
import mainlogo from  '../assets/esyfy_logo_white.png';
import {Button, EfySubmenu} from "../index";
// @ts-ignore
import placeholderIcon from "../assets/dashboards.png";
// @ts-ignore
import esycalcLogo from "../assets/esyCalcWhite.png";
// @ts-ignore
import homeIcon from "../assets/home.png";
// @ts-ignore
import versanddienstleisterIcon from "../assets/Versanddienstleister-icon.png";
// @ts-ignore
import KundenversandIco from "../assets/Kundenversandkosten.png";
// @ts-ignore
import verkaufskanaeleIcon from "../assets/Verkaufskanaele.png";
// @ts-ignore
import repriceIcon from "../assets/Reprice.png";
// @ts-ignore
import synchroIcon from "../assets/Synchro.png";
import {EfySubmenuProps} from "../submenu/EfySubmenu";
import EfyModal from "../modal";
import EfyParagraph from "../modal/EfyParagraph";

type User = {
    name: string;
    token: string;
}

export interface HeaderProps {
    user?: User,
    submenu?: EfySubmenuProps[]
}

const Header = ({
    user, submenu
} : HeaderProps) => {
    // @ts-ignore
    // @ts-ignore
    return (
        <>
            <div className={"esyfy-header"}>
                <nav>
                    <img src={mainlogo} alt={"esyfy-logo"} className={"esyfy-logo"}/>
                    { user ? (
                        <>
                            <ul className={"nav-links"}>
                                <li>
                                    <a href={"/"}>Dokumentation</a>
                                </li>
                                <li>
                                    <a href={"/"}>Ticket</a>
                                </li>
                                <li className={"btn-login"}>
                                    <a href={""} className={"logout"}>Logout</a>
                                </li>
                            </ul>
                        </>
                    ) : (
                        <>
                            <ul className={"nav-links"}>
                                <li>
                                    <a href={"/"}>Kontakt</a>
                                </li>
                                <li>
                                    <a href={"/"}>Registrieren</a>
                                </li>
                                <li className={"btn-login"}>
                                    <Button  buttonSize={"small"} buttonFunction={"login"}>
                                        Login
                                    </Button>
                                </li>
                            </ul>
                        </>
                    )}
                </nav>
                <div className={"clr-divider"} />
            </div>
            {submenu ? (
                <>
                    <EfySubmenu submenues={submenu}/>
                </>
            ) : (<></>)}
            <EfyModal >

                <p>text</p>

            </EfyModal>
        </>

)
}

export default Header;