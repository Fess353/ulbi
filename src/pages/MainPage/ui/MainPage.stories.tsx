import React from "react";
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";
import { MainPage } from "./MainPage";

export default {
	title: 'pages/MainPage',
	component: MainPage,
} as ComponentMeta<typeof MainPage>;
const Template: ComponentStory<typeof MainPage> = () => <MainPage />;

export const MainPageLight = Template.bind({});
MainPageLight.args = {}

export const MainPageDark = Template.bind({});
MainPageDark.args = {}
MainPageDark.decorators = [ThemeDecorator(Theme.DARK)];