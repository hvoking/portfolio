// App imports
import { BackgroundSizesProvider } from './background';

export const SizesProvider = ({ children }: any) => {
	return (
		<BackgroundSizesProvider>
			{children}
		</BackgroundSizesProvider>
	)
}