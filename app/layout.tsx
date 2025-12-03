import '../src/styles.scss';

export const metadata: { title: string; description: string } = {
  title: 'Axel Priam',
  description: 'Portfolio',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
