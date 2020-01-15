
import test from 'ava';
import React from 'react';
import renderer from 'react-test-renderer';
import BaseButton, { BaseButtonDefaults } from './BaseButton';
import { Button } from '.';

const { activeClass: defaultActiveClass } = BaseButtonDefaults;

test('BaseButton: renders its defaults', (t) => {
	const component = renderer.create(<BaseButton />);
	t.snapshot(component.toJSON());
});

test('BaseButton: keydown.space adds the `active` class', (t) => {
	const component = renderer.create(<BaseButton />);
	const btn = component.root.findByType('button');
	btn.props.onKeyDown({ key: ' ' });
	t.is(btn.props.className, defaultActiveClass);
	t.snapshot(component.toJSON());
});

test('BaseButton: non-space keydown does not add the `active` class', (t) => {
	const component = renderer.create(<BaseButton />);
	const btn = component.root.findByType('button');
	btn.props.onKeyDown({ key: 'Enter' });
	t.not(btn.props.className, defaultActiveClass);
	t.snapshot(component.toJSON());
});

test('BaseButton: keyup.space removes the `active` class', (t) => {
	const component = renderer.create(<BaseButton />);
	const btn = component.root.findByType('button');
	btn.props.onKeyDown({ key: ' ' });
	t.is(btn.props.className, defaultActiveClass);
	btn.props.onKeyUp({ key: ' ' });
	t.is(btn.props.className, '');
	t.snapshot(component.toJSON());
});

test('BaseButton: non-space keyup does not remove the `active` class', (t) => {
	const component = renderer.create(<BaseButton />);
	const btn = component.root.findByType('button');
	btn.props.onKeyDown({ key: ' ' });
	t.is(btn.props.className, defaultActiveClass);
	btn.props.onKeyUp({ key: 'Enter' });
	t.is(btn.props.className, defaultActiveClass);
	t.snapshot(component.toJSON());
});

test('BaseButton: blur removes the `active` class', (t) => {
	const component = renderer.create(<BaseButton />);
	const btn = component.root.findByType('button');
	btn.props.onKeyDown({ key: ' ' });
	t.is(btn.props.className, defaultActiveClass);
	btn.props.onBlur();
	t.is(btn.props.className, '');
	t.snapshot(component.toJSON());
});

test('BaseButton: event callbacks are triggered in addition to internal activation behavior', (t) => {
	t.plan(8);
	const actions = {
		keydown: 'keydown',
		keyup: 'keyup',
		blur: 'blur',
	};
	const ButtonTest: React.FunctionComponent = () => {
		const [current, setCurrent] = React.useState();
		const update = (val: string) => (): void => { setCurrent(val); };

		return (
			<BaseButton
				data-current={current}
				onKeyDown={update(actions.keydown)}
				onKeyUp={update(actions.keyup)}
				onBlur={update(actions.blur)}
			>
				{ current }
			</BaseButton>
		);
	};
	const component = renderer.create(<ButtonTest />);
	const btn = component.root.findByType('button');

	const activate = (): void => {
		// trigger keydown and check className & contents
		btn.props.onKeyDown({ key: ' ' });
		t.is(btn.props.className, defaultActiveClass);
		t.is(btn.props.children, actions.keydown);
	};

	activate();

	// trigger keyup and check className & contents
	btn.props.onKeyUp({ key: ' ' });
	t.is(btn.props.className, '');
	t.is(btn.props.children, actions.keyup);

	activate();

	// trigger blur and check className & contents
	btn.props.onBlur();
	t.is(btn.props.className, '');
	t.is(btn.props.children, actions.blur);
});

test('BaseButton: a custom `activeClass` is set on keydown.space', (t) => {
	const active = 'custom-active';
	const component = renderer.create(<BaseButton activeClass={active} />);
	const btn = component.root.findByType('button');
	btn.props.onKeyDown({ key: ' ' });
	t.is(btn.props.className, active);
	t.snapshot(component.toJSON());
});

test('BaseButton: initially `active` is reflected in the className', (t) => {
	const component = renderer.create(<BaseButton active />);
	const btn = component.root.findByType('button');
	t.is(btn.props.className, defaultActiveClass);
	t.snapshot(component.toJSON());
});

test('Button: renders its defaults', (t) => {
	const component = renderer.create(<Button />);
	t.snapshot(component.toJSON());
});

test('Button: a custom `baseName` is rendered as a className', (t) => {
	const baseName = 'btn';
	const component = renderer.create(<Button baseName={baseName} />);
	const btn = component.root.findByType('button');
	t.is(btn.props.className, baseName);
	t.snapshot(component.toJSON());
});

test('Button: `variant` is converted into a BEM modifier class', (t) => {
	const variant = 'outline';
	const { baseName } = Button.defaultProps;
	const component = renderer.create(<Button variant={variant} />);
	const btn = component.root.findByType('button');
	t.is(btn.props.className, `${baseName} ${baseName}--${variant}`);
	t.snapshot(component.toJSON());
});
