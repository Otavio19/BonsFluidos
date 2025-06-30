import React from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
export function Layout({
  children
}: {
  children: React.ReactNode;
}) {
  return <div className="flex flex-col min-h-screen bg-amber-50">
      <Header />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>;
}