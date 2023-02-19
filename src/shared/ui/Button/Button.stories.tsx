import React from "react";
import { Button, ButtonSize, ButtonVariant } from "./Button";
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
	variant: ButtonVariant.CLEAR
}

export const OutlinedButton = Template.bind({});
OutlinedButton.args = {
	children: 'Button Outlined',
	variant: ButtonVariant.OUTLINED
}

export const BcgButton = Template.bind({});
BcgButton.args = {
	children: 'Button Bcg',
	variant: ButtonVariant.BCG
}
export const SquareButton = Template.bind({});
SquareButton.args = {
	children: '>',
	variant: ButtonVariant.BCG,
	square: true
}
export const BcgButtonSmall = Template.bind({});
BcgButtonSmall.args = {
	children: 'Button Bcg Small',
	variant: ButtonVariant.BCG,
	size: ButtonSize.S
}
export const BcgButtonMiddle = Template.bind({});
BcgButtonMiddle.args = {
	children: 'Button Bcg Middle',
	variant: ButtonVariant.BCG,
	size: ButtonSize.M
}
export const BcgButtonLarge = Template.bind({});
BcgButtonLarge.args = {
	children: 'Button Bcg Large',
	variant: ButtonVariant.BCG,
	size: ButtonSize.L
}
export const BcgInvertedButton = Template.bind({});
BcgInvertedButton.args = {
	children: 'Button InvertedBcg',
	variant: ButtonVariant.BCG_INV
}

export const PrimaryButtonDark = Template.bind({});
PrimaryButtonDark.args = {
	children: 'Button'
}
PrimaryButtonDark.decorators = [ThemeDecorator(Theme.DARK)];

export const ClearButtonDark = Template.bind({});
ClearButtonDark.args = {
	children: 'Button Clear',
	variant: ButtonVariant.CLEAR
}
ClearButtonDark.decorators = [ThemeDecorator(Theme.DARK)];


export const OutlinedButtonDark = Template.bind({});
OutlinedButtonDark.args = {
	children: 'Button Outlined',
	variant: ButtonVariant.OUTLINED
}
OutlinedButtonDark.decorators = [ThemeDecorator(Theme.DARK)];
