import type { Metadata } from 'next';
import '@/styles/font-color.css';
import '@/styles/font-size.css';
import '@/styles/font-weight.css';
import '@/styles/index.css';
import '@/styles/letter-spacing.css';
import '@/styles/line-height.css';
import '@/styles/text-align.css';
import '@/styles/text-transform.css';
import '@/styles/typography.css';
import '@/styles/flex.css';
import '@/styles/padding.css';

import { Footer, Header } from '@/components/base';

export const metadata: Metadata = {
  title: 'Pixieo',
  description:
    'Pixieo emerges as the premier destination for innovative software solutions, offering a treasure trove of cutting-edge technologies tailored to meet your needs. As a leading software company, Pirate Hub sets sail on a voyage of digital transformation, crafting bespoke software solutions that empower businesses to navigate the seas of technological advancement with confidence and agility.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body style={{ margin: 0 }}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
