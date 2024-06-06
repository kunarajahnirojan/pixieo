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

import { Footer, Header } from '@/components/base';

export const metadata: Metadata = {
  title: 'Pirate Hub',
  description:
    'Pirate Hub emerges as the premier destination for innovative software solutions, offering a treasure trove of cutting-edge technologies tailored to meet your needs. As a leading software company, Pirate Hub sets sail on a voyage of digital transformation, crafting bespoke software solutions that empower businesses to navigate the seas of technological advancement with confidence and agility. Our mission at Pirate Hub is to revolutionize the software landscape, providing bespoke development services that cater to a diverse array of industries and business verticals. With a crew of seasoned developers and tech-savvy professionals, we specialize in crafting tailored software solutions that seamlessly integrate with your existing workflows, unleashing the full potential of your digital ecosystem. From robust web applications to scalable mobile solutions, our arsenal of services encompasses the entire software development lifecycle, from ideation and design to implementation and maintenance. We pride ourselves on our commitment to excellence, ensuring that each project we undertake is delivered on time, within budget, and exceeds the highest industry standards. At Pirate Hub, innovation is our compass, and customer satisfaction is our North Star. We are dedicated to providing unparalleled support and guidance throughout your software journey, leveraging the latest technologies and best practices to steer your business towards success in the digital age. Embark on a voyage of discovery with Pirate Hub, where every project is a testament to our passion for excellence and our unwavering dedication to helping businesses thrive in an ever-evolving digital landscape. Join us on this exhilarating journey, and lets chart a course towards a brighter, more prosperous future together.',
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
