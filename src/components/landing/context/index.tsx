// App imports
import { ScrollProvider } from './scroll';
import { SizesProvider } from './sizes';
import { WorksProvider } from './works';
import { VisibilityProvider } from './visibility';
import { UsersProvider } from './users';
import { GridProvider } from './grid';
import { PdfProvider } from './pdf';

export const LandingProvider = ({children}: any) => {
  return (
    <UsersProvider>
    <VisibilityProvider>
    <SizesProvider>
    <GridProvider>
    <ScrollProvider>
    <WorksProvider>
    <PdfProvider>
      {children}
    </PdfProvider>
    </WorksProvider>
    </ScrollProvider>
    </GridProvider>
    </SizesProvider>
    </VisibilityProvider>
    </UsersProvider>
  )
}

LandingProvider.displayName="LandingProvider";