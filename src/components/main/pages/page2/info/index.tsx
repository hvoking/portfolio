import { Tabs } from './tabs';
import { Arrows } from './arrows'
import { Slider } from './slider';
import { Right } from './right';

// Context imports
import { useWorks } from '../../../../context/works';

export const Info = () => {
	const { 
		currentWork, description, 
		m2bTheme, setM2bTheme,
		jukkaTheme, setJukkaTheme,
		airbnbTheme, setAirbnbTheme,
		activeIndex, setActiveIndex
	} = useWorks();
	
	const setCurrentTheme: any = {
		"m2b": setM2bTheme,
		"jukka": setJukkaTheme,
		"airbnb": setAirbnbTheme,
	}

	const currentTheme: any = {
		"m2b": m2bTheme,
		"jukka": jukkaTheme,
		"airbnb": airbnbTheme,
	}

	const works = Object.keys(description);

	const updateIndex = (newIndex: number) => {
		const worksLength = works.length;
		if (newIndex < 0) {
			newIndex = 0;
		}
		else if (newIndex >= worksLength) {
			newIndex = worksLength - 1
		}
		setActiveIndex(newIndex);
		const setTheme = setCurrentTheme[currentWork];
		setTheme(works[newIndex]);
	}
	return (
		<div className="slider-item-wrapper">
			<div className="slider-tabs-wrapper">
				<Arrows activeIndex={activeIndex} updateIndex={updateIndex} />
				<Tabs
					theme={currentTheme[currentWork]}
					description={description}
					setTheme={setCurrentTheme[currentWork]}
				/>
				<Slider 
					activeIndex={activeIndex}
					setActiveIndex={setActiveIndex}
					updateIndex={updateIndex}
					folder={currentWork}
					works={works}
					theme={currentTheme[currentWork]}
				/>
			</div>
			<Right 
				description={description} 
				theme={currentTheme[currentWork]}
			/>
		</div>
	)
}

Info.displayName="Info";