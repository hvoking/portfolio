export const NewMessage = ({ dispatch }: any) => {
	return (
		<div style={{display: "grid"}}>
			<p className="pages-title" style={{whiteSpace: "normal"}}>
				Thank you for reaching out, I will return soon!
			</p>
			<button 
				onClick={() => dispatch({ type: 'clear' })} 
				className="pages-primary-button"
				style={{justifySelf: "end"}}
			>
				Send Another Message
			</button>
		</div>
	)
}

NewMessage.displayName="NewMessage";