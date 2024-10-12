// App imports
import { Page1 } from './page1'; 
import { Page2 } from './page2'; 
import { Grid } from './grid';
import './styles.scss';

// Context imports
import { useScroll } from '../../context/scroll';
import { useGrid } from '../../context/grid';

export const Pages = () => {
	const { debouncedScroll } = useScroll();
	const { onMouseMove, currentMousePosition } = useGrid();

	return (
		<div 
			className="pages-wrapper" 
			onScroll={debouncedScroll}
			onMouseMove={onMouseMove}
		>
			<Grid currentMousePosition={currentMousePosition}/>
			<Page1/>
			<Page2/>
		</div>
	)
}

Pages.displayName="Pages";