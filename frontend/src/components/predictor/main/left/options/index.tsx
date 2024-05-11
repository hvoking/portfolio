// App imports
import { Option } from './option';
import './styles.scss';

// Context imports
import { useProperty } from '../../context/filters/property';

export const Options = () => { 
  const { setBusinessType, setPropertyType } = useProperty();

  return (
    <div className="calculator-option-selection-items">
      <Option 
        setState={ setBusinessType } 
        name="tipo-negocio" 
        value={["Venda", "Locação"]}
      />
      <Option 
        setState={ setPropertyType } 
        name="tipo-imovel" 
        value={["Apartamento", "Casa"]}
      />
    </div>
  )
}