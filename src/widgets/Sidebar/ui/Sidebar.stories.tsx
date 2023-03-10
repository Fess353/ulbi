import React from "react";
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";
import { Sidebar } from "./Sidebar";

export default {
	title: 'widgets/Sidebar',
	component: Sidebar,
} as ComponentMeta<typeof Sidebar>;
const Template: ComponentStory<typeof Sidebar> = (args) => <Sidebar {...args} />;

export const SidebarLight = Template.bind({});
SidebarLight.args = {}

export const SidebarDark = Template.bind({});
SidebarDark.args = {}
SidebarDark.decorators = [ThemeDecorator(Theme.DARK)];