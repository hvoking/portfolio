// React imports
import { Children, cloneElement } from 'react';

// App imports
import './styles.scss';

// Third party imports
import { useSwipeable } from 'react-swipeable';

export const CarouselItem = ({children}: any) => {
	return (
		<div className="carousel-item">
			{children}
		</div>
	)
}

export const Carousel = ({ children, activeIndex, updateIndex }: any) => {	
	const handlers = useSwipeable({
		onSwipedLeft: () => updateIndex(activeIndex + 1),
		onSwipedRight: () => updateIndex(activeIndex - 1),
		preventScrollOnSwipe: true
	});
	
	return (
		<div className="carousel-track" {...handlers}>
			<div 
				className="inner" 
				style={{transform: `translateX(-${activeIndex * 100}%)`}}
			>
				{
					Children.map(children, (child, index) => {
						return cloneElement(child, {width: "100%"});
					})
				}
			</div>
		</div>
	)
}

Carousel.displayName="Carousel";