// App imports
import { Field } from './field';
import { Textarea } from './textArea';

export const Inputs = ({ dispatch, name, email, message }: any) => {
	return (
		<>
			<Field
				title="Name"
				name="name"
				type="text"
				value={name}
				dispatch={dispatch}
			/>
			<Field
				title="Email"
				name="email"
				type="email"
				value={email}
				dispatch={dispatch}
			/>
			<Textarea
				title="Message"
				name="message"
				value={message}
				dispatch={dispatch}
			/>
		</>
	)
}

Inputs.displayName="Inputs";