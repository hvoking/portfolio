// App imports
import './styles.scss';

export const Field = ({ title, name, type, value, dispatch}: any) => {
	const onDispatch = (e: any, fieldName: any) => {
		dispatch({
		  type: 'field',
		  fieldName: fieldName,
		  payload: e.currentTarget.value,
		})
	}

	return (
		<>
			<label className="pages-description" htmlFor="name">
				{title}:
			</label>
			<input 
				className="contact-input" 
				type={type} 
				id={name} 
				name={name} 
				onChange={(e: any) => onDispatch(e, name)}
				value={value}
				required
			/>
		</>
	)
}

Field.displayName="Field";