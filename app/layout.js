import "./globals.css";
import { site } from "../lib/config";

export const metadata = {
  title: `${site.name} — ${site.role}`,
  description: site.bio,
  openGraph: {
    title: `${site.name} — ${site.role}`,
    description: site.tagline,
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
