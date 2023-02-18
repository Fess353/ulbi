import React from "react";
import { Button, ThemeButton } from "./Button";
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";

export default {
	title: 'shared/Button',
	component: Button,
} as ComponentMeta<typeof Button>;
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const PrimaryButton = Template.bind({});
PrimaryButton.args = {
	children: 'Button'
}

export const ClearButton = Template.bind({});
ClearButton.args = {
	children: 'Button Clear',
	theme: ThemeButton.CLEAR
}

export const OutlinedButton = Template.bind({});
OutlinedButton.args = {
	children: 'Button Outlined',
	theme: ThemeButton.OUTLINED
}

export const PrimaryButtonDark = Template.bind({});
PrimaryButtonDark.args = {
	children: 'Button'
}
PrimaryButtonDark.decorators = [ThemeDecorator(Theme.DARK)];

export const ClearButtonDark = Template.bind({});
ClearButtonDark.args = {
	children: 'Button Clear',
	theme: ThemeButton.CLEAR
}
ClearButtonDark.decorators = [ThemeDecorator(Theme.DARK)];


export const OutlinedButtonDark = Template.bind({});
OutlinedButtonDark.args = {
	children: 'Button Outlined',
	theme: ThemeButton.OUTLINED
}
OutlinedButtonDark.decorators = [ThemeDecorator(Theme.DARK)];
