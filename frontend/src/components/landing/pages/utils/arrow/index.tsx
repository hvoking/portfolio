export const SVGArrow = ({ fill, width, strokeWidth }: any) => {
	return (
		<span>
			<svg viewBox="0 0 18 18" width={width} style={{transform: "translate(4px, 1px)"}}>
				<path
					d="
						M16, 4
						12, 16
						9, 11
						4, 8
						16, 4
					"
					fill="transparent"
					strokeWidth={strokeWidth}
					stroke={fill}
				/>
				<line
					x1="12"
					x2="9"
					y1="8"
					y2="11"
					stroke={fill}
					strokeWidth={strokeWidth}
				/>
			</svg>
		</span>
	)
}

SVGArrow.displayName="SVGArrow";