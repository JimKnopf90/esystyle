import React from 'react';
import {ComponentMeta, ComponentStory} from "@storybook/react";
import Input from "./Input";

export default {
    title: "esyfy Component/Input",
    component: Input
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args ) => <Input {...args}/>

export const Standard = Template.bind({});
Standard.args = {
    placeholder: 'placeholder',
    type: 'text'
}

export const TypePassword = Template.bind({});
TypePassword.args = {
    value: 'password',
    placeholder: 'placeholder',
    type: 'password'
}

export const TypeCheckbox = Template.bind({});
TypeCheckbox.args = {
    placeholder: 'placeholder',
    type: 'checkbox'
}

export const Disabled = Template.bind({});
Disabled.args = {
    disabled: true
}

export const ReadOnly = Template.bind({});
ReadOnly.args = {
    readonly: true
}