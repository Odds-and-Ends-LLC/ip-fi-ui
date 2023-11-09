// packages
import { Container } from "@mui/material";

// components
import ThemeRegistry from "@/components/ThemeRegistry";
import { Navbar } from "@/components/shared";

// styles
import "./globals.css";

export const metadata = {
  title: "IPfi",
  description: "Intellectual Property Finance",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ThemeRegistry>
          <Navbar />
          <Container>{children}</Container>
        </ThemeRegistry>
      </body>
    </html>
  );
}
