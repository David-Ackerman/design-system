module.exports = {
	docs: [
		'introduction',
		'principles',
		'getting-started',
		{
			type: 'category',
			label: 'Foundations',
			items: [
				'accessibility',
				'design-tokens',
				'color',
				'motion',
				// 'spacing',
				'typography',
			],
		},
		{
			type: 'category',
			label: 'Components',
			items: [
				// 'components/accordion',
				'components/button',
				'components/checkbox',
				'components/disclosure',
				'components/dropdown',
				// 'components/icon',
				// 'components/layout-grid',
				'components/link',
				'components/radio-buttons',
				'components/switch',
				'components/text-field',
				'components/tooltip',
			],
		},
		'migration',
	],
};
