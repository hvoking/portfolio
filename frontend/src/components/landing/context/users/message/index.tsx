import { useReducer, useContext, createContext } from 'react';

const UserMessageContext: React.Context<any> = createContext(null)

export const useUserMessage = () => {
	return (
		useContext(UserMessageContext)
	)
}

export const UserMessageProvider = ({children}: any) => {
	const initialState: UserMessageState = {
	  name: '',
	  email: '',
	  message: '', 
	  error: '', 
	  isLoading: false,
	  isMessageSend: false,
	};
	
	interface UserMessageState {
	  name: string;
	  email: string;
	  message: string; 
	  error: string; 
	  isLoading: boolean; 
	  isMessageSend: boolean; 
	}

	type UserMessageAction =
	  | { type: 'message' | 'success' | 'error' | 'clear' }
	  | { type: 'field'; fieldName: string; payload: string };

	const userMessageReducer = (state: UserMessageState, action: UserMessageAction) => {
	  switch (action.type) {
	    case 'field': {
			return {
				...state,
				[action.fieldName]: action.payload,
			};
	    }
	    case 'message': {
			return {
				...state,
				error: '',
				isLoading: true,
			};
	    }
	    case 'success': {
			return {
				...state,
				isMessageSend: true,
				isLoading: false,
			};
	    }
	    case 'error': {
			return {
				...state,
				error: 'Message not sent! Please reach out at gus@ugeom.com',
				isLoading: false,
				name: '',
				email: '',
				message: '', 
			};
	    }
	    case 'clear': {
			return {
				...state,
				name: '',
				email: '',
				message: '', 
				error: '',
				isMessageSend: false,
			};
	    }
	    default:
	    	return state;
	  }
	}
	
	const [ state, dispatch ] = useReducer(userMessageReducer, initialState);
	const { name, email, error, message, isLoading, isMessageSend } = state

	return (
		<UserMessageContext.Provider value={{
			dispatch,
			name, email, message, 
			error, isLoading, isMessageSend
		}}>
			{children}
		</UserMessageContext.Provider>
	)
}

UserMessageContext.displayName = "UserMessageContext";