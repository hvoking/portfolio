export const PagesLink = ({ href, text }: any) => (
	<a 
		href={href}
		style={{display: "inline"}}
		target="_blank"
		rel="noopener noreferrer"
	>
		{text}
	</a>
)

PagesLink.displayName="PagesLink";