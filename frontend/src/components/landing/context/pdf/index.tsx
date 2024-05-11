// React imports
import { useRef, useContext, createContext } from 'react';

const PdfContext: React.Context<any> = createContext(null)

export const usePdf = () => {
	return (
		useContext(PdfContext)
	)
}

export const PdfProvider = ({children}: any) => {
	const pdfRef = useRef<any>(null);

	const printDocument = () => {
		if (pdfRef.current) {
		  pdfRef.current.save();
		}
	}

	return (
		<PdfContext.Provider value={{ pdfRef, printDocument}}>
			{children}
		</PdfContext.Provider>
	)
}

PdfContext.displayName = "PdfContext";