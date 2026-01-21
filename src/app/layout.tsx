import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import { RoleProvider } from '@/context/RoleContext';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
  weight: ['400', '500', '600', '700'],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-jetbrains',
  weight: ['400', '500'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://gopichand.dev'),
  title: {
    default: 'Anabathula Gopichand | ML & GenAI Engineer',
    template: '%s | Anabathula Gopichand',
  },
  description: 'Production-grade ML systems, RAG pipelines, and data solutions. Expertise in Deep Learning, Agentic AI, and Data Analytics.',
  keywords: ['Machine Learning', 'GenAI', 'AI Engineer', 'Data Analyst', 'RAG Pipelines', 'Anabathula Gopichand', 'Python', 'Agentic AI'],
  authors: [{ name: 'Anabathula Gopichand' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'Gopichand Portfolio',
    title: 'Anabathula Gopichand | ML & GenAI Engineer',
    description: 'Explore the portfolio of Anabathula Gopichand, featuring production ML pipelines and advanced GenAI solutions.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${jetbrainsMono.variable}`}>
        <RoleProvider>
          {children}
        </RoleProvider>
      </body>
    </html>
  );
}
