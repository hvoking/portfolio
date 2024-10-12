// App imports
import './styles.scss';

export const CancelCross = ({ onClick }: any) => {
	return (
		<div className="pages-cancel-cross">
			<img 
				onClick={onClick}
				src={process.env.PUBLIC_URL + "/static/icons/cancel_search.svg"} 
				alt="cancel-cross" 
				width="20px"
			/>
		</div>
	)
}

CancelCross.displayName="CancelCross";