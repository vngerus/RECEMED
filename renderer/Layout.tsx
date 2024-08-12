import React, { ReactNode } from 'react';
import { PageContextProvider } from './usePageContext';
import type { PageContext } from 'vike/types';
import './index.css';
import './Layout.css';
import { AuthProvider } from '../pages/hook/authContext';

function Layout({ children, pageContext }: { children: ReactNode; pageContext: PageContext }) {
  return (
    <React.StrictMode>
      <ContentWrapper pageContext={pageContext}>{children}</ContentWrapper>
    </React.StrictMode>
  );
}

function ContentWrapper({ children, pageContext }: { children: ReactNode; pageContext: PageContext }) {
  return (
    <PageContextProvider pageContext={pageContext}>
      <AuthProvider>
        <Content>{children}</Content>
      </AuthProvider>
    </PageContextProvider>
  );
}

function Content({ children }: { children: ReactNode }) {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      {children}
    </div>
  );
}

export { Layout };
