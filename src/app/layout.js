// packages
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { Container, CssBaseline, ThemeProvider } from "@mui/material";

// components
import { Navbar } from "@/components";

// lib
import { getUser } from "@/lib/queries/user";

// styles
import { theme } from "@/styles/theme";

export const metadata = {
  title: "IPfi",
  description: "Intellectual Property Finance",
};

export default async function RootLayout({ children }) {
  const user = await getUser();

  return (
    <html lang="en">
      <body>
        <AppRouterCacheProvider options={{ key: "css", enableCssLayer: true }}>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <Navbar user={user} />
            <Container>{children}</Container>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
