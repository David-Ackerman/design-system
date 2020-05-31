import React from 'react';
import { action } from '@storybook/addon-actions';
import {
	withKnobs, boolean, text,
} from '@storybook/addon-knobs';
import './index.stories.scss';
import { Modal } from '.';
import { Button } from '../Button';
import { TextField } from '../TextField';

export default {
	title: 'Modal',
	component: Modal,
	decorators: [withKnobs],
};

const ModalContents: React.FunctionComponent = () => (
	<p>
		Lorem ipsum dolor sit amet consectetur, adipisicing elit.
		Id cum reiciendis sed ab voluptas velit quibusdam expedita sapiente nemo?
		Modi accusamus minus distinctio error non! Provident quasi officia pariatur fugit.
	</p>
);

const { defaultProps } = Modal;

export const Default: React.FunctionComponent = () => (
	<Modal
		title={text('Title', 'Modal title')}
		hideTitle={boolean('Hide title', defaultProps.hideTitle)}
		addCloseButton={boolean('Include close button', defaultProps.addCloseButton)}
		closeOnBackdropClick={boolean('Close on backdrop click', defaultProps.closeOnBackdropClick)}
		closeOnEscape={boolean('Close on Escape', defaultProps.closeOnEscape)}
		onRequestClose={action('onRequestClose')}
		onInitialFocus={action('onInitialFocus')}
		isOpen
	>
		<ModalContents />
	</Modal>
);

export const WithActionBar: React.FunctionComponent = () => (
	<Modal
		isOpen
		title={text('Title', 'Modal title')}
		addCloseButton={boolean('Include close button', false)}
		onInitialFocus={action('onInitialFocus')}
		actions={[
			<Button variant="outline">Not okay</Button>,
			<Button variant="solid">Okay</Button>,
		]}
	>
		<ModalContents />
	</Modal>
);

export const NoFocusableElement: React.FunctionComponent = () => {
	const [isOpen, setOpen] = React.useState(false);
	const open = (): void => { setOpen(true); };
	const close = (): void => {
		setOpen(false);
		action('onRequestClose')();
	};
	return (
		<>
			<Button variant="solid" onClick={open}>Open</Button>
			<Modal
				title="Modal with no focusable element"
				hideTitle
				addCloseButton={false}
				closeOnBackdropClick={boolean('Close on backdrop click', defaultProps.closeOnBackdropClick)}
				closeOnEscape={boolean('Close on Escape', defaultProps.closeOnEscape)}
				isOpen={isOpen}
				onOpen={action('onOpen')}
				onRequestClose={close}
				onInitialFocus={action('onInitialFocus')}
			>
				<ModalContents />
			</Modal>
		</>
	);
};

export const MultiModal: React.FunctionComponent = () => {
	const firstNameRef = React.useRef<HTMLInputElement>();
	const lastNameRef = React.useRef<HTMLInputElement>();
	const [isOpen, setOpen] = React.useState(false);
	const [lastName, setFirst] = React.useState('');
	const [firstName, setLast] = React.useState('');
	const [resultOpen, setResultOpen] = React.useState(false);
	const open = (): void => setOpen(true);
	const close = (): void => {
		setOpen(false);
		// setFirst('');
		// setLast('');
		action('onRequestClose')();
	};
	const submit = (e: React.FormEvent<HTMLFormElement>): void => {
		setResultOpen(true);
		e.preventDefault();
	};
	const handleChange = ({ nativeEvent }: React.FormEvent<HTMLFormElement>): void => {
		const target = nativeEvent.target as HTMLInputElement;
		switch (target) {
			case lastNameRef.current:
				setFirst(target.value);
				break;
			case firstNameRef.current:
				setLast(target.value);
				break;
			default:
		}
	};
	const closeResult = (): void => setResultOpen(false);
	return (
		<>
			<Button variant="solid" onClick={open}>Open</Button>
			<Modal
				title="Your name"
				initialFocusRef={firstNameRef}
				isOpen={isOpen}
				onOpen={action('onOpen')}
				onRequestClose={close}
				closeOnEscape={!resultOpen}
				onInitialFocus={action('onInitialFocus (bottom modal)')}
				hideTitle={boolean('Hide title', defaultProps.hideTitle)}
				addCloseButton={boolean('Include close button', defaultProps.addCloseButton)}
				closeOnBackdropClick={boolean('Close on backdrop click', defaultProps.closeOnBackdropClick)}
				onRequestFocusWrap={(): boolean => false}
			>
				<form onSubmit={submit} onChange={handleChange}>
					<TextField value={firstName} label="First Name" inputRef={firstNameRef} />
					<TextField value={lastName} label="Last Name" inputRef={lastNameRef} />
					<Button variant="solid" type="submit">Submit</Button>
				</form>
			</Modal>
			<Modal
				title="Result"
				hideTitle
				isOpen={resultOpen}
				onRequestClose={closeResult}
				onInitialFocus={action('onInitialFocus (top modal)')}
			>
				{ `Hello, ${firstName} ${lastName}!` }
			</Modal>
		</>
	);
};
