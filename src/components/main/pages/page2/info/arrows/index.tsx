import './styles.scss';

export const Arrows = ({ updateIndex, activeIndex }: any) => {
	const decrement = () => updateIndex(activeIndex - 1);
	const increment = () => updateIndex(activeIndex + 1);

	return (
		<>
			<div className="mobile-arrow-left" onClick={decrement}/>
			<div className="mobile-arrow-right" onClick={increment}/>
		</>
	)
}

Arrows.displayName="Arrows";