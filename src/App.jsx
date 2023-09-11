import Hero from "./components/Hero";
import Demo from "./components/Demo";

import "./App.css";
import { useEffect } from "react";

const App = () => {
  useEffect(() => {
    // Buat elemen script
    const script = document.createElement("script");
    script.src =
      "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2305381990530362";
    script.async = true;
    script.crossOrigin = "anonymous";

    // Sisipkan script ke dalam elemen head
    document.head.appendChild(script);

    return () => {
      // Hapus script saat komponen di-unmount
      document.head.removeChild(script);
    };
  }, []);
  return (
    <main>
      <div className="main">
        <div className="gradient" />
      </div>
      <div className="app">
        <Hero />
        <Demo />
      </div>
    </main>
  );
};

export default App;
