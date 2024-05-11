// App imports
import { Left } from './left';
import { Maps } from './maps';
import './styles.scss';

export const Main = () => (
    <div className="predictor-main">
      <Left/>
      <Maps/>
    </div>
)

Main.displayName="Main";