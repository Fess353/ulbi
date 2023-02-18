import React from "react";
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";
import { PageLoader } from "./PageLoader";


export default {
	title: 'widgets/PageLoader',
	component: PageLoader,
} as ComponentMeta<typeof PageLoader>;
const Template: ComponentStory<typeof PageLoader> = (args) => <PageLoader {...args} />;

export const PageLoaderLight = Template.bind({});
PageLoaderLight.args = {}

export const PageLoaderDark = Template.bind({});
PageLoaderDark.args = {}
PageLoaderDark.decorators = [ThemeDecorator(Theme.DARK)];