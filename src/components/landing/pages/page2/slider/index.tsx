// React imports
import { useState, useEffect } from 'react';

// App imports
import { Carousel, CarouselItem } from './carousel';
import { Arrows } from './carousel/arrows';
import './styles.scss';

export const Slider = ({ activeIndex, setActiveIndex, updateIndex, folder, works, theme }: any) => {
	useEffect(() => {
		setActiveIndex(works.findIndex((p: any) => p === theme))
	}, [ theme ])
	
	const workItems = works.map((item: any, index: number) => {
		const path = `static/components/landing/works/${folder}/${index}.jpg`;

		return (
			<CarouselItem>
				<img className="slider-image" src={path} alt={item}/>	
			</CarouselItem>
		)
	});

	return (
		<Carousel activeIndex={activeIndex} updateIndex={updateIndex}>
			{workItems}
		</Carousel>
	)
}

Slider.displayName="Slider";