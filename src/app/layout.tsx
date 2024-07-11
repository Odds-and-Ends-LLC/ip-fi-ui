// packages
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { Container, CssBaseline, ThemeProvider } from "@mui/material";

// components
import { ClientProviders, Modals, Navbar } from "@/sections/global";

// styles
import { theme } from "@/styles/theme";
import { getCurrentUserCart, getUserSession } from "@/lib/server/user";
import { Provider } from "jotai";

export const metadata = {
  title: "IPfi",
  description: "Intellectual Property Finance",
};

export default async function RootLayout({ children } : Readonly<{
  children: React.ReactNode;
}>) {
  const userSession = await getUserSession();
  const cart = await getCurrentUserCart();

  return (
    <html lang="en">
      <body>
        <AppRouterCacheProvider options={{ key: "css", enableCssLayer: true }}>
          <ThemeProvider theme={theme}>
            <Provider>
              <CssBaseline />
              <ClientProviders user={userSession?.data || null} cart={cart.data || []}>
                <Navbar />
                <Container>
                  {children}
                  <Modals/>
                </Container>
              </ClientProviders>
            </Provider>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
