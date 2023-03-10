import React from "react";
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";
import { Navbar } from "./Navbar";

export default {
	title: 'widgets/Navbar',
	component: Navbar,
} as ComponentMeta<typeof Navbar>;
const Template: ComponentStory<typeof Navbar> = (args) => <Navbar {...args} />;

export const NavbarLight = Template.bind({});
NavbarLight.args = {}

export const NavbarDark = Template.bind({});
NavbarDark.args = {}
NavbarDark.decorators = [ThemeDecorator(Theme.DARK)];