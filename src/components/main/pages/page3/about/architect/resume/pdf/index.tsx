// App  imports
import { Title } from './title';
import { Contact } from './contact';
import { Experience } from './experience';
import { Skills } from './skills';
import { Education } from './education';
import { Summary } from './summary';
import './styles.scss';

// Third party imports
import { PDFExport } from "@progress/kendo-react-pdf";

export const Pdf = ({ pdfRef }: any) => {
	return (
		<PDFExport
			ref={pdfRef}
			paperSize="auto"
			margin={40}
			fileName={`CV Gustavo ${new Date().getFullYear()}`}
			author="Gustavo Gonzalez"
		>
			<div className="resume-pdf-wrapper">
				<Title/>
				<div className="resume-small-division"></div>
				<Contact/>
				<div className="resume-long-division"></div>
				<div className="resume-inner-title">SUMMARY</div>
				<div className="resume-small-division"></div>
				<Summary/>
				<Skills/>
				<div className="resume-inner-title">EXPERIENCE</div>
		    	<div className="resume-small-division"></div>
				<Experience/>
		    	<Education/>
			</div>
		</PDFExport>
	)
}

Pdf.displayName="Pdf";