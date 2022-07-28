import React, {Children} from "react";
import {ComponentMeta, ComponentStory} from "@storybook/react";
import EfyModal from "./EfyModal";
import {Primary} from "../../stories/Button.stories";

export default {
    title: "esyfy Component/Modal",
    component: EfyModal
} as ComponentMeta<typeof EfyModal>;

const OneItem: ComponentStory<typeof EfyModal> = (args) => <EfyModal {...args}></EfyModal>

export const Standard = OneItem.bind({});
Standard.args = {};
Standard.storyName = 'Standard Modal Fenster'