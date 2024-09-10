// React imports
import { useState, useContext, createContext } from 'react';

const ScrollContext: React.Context<any> = createContext(null)

export const useScroll = () => {
	return (
		useContext(ScrollContext)
	)
}

export const ScrollProvider = ({children}: any) => {
	const [ currentSection, setCurrentSection ] = useState('page1');

	const handleScroll = () => {
        const sections = ['page1', 'page2', 'page3', 'page4'];

        for (const sectionId of sections) {
            const section = document.getElementById(sectionId);
            if (section) {
                const rect = section.getBoundingClientRect();
                const windowHeight = window.innerHeight / 2;
                const insideSection = rect.top <= windowHeight && rect.bottom >= windowHeight;
                if (insideSection) {
                    setCurrentSection(sectionId);
                    break;
                  }
            }
        }
    };

    const debounce = (func: any, delay: any) => {
        let timer: any;
        return () => {
            clearTimeout(timer);
            timer = setTimeout(func, delay);
        };
    };

    const debouncedScroll = debounce(() => {
        handleScroll();
    }, 20);

    const scrollToSection = (sectionId: any) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

	return (
		<ScrollContext.Provider value={{ 
			handleScroll,
            debouncedScroll,
			scrollToSection,
			currentSection,
			setCurrentSection
		}}>
			{children}
		</ScrollContext.Provider>
	)
}

ScrollContext.displayName = "ScrollContext";