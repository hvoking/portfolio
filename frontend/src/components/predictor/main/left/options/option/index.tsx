// App imports
import './styles.scss';

export const Option = ({ setState, name, value }: any) => {
  const onChange = (e: any) => {setState(e.currentTarget.value)}

  return (
      <select 
        className="calculator-option-selection" 
        name={name} 
        id={name} 
        onChange={onChange}
      >
        {value.map((item: string, i: number) => (
          <option key={i} value={item}>
            {item}
          </option>
        ))}
      </select>
    )
}

Option.displayName="Option"
