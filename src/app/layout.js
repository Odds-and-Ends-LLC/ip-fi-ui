// packages
import { Container } from "@mui/material";

// components
import ThemeRegistry from "@/components/ThemeRegistry";
import { Navbar } from "@/components/shared";

// lib
import { getUser } from "@/lib/queries/user";

// styles
// import "./globals.css";

export const metadata = {
  title: "IPfi",
  description: "Intellectual Property Finance",
};

export default async function RootLayout({ children }) {
  const user = await getUser();

  return (
    <html lang="en">
      <body>
        <ThemeRegistry>
          {/* navbar not visible on login page */}
          <Navbar user={user} />
          <Container>{children}</Container>
        </ThemeRegistry>
      </body>
    </html>
  );
}
