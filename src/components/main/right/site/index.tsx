// App imports
import { Plan } from './plan';
import { Layout } from './layout';
import { Header } from './header';
import './styles.scss';

export const Site = () => {
	return (
			<div className="site-wrapper">
				<Header/>
				<div style={{display: "grid", gridTemplateColumns: "1fr 1fr"}}>
					<Plan/>
					<Layout/>
				</div>
			</div>
	)
}

Site.displayName="Site";