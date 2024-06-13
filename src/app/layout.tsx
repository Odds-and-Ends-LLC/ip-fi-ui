// packages
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { Container, CssBaseline, ThemeProvider } from "@mui/material";

// components
import { Navbar } from "@/sections/global";

// styles
import { theme } from "@/styles/theme";

export const metadata = {
  title: "IPfi",
  description: "Intellectual Property Finance",
};

export default async function RootLayout({ children } : Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body>
        <AppRouterCacheProvider options={{ key: "css", enableCssLayer: true }}>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <Navbar />
            <Container>
              {children}
            </Container>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
