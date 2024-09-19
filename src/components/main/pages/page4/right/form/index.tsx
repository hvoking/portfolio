// React imports
import { useEffect } from 'react';

// App imports
import { Inputs } from './inputs';
import { Error } from './error';
import { CTA } from './cta';
import './styles.scss';

// Context imports
import { useUserMessage } from '../../../../../context/users/message';

export const Form = () => {
	const { name, email, message, error, dispatch } = useUserMessage();

	const onSubmit: any = async (e: any) => {
	  e.preventDefault();
	  dispatch({ type: 'message' });
	  sendMessage({ name, email, message });
	};

	const sendMessage = async ({ name, email, message }: any) => {
	    const response = await fetch(`${process.env.REACT_APP_API_URL}/message/`, {
			method: 'POST',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify({name, email, message }),
			}
		);
	    if (response.status === 200) {
	      dispatch({ type: 'success' });
	      console.log("Message sent");
	    }
	    else {
	      dispatch({ type: 'error' });
	   }
	}

	useEffect(() => {
	    dispatch({ type: 'clear' });
	}, []);
	
	return (
		<form action="#" method="POST" className="form-wrapper" onSubmit={onSubmit}>
		  <Inputs
		    dispatch={dispatch}
		    name={name}
		    email={email}
			message={message}
		  />
		  <Error error={error}/>
		  <CTA/>
		</form>
	)
}

Form.displayName="Form";