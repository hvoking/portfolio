// Context imports
import { useScroll } from '../../../../context/scroll';

export const NavLink = ({ page, title }: any) => {
	const { scrollToSection, currentSection } = useScroll();

	return (
		<button 
			className={currentSection === page ? "active" : ""}
			onClick={() => scrollToSection(page)}
		>
			{title}
		</button>
	)
}
NavLink.displayName="NavLink";