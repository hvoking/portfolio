// App imports
import { Pdf } from './pdf';
import { CTA } from './cta';
import { CancelCross } from '../../../../utils/cross';
import './styles.scss';

// Context imports
import { usePdf } from '../../../../../context/pdf'

export const Resume = ({ setActiveResume }: any) => {
	const onClick = () => setActiveResume(false);
	const { pdfRef, printDocument } = usePdf();

	return (
		<div className="generativa-wrapper">
		<div onClick={onClick}></div>
		<div className="resume-wrapper">
			<CancelCross onClick={onClick}/>
            <Pdf pdfRef={pdfRef}/>
            <CTA printDocument={printDocument}/>
		   </div>
		   <div onClick={onClick}></div>
		</div>
	)
}

Resume.displayName="Resume";