import { ComponentMeta, ComponentStory } from "@storybook/react";
import { PrimaryButton } from "../../src/common/components/buttons";

export default {
  title: "Example/MuiPrimaryButton",
  component: PrimaryButton,
  // argTypes: {
  //   color: { control: "color" },
  // },
} as ComponentMeta<typeof PrimaryButton>;

const Template: ComponentStory<typeof PrimaryButton> = (args) => <PrimaryButton {...args}>Button</PrimaryButton>;

export const Small = Template.bind({});
Small.args = {
  size: "small",
  variant: "contained",
  disabled: false,
  fullWidth: false,
};

export const Medium = Template.bind({});
Medium.args = {
  ...Small.args,
  size: "medium",
};

export const Large = Template.bind({});
Large.args = {
  ...Small.args,
  size: "large",
};
