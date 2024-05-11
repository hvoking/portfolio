// App imports
import { Buttons } from './buttons';
import { Options } from './options';
import { AreaSlider } from './slider';
import './styles.scss';

// Context imports
import { usePredictionApi } from '../context/api/prediction';

export const Left = () => {
  const { predictionData } = usePredictionApi();
  
  return (
    <div className="predictor-left">
      <div className="predictor-wrapper">
        <div className="predictor-price-wrapper">
          <h3 className="predictor-price">
            {predictionData ? predictionData : "-"}
          </h3>
          <Options/>
        </div>
        <AreaSlider/>
        <Buttons/>
      </div>
    </div>
  )
}

Left.displayName="Left"