// App imports
import { Form } from './form';
import { NewMessage } from './new';
import './styles.scss';

// Context imports
import { useUserMessage } from '../../../../context/users/message';

export const Right = () => {
	const { isMessageSend, dispatch } = useUserMessage();

	return (
		<div className="contact-form-wrapper">
			<div className="page3-title">
				Let's bring Urban Data to Life!
			</div>
			{isMessageSend ? <NewMessage dispatch={dispatch}/> : <Form/>}
		</div>
	)
}

Right.displayName="Right";