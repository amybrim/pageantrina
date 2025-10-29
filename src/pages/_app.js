import "@/styles/globals.css";
import Navbar from "@/components/Navbar";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>PageantRina 👑 — Your AI Pageant Coach</title>
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <Navbar />
      <main className="container">
        <Component {...pageProps} />
        <footer className="footer">Built with ❤️ by PageantRina 👑</footer>
      </main>
    </>
  );
}

