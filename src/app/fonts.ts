import localFont from 'next/font/local';

// For Satoshi (assuming you have local font files)
export const satoshi = localFont({
  src: [
    {
      path: '../../public/fonts/Satoshi-Variable.woff2',
      weight: '300 700',
      style: 'normal',
    },
  ],
  variable: '--font-satoshi',
  display: 'swap',
});

// If you don't have local files, use Google Fonts instead:
// import { Inter } from 'next/font/google';
// export const satoshi = Inter({ subsets: ['latin'], display: 'swap', variable: '--font-satoshi' });