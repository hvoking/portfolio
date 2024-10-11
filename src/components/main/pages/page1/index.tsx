// App imports
import { Left } from './left';

export const Page1 = () => {
	return (
		<section id="page1">
				
				<div>
			      <video width="100%" style={{maxHeight: "80vh"}} controls>
			        <source src="https://ugeom-portfolio-video.s3.amazonaws.com/vector_tiles.mov"/>
			        Your browser does not support the video tag.
			      </video>
			    </div>
		</section>
	)
}

Page1.displayName="Page1";