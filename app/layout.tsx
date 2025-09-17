export const metadata = {
  title: 'Khroonos',
  description: 'Personal site',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
