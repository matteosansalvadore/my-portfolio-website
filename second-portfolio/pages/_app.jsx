import "../styles/globals.css";
import Navbar from "./components/navbar";

export default function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Navbar />
      <div>
        <Component {...pageProps} />
      </div>
    </div>
  );
}
