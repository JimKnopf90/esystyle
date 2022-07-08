import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Button from "./Button";
import {Primary} from "../../stories/Button.stories";

export default {
  title: "esyfy Component/Button",
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Standard = Template.bind({});
Standard.args = {
  label: "Label",
  variant: 'primary'
};

export const Secondary = Template.bind({})
Secondary.args = {
  label: "Secondary",
  variant: 'secondary'
}

export const Disabled = Template.bind({});
Disabled.args = {
  label: "Label",
  disabled: true
}

export const ButtonSmall = Template.bind({});
ButtonSmall.args = {
  label: "Small",
  buttonSize: 'small'
}

export const ButtonMedium = Template.bind({});
ButtonMedium.args = {
  label: "Medium",
  buttonSize: 'medium'
}

export const ButtonLarge = Template.bind({});
ButtonLarge.args = {
  label: "Large",
  buttonSize: 'large'
}

export const ButtonFullWidth = Template.bind({});
ButtonFullWidth.args = {
  label: "Full Width",
  buttonSize: 'full-width'
}