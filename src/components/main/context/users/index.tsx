// App imports
import { UserMessageProvider } from './message';

export const UsersProvider = ({ children }: any) => {
	return (
		<UserMessageProvider>
			{children}
		</UserMessageProvider>
	)
}