import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
import NextProgress from "next-progress";
import dynamic from 'next/dynamic'
import '@tabler/core/dist/css/tabler.min.css';
export default function App({ Component,router, pageProps }: AppProps) { 
const ClientHeader = dynamic(() => import('../components/Header'), { ssr: false })
  return (
    <>
    <div className={inter.className}>
        <NextProgress   color="#0054a6" options={{ showSpinner: false, speed: 500 }} />
      <ClientHeader />
      <div className="app">
      <Component {...pageProps} key={router.asPath} />
      </div>
      </div>
    </>
  );
}
