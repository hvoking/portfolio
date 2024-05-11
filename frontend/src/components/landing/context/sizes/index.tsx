// App imports
import { BackgroundSizesProvider } from './background';
import { NodesSizesProvider } from './nodes';

export const SizesProvider = ({ children }: any) => {
	return (
		<BackgroundSizesProvider>
		<NodesSizesProvider>
			{children}
		</NodesSizesProvider>
		</BackgroundSizesProvider>
	)
}