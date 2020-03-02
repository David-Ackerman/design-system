import React from 'react';
import { action } from '@storybook/addon-actions';
import { withKnobs, boolean, text } from '@storybook/addon-knobs';
import '@nds/core/src/components/switch/index.scss';
import '@nds/core/src/components/icon/index.scss';
import Switch from '.';
import Icon from '../Icon';

export default {
	title: 'Switch',
	component: Switch,
	decorators: [withKnobs],
};

const { defaultProps } = Switch;

export const Default = (): JSX.Element => (
	<Switch
		onToggle={action('onToggle')}
		displayState={boolean('Display state', defaultProps.displayState)}
		on={text('On', defaultProps.on)}
		off={text('Off', defaultProps.off)}
		disabled={boolean('Disabled', false)}
	>
		Switch
	</Switch>
);

export const initiallyOn = (): JSX.Element => (
	<Switch
		onToggle={action('onToggle')}
		disabled={boolean('Disabled', false)}
		checked
	>
		Switch
	</Switch>
);

export const iconState = (): JSX.Element => (
	<Switch
		onToggle={action('onToggle')}
		on={<Icon variant="check" />}
		off={<Icon variant="close" />}
		disabled={boolean('Disabled', false)}
	>
		Switch
	</Switch>
);