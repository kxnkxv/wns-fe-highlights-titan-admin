import Providers from '@wns/providers/Providers';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import Layout from '@wns/widgets/Layout';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <AppRouterCacheProvider>
          <Providers>
            <Layout>
              {children}
            </Layout>
          </Providers>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
