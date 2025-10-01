export const metadata = {
  title: 'Khroonos',
  description: 'Personal site',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
