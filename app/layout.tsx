import "./globals.css";

export const metadata = {
  title: "Konekt",
  description: "A nextjs blog app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
