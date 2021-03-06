import React from 'react';

/** Test if an element is hidden. By default, this includes `aria-hidden`. */
export const isHidden = (el: React.ReactElement, ariaHidden = true): boolean => {
	if (ariaHidden && (
		el.props['aria-hidden'] === true || el.props['aria-hidden'] === 'true'
	)) return true;
	if ('style' in el.props) {
		const { display, visibility } = el.props.style;
		if (visibility && visibility !== 'visible') return true;
		if (display === 'none') return true;
	}
	if (el.props.hidden) return true;
	return false;
};

/**
 * Recursively get the visible text content of an element and its descendants,
 * similar to Node.innerText.
 */
export const innerText = (children: React.ReactNode): string => {
	const strings = React.Children.map(children, (child) => {
		if (React.isValidElement(child)) {
			if (isHidden(child)) return '';
			return innerText(child.props.children);
		}
		if (Array.isArray(child)) return innerText(child);
		if (typeof child === 'number') return child.toString();
		if (typeof child === 'string') return child;
		return null;
	});
	if (strings) return strings.filter(Boolean).join('');
	return '';
};

export const focusableSelectors = [
	'[contentEditable=true]:not([tabindex="-1"])',
	'[tabindex]:not([tabindex="-1"])',
	'a[href]:not([tabindex="-1"])',
	'button:not([disabled]):not([tabindex="-1"])',
	'dialog',
	'embed:not([tabindex="-1"])',
	'iframe:not([tabindex="-1"])',
	'input:not([disabled]):not([tabindex="-1"])',
	'map[name] area[href]:not([tabindex="-1"])',
	'object:not([tabindex="-1"])',
	'select:not([disabled]):not([tabindex="-1"])',
	'summary:not([tabindex="-1"])',
	'textarea:not([disabled]):not([tabindex="-1"])',
];

export const getFocusable = (
	from: HTMLElement | Document | ShadowRoot | null = document,
): NodeListOf<HTMLElement> | null => {
	if (from) return from.querySelectorAll(focusableSelectors.join(','));
	return null;
};

/**
 * Check whether an HTML element has a CSS transition.
 */
export const hasTransition = (el?: HTMLElement | null, pseudoEl?: string): boolean => {
	if (el) {
		const styles = window.getComputedStyle(el, pseudoEl);
		return styles.getPropertyValue('transition-duration')
			.split(/,\s*/)
			.some((value) => parseFloat(value) > 0);
	}
	return false;
};

export const srOnly: React.CSSProperties = {
	position: 'absolute',
	width: '1px',
	height: '1px',
	padding: '0',
	margin: '-1px',
	overflow: 'hidden',
	clip: 'rect(0, 0, 0, 0)',
	whiteSpace: 'nowrap',
	border: '0',
};
