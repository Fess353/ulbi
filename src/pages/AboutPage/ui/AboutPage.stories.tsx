import React from "react";
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";
import { AboutPage } from "./AboutPage";

export default {
	title: 'pages/AboutPage',
	component: AboutPage,
} as ComponentMeta<typeof AboutPage>;
const Template: ComponentStory<typeof AboutPage> = () => <AboutPage />;

export const AboutPageLight = Template.bind({});
AboutPageLight.args = {}

export const AboutPageDark = Template.bind({});
AboutPageDark.args = {}
AboutPageDark.decorators = [ThemeDecorator(Theme.DARK)];