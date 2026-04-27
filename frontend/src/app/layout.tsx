import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'MeritLens — Seeing the Talent, Not Just the Score.',
  description:
    'An AI-powered evaluation platform that calculates a Grit Multiplier, adjusting raw scores by socioeconomic environment, school funding, and family income.',
  keywords: ['merit', 'equity', 'education', 'grit multiplier', 'SDG 10'],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:ital,wght@0,300;0,400;0,500;1,300&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
        />
      </head>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
