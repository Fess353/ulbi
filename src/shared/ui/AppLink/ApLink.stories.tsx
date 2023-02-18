import React from "react";
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";
import { AppLink } from "./AppLink";

export default {
	title: 'shared/AppLink',
	component: AppLink,
	args: {
		to: '/'
	}
} as ComponentMeta<typeof AppLink>;
const Template: ComponentStory<typeof AppLink> = (args) => <AppLink {...args} />;

export const AppLinkLight = Template.bind({});
AppLinkLight.args = {
	children: 'AppLink',
}

export const AppLinkDark = Template.bind({});
AppLinkDark.args = {
	children: 'AppLinkDark',
}
AppLinkDark.decorators = [ThemeDecorator(Theme.DARK)];