// App imports
import { Header } from './header';

export const Wrapper = ({children}: any) => {
	return (
		<div className="wrapper">
			<Header/>
			{children}
		</div>
	)
}

Wrapper.displayName="Wrapper";