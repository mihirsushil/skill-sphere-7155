import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Skill Sphere — AI coaching that fits in your pocket',
  description: 'Skill Sphere turns any smartphone video into instant, personalized soccer feedback—positional, technical, and tactical—so youth players improve faster without expensive wearables. Coaches receive adaptive drill recommendations and can share session plans, track progress, and earn badges within a supportive community. The platform scales from parent‑coaches to academy directors, delivering affordable, AI‑powered development for every level of the game.',
  openGraph: {
    title: 'Skill Sphere',
    description: 'AI coaching that fits in your pocket',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>{children}</body>
    </html>
  );
}
