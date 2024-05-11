// App imports
import './styles.scss';

export const Error = ({ error }: any) => {
  return (
    <>
      {error && 
        <p className="error-wrapper">
          {error}
        </p>
      }
    </>
  )
}

Error.displayName="Error";