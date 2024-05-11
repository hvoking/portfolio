// App imports
import { Logo } from './logo';
import './styles.scss';

export const Right = () => {
	return (
		<div className="profile-picture-wrapper">
			{/*<img 
				src="static/components/landing/profile/profile_picture.png" 
				alt="profile-picture" 
				className="profile-picture"

				style={{transform: "translateY(35%)"}}
			/>*/}
			<Logo/>
		</div>
	)
}

Right.displayName="Right";