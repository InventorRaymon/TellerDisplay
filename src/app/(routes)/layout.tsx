/** @format */
import '../../styles/globals.css';
import React from 'react';

// Define the types for metadata
export const metadata = {
  title: 'QMS',
  description: 'Queue Management System',
};

// Define the type for the RootLayout props
interface RootLayoutProps {
  children: React.ReactNode; // Type for children prop
}

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <div>
          <main className="app">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
};

export default RootLayout;