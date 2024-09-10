export const Graphics = () => {
	return (
		<div style={{display: "grid", gridTemplateRows: "min-content auto"}}>
			<img
				height="35px"
				src="static/logos/generativa.svg" 
				alt="generativa-logo"
				style={{paddingBottom: "10px"}}
			/>
			<p style={{margin: "0"}}>
				Technological startup based in Blumenau, Brazil, 
				dedicated to enhancing processes for Real Estate Agents.
			</p>
			<img
				className="generativa-team" 
				src="static/components/landing/generativa/team.jpg" 
				alt="generativa-team"
			/>
			<div style={{fontSize: "0.8em", color: "rgba(51, 51, 51, 0.8)"}}>
				<strong>Generativa + Imoveis SC. </strong>
				Alessandro (top left),
				Gustavo (bottom left),
				Denis (bottom right).
			</div>
		</div>
	)
}

Graphics.displayName="Graphics";