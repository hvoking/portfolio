// React imports
import { useState, useEffect } from 'react';

// App imports
import { Background } from './background';
import { Foreground } from './foreground';

export const Copy = () => {
	const [ copiedText, setCopiedText ] = useState(false);
	const [ showTooltip, setShowTooltip ] = useState(false);

	const copyToClipboard = (text: any) => {
	    navigator.clipboard.writeText(text);
	    setCopiedText(true)
	};

	useEffect(() => {
		setShowTooltip(false);
        const delayTimeout = setTimeout(() => {
            setCopiedText(false);
        }, 2000);
        return () => clearTimeout(delayTimeout);
    }, [copiedText]);

	return (
		<div 
			onMouseEnter={() => setShowTooltip(true)}
			onMouseLeave={() => setShowTooltip(false)}
			onClick={() => copyToClipboard('gus@ugeom.com')} 
			style={{position: "relative"}}
		>
			<svg className="copy-button" viewBox="0 0 16 16" width="13">
				<Background/>
				<Foreground/>
			</svg>
			{showTooltip && !copiedText && <span className="copy-tooltip">copy</span>}
			{copiedText && <span className="copied">copied</span>}
		</div>

	)
}

Copy.displayName="Copy";