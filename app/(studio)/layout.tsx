import "../globals.css";

export const metadata = {
  title: "Noah Aghedo",
  description: "Noah Aghedo in collaboration with sanity.io",
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
