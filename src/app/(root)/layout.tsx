import '@/s/globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Town Square | Building a Better Community',
  description: 'Created by Digital Alchemyst @ Alchemy Labs',
};

const RootLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <html lang='en'>
      <body className={`bg-slate-900 scrollbar-hide ${inter.className}`}>
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
