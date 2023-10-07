// packages
import { Container } from "@mui/material";

// components
import ThemeRegistry from "@/components/ThemeRegistry";
import { Navbar } from "@/components/shared";

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
          <Container fixed>
            {children}
          </Container>
        </ThemeRegistry>
      </body>
    </html>
  );
}
