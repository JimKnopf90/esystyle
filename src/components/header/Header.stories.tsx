import React from 'react';
import {ComponentMeta, ComponentStory} from "@storybook/react";
import Header from "./Header";
import homeIcon from "../assets/home.png";
import versanddienstleisterIcon from "../assets/Versanddienstleister-icon.png";
import KundenversandIco from "../assets/Kundenversandkosten.png";
import verkaufskanaeleIcon from "../assets/Verkaufskanaele.png";
import repriceIcon from "../assets/Reprice.png";
import synchroIcon from "../assets/Synchro.png";

export default {
    title: "esyfy Component/Header",
    component: Header
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (args) => <Header {...args}/>

export const LoggedOut = Template.bind({});
LoggedOut.args = {};

export const LoggedIn = Template.bind({});
LoggedIn.args = {
    user: {
        name: "Juergen Kanndas",
        token: "dsadasdsadasdk"
    }
}

export const LoggedInWithSubmenu = Template.bind({});
LoggedInWithSubmenu.args = {
    user: {
        name: "Juergen Kanndas",
        token: "dsadasdsadasdk"
    }, submenu: [
        {name: "Home", linkTo: "#", altIcon: "home icon", srcIcon: homeIcon },
        {name: "Versandeinstellung", linkTo: "#", altIcon: "vesanddienstleister icon", srcIcon: versanddienstleisterIcon,
            submenuesMenu: [
                {name: "Menu #1", linkTo: "#"},
                {name: "Menu #2", linkTo: "#"},
                {name: "Menu #3", linkTo: "#"},
                {name: "Menu #4", linkTo: "#"},
                {name: "Menu #5", linkTo: "#"},
                {name: "Menu #6", linkTo: "#"},
                {name: "Menu #7", linkTo: "#"},
            ]},
        {name: "Kundenversand", linkTo: "#", altIcon: "kundenversand icon", srcIcon: KundenversandIco},
        {name: "Verkaufskanäle", linkTo: "#", altIcon: "verkaufskanaele icon", srcIcon: verkaufskanaeleIcon},
        {name: "Reprice", linkTo: "#", altIcon: "reprice icon", srcIcon: repriceIcon},
        {name: "Synchronisation", linkTo: "#", altIcon: "synchro icon", srcIcon: synchroIcon},
    ]

}