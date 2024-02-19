import '@/styles/globals.css';
import localFont from 'next/font/local';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import type { AppProps } from 'next/app';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

const SFProRounded = localFont({
  src: [
    {
      path: '../../public/fonts/SF-Pro-Rounded-Regular.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/SF-Pro-Rounded-Bold.otf',
      weight: '700',
      style: 'Bold',
    },
  ],
});

export default function App({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <main className={SFProRounded.className}>
        <Component {...pageProps} />
      </main>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}
