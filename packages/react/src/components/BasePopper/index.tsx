import React from 'react';
import { Options, VirtualElement } from '@popperjs/core';
import { useForwardedRef, usePopper } from '../../utilities';

export interface BasePopperProps extends React.HTMLAttributes<HTMLElement>, Partial<Options> {
	/** Indicates whether the popper is rendered or not. */
	isOpen?: boolean;
	/**
	 * The outer HTML element name. Default is `div`.
	 * @see https://html.spec.whatwg.org/multipage/custom-elements.html#attr-is
	 */
	is?: 'div' | 'section' | 'ul' | 'ol' | 'dl';
	/**
	 * The reference element that the popper will be attached to.
	 * @see https://popper.js.org/docs/v2/constructors/#createpopper
	 */
	reference?: Element | VirtualElement | null;
}

const defaultProps: Options = {
	placement: 'auto',
	modifiers: [],
	strategy: 'absolute',
};

/**
 * A Popper.js component. Position the BasePopper's children relative to a
 * reference element.
 * @see https://popper.js.org
 */
export const BasePopper = React.forwardRef<HTMLElement, BasePopperProps>((
	{
		isOpen = false,
		is: Tag = 'div',
		reference,
		children,
		placement = defaultProps.placement,
		modifiers = defaultProps.modifiers,
		strategy = defaultProps.strategy,
		onFirstUpdate,
		...attributes
	}: BasePopperProps, ref,
) => {
	const [popper, setPopper] = useForwardedRef(ref);
	usePopper({
		popper,
		reference,
		children,
		placement,
		modifiers,
		strategy,
		onFirstUpdate,
	});

	if (!isOpen) return null;
	// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
	// @ts-ignore
	return <Tag ref={setPopper} {...attributes}>{ children }</Tag>;
});

BasePopper.defaultProps = defaultProps;
