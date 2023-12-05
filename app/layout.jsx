import { Raleway } from 'next/font/google';
import './globals.css';

const raleway = Raleway({ subsets: ['latin'] });

export const metadata = {
  title: 'Dumindu Bandara',
  description: 'Code by Dumindu Bandara',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link rel="icon" href="/favicon.ico" />
      <body className={raleway.className}>{children}</body>
    </html>
  );
}
