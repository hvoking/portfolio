// App imports
import './styles.scss';

export const RangeButtons = ({ currentState, setState, title, src, listOfItems }: any ) => {
  const onClick = (e: any) => {
    const currentTarget = e.target.innerHTML;
    const withPool = currentTarget === "pool";
    const withoutPool = currentTarget === "no pool";
    
    withPool ? setState(1) : 
    withoutPool ? setState(0) : 
    setState(parseInt(currentTarget));
  }

  return (
    <>
      <div>{title}</div>
        <div className="calculator-range-items">
          <img className="calculator-icon-image" src={src} alt="icon"/>
          {listOfItems.map((item: string, i: number) => {
            return (
              <div
                key={i} 
                className={
                  currentState !== parseInt(item) ? 
                  "calculator-price-button" : 
                  "calculator-price-button-active"
                }
                onClick={onClick}
              >
                {item}
              </div>
            )}
          )}
      </div>
    </>
  )
}