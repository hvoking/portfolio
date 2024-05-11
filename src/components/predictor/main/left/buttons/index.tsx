// App imports
import { RangeButtons } from './range';
import './styles.scss';

// Context imports
import { useProperty } from '../../context/filters/property';

const rangeOfNumbers = [ "1", "2", "3", "4" ]
const poolSelector = [ "pool", "no pool" ]

export const Buttons = () => {
  const { rooms, setRooms, suites, setSuites, garages, setGarages, bathrooms, setBathrooms, pool, setPool } = useProperty();

  return (
    <div className="predictor-buttons">
      <RangeButtons 
        currentState={rooms} 
        setState={setRooms} 
        title="Rooms" 
        src="static/icons/dormitorios.png" 
        listOfItems={ rangeOfNumbers }
      />
      <RangeButtons 
        currentState={ suites } 
        setState={ setSuites } 
        title="Suites" 
        src="static/icons/suites.png" 
        listOfItems={ rangeOfNumbers }
      />
      <RangeButtons 
        currentState={ bathrooms } 
        setState={ setBathrooms } 
        title="Bathrooms" 
        src="static/icons/banheiro.png" 
        listOfItems={ rangeOfNumbers }
      />
      <RangeButtons 
        currentState={ garages } 
        setState={ setGarages } 
        title="Garages" 
        src="static/icons/vagas.png" 
        listOfItems={ rangeOfNumbers }
      />
      <RangeButtons 
        currentState={ pool } 
        setState={ setPool } 
        title="Pool" 
        src="static/icons/piscina.png" 
        listOfItems={ poolSelector }
      />
    </div>
  )
}