import React from 'react';
import colorable from 'colorable';
import { Button } from '@wwnds/react';

const RGBToHex = (rgbString: string) => {
	const [red, green, blue] = rgbString.replace(/[()rgb]/g, '').split(/\s+/g);
	let r = parseInt(red, 10).toString(16);
	let g = parseInt(green, 10).toString(16);
	let b = parseInt(blue, 10).toString(16);

	if (r.length === 1) { r = `0${r}`; }
	if (g.length === 1) { g = `0${g}`; }
	if (b.length === 1) { b = `0${b}`; }

	return `#${r}${g}${b}`;
};

type ColorableA11y = {
	aa: boolean;
	aaLarge: boolean;
	aaa: boolean;
	aaaLarge: boolean;
}

const getHighestA11y = (obj?: ColorableA11y): string | undefined => {
	if (!obj) return undefined;
	const {
		aa, aaLarge, aaa,
	} = obj;
	if (aaa) return 'AAA';
	// if (aaaLarge) return 'AAA Large';
	if (aa) return 'AA';
	if (aaLarge) return 'AA Large';
	return 'Fail';
};

type WCAG = { hex: string; level: string; ratio: number; }

type SwatchProps = { color: string; textLight?: string; textDark?: string; }

export const Swatch = ({ color, textLight = '#fff', textDark = '#243547' }: SwatchProps): JSX.Element => {
	const [hex, setHex] = React.useState<string>();
	const [wcagLight, setLight] = React.useState<WCAG>();
	const [wcagDark, setDark] = React.useState<WCAG>();
	const [swatch, setSwatch] = React.useState<HTMLDivElement | null>(null);
	const [style, setStyle] = React.useState<React.CSSProperties>({
		backgroundColor: color,
	});

	const name = React.useMemo(
		() => color.replace('var(--', '').replace(')', '').replace('nds-', ''),
		[color],
	);

	React.useLayoutEffect(() => {
		if (swatch) {
			const bg = window.getComputedStyle(swatch).backgroundColor;
			const hexStr = RGBToHex(bg);
			setHex(hexStr);
			const [{ hex: backgroundColor, combinations }] = colorable({
				backgroundColor: hexStr,
				textLight,
				textDark,
			}, { compact: true, threshold: 0 });
			const [light, dark] = combinations;
			const textColor = (light.contrast > dark.contrast)
				? light.hex : dark.hex;
			setStyle({ color: textColor, backgroundColor });
			setLight({
				level: getHighestA11y(light.accessibility),
				ratio: light.contrast,
				hex: light.hex,
			});
			setDark({
				level: getHighestA11y(dark.accessibility),
				ratio: dark.contrast,
				hex: dark.hex,
			});
		}
	}, [swatch, textLight, textDark]);

	return (
		<div className="swatch" style={style} ref={setSwatch}>
			<div className="meta">
				<div className="swatch__name">{ name }</div>
				<div className="swatch__hex">{ hex }</div>
			</div>
			<div className="a11y">
				{ wcagLight && (
					<div style={{ color: wcagLight.hex }} title={wcagLight.ratio.toFixed(2)}>
						{ wcagLight.level }
					</div>
				)}
				{ wcagDark && (
					<div style={{ color: wcagDark.hex }} title={wcagDark.ratio.toFixed(2)}>
						{ wcagDark.level }
					</div>
				)}
			</div>
		</div>
	);
};

export const ColorFamily = (
	{ name, textLight, textDark }: { name: string; textLight?: string; textDark?: string; },
): JSX.Element => (
	<div className="family">
		{
			Array.from(Array(10).keys()).map((n) => {
				const token = `var(--nds-${name}-${(n + 1) * 10})`;
				return (
					<Swatch
						color={token}
						textLight={textLight}
						textDark={textDark}
						key={token}
					/>
				);
			})
		}
	</div>
);

export const AllFamilies = (): JSX.Element => {
	const [families, setFamilies] = React.useState<HTMLDivElement | null>(null);
	const toggleFullscreen = (): void => {
		if (document.fullscreenElement) {
			document.exitFullscreen();
		} else if (families) {
			families.requestFullscreen();
		}
	};
	return (
		<>
			<div style={{ marginBottom: 'var(--nds-spacing-4)' }}>
				<Button variant="outline" onClick={toggleFullscreen}>View fullscreen</Button>
			</div>
			<div className="families-outer" ref={setFamilies}>
				<div className="families">
					{ [
						'red',
						'yellow',
						'green',
						'teal',
						'cyan',
						'blue',
						'purple',
						'navy',
						'gray',
					].map((color) => (
						<ColorFamily
							key={color}
							name={color}
							textLight='#fff'
							textDark='#000'
						/>
					)) }
				</div>
			</div>
		</>
	);
};

export const ColorChip = ({ children }: { children: string; }): JSX.Element => {
	const colorValue = React.useMemo(() => {
		if (['#', 'rgb'].some((v) => children.startsWith(v))) return children;
		const token = (children.startsWith('nds')) ? children : `nds-${children}`;
		return `var(--${token})`;
	}, [children]);

	return (
		<code>
			<span className="color-chip">
				<span style={{ backgroundColor: colorValue }} />
			</span>
			{ children }
		</code>
	);
};
