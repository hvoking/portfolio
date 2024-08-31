// App imports
import { Left } from './left';
import { Maps } from './maps';
import { Right } from './right';
import { Pdf } from './pdf';
import { Wrapper } from './wrapper';
import './styles.scss';

// Context imports
import { MainProvider } from './context';

export const Main = () => (
  <MainProvider>
    <Wrapper>
      <div className="main">
        <Left/>
        <Maps/>
        <Right/>
      </div>
      <Pdf/>
    </Wrapper>
  </MainProvider>
)

Main.displayName="Main";