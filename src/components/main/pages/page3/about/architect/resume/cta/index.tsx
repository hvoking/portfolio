export const CTA = ({ printDocument }: any) => {
	return (
		<button 
			onClick={printDocument}
			className="pages-primary-button" 
			style={{position: "absolute", bottom: "20px", right: "20px"}}
		>
			Download PDF
		</button>
	)
}

CTA.displayName="CTA";