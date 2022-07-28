import React from "react";
import EfySubmenu from "./EfySubmenu";
import {ComponentMeta, ComponentStory} from "@storybook/react";
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

export default {
    title: "esyfy Component/Submenu",
    component: EfySubmenu
} as ComponentMeta<typeof EfySubmenu>;

const Template: ComponentStory<typeof EfySubmenu> = (args) => <EfySubmenu {...args} />

export const Standard = Template.bind({});
Standard.args = {
    submenues: [
        {name: "Home", linkTo: "#", altIcon: "home icon", srcIcon: homeIcon},
        {name: "Versandeinstellung", linkTo: "#", altIcon: "vesanddienstleister icon", srcIcon: versanddienstleisterIcon},
        {name: "Kundenversand", linkTo: "#", altIcon: "kundenversand icon", srcIcon: KundenversandIco},
        {name: "Verkaufskanäle", linkTo: "#", altIcon: "verkaufskanaele icon", srcIcon: verkaufskanaeleIcon},
        {name: "Reprice", linkTo: "#", altIcon: "reprice icon", srcIcon: repriceIcon},
        {name: "Synchronisation", linkTo: "#", altIcon: "synchro icon", srcIcon: synchroIcon},
    ]
}

export const SubmenuMenu = Template.bind({});
SubmenuMenu.args = {

    submenues: [
        {name: "Home", linkTo: "", altIcon: "", srcIcon: homeIcon,
            submenuesMenu: [
                {name: "Menu #1", linkTo: "#"},
                {name: "Menu #2", linkTo: "#"},
                {name: "Menu #3", linkTo: "#"},
            ]},
        {name: "Versandeinstellung", linkTo: "", altIcon: "", srcIcon: versanddienstleisterIcon,
            submenuesMenu: [
                {name: "Menu #1", linkTo: "#"},
                {name: "Menu #2", linkTo: "#"},
                {name: "Menu #3", linkTo: "#"},
                {name: "Menu #4", linkTo: "#"},
                {name: "Menu #5", linkTo: "#"},
                {name: "Menu #6", linkTo: "#"},
                {name: "Menu #7", linkTo: "#"},
            ]},
        {name: "Kundenversand", linkTo: "", altIcon: "", srcIcon: KundenversandIco},
        {name: "Verkaufskanäle", linkTo: "", altIcon: "", srcIcon: verkaufskanaeleIcon},
        {name: "Reprice", linkTo: "", altIcon: "", srcIcon: repriceIcon},
        {name: "Synchronisation", linkTo: "", altIcon: "", srcIcon: synchroIcon},
    ]
}