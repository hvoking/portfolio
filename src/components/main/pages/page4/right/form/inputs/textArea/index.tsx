// App imports
import './styles.scss';

export const Textarea = ({ title, name, value, dispatch}: any) => {
	const onDispatch = (e: any, fieldName: any) => {
		dispatch({
		  type: 'field',
		  fieldName: fieldName,
		  payload: e.currentTarget.value,
		})
	}

	return (
		<>
			<label className="pages-description" htmlFor="message">
				{title}:
			</label>
			<textarea 
				className="contact-textarea" 
				id={name} 
				name={name}
				rows={4} 
				value={value}
				onChange={(e: any) => onDispatch(e, name)}
				maxLength={500}
				required
			/>
		</>
	)
}

Textarea.displayName="Textarea";