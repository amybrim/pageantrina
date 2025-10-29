import "@/styles/globals.css";
import Head from "next/head";
import Navbar from "@/components/Navbar";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>PageantRina — Interview • Confidence • Stage</title>
        <meta name="description" content="Your poised, encouraging pageant interview coach." />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="alternate icon" href="/favicon.ico" />
        <meta name="theme-color" content="#0b0b10" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Poppins:wght@600;700;800&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className="site-wrap">
        <Navbar />
        <main className="container">
          <Component {...pageProps} />
        </main>
        <footer className="footer">
          <span>© {new Date().getFullYear()} PageantRina</span>
        </footer>
      </div>
    </>
  );
}

