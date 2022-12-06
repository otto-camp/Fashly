import Navbar from "./layout/Navbar";
import {
  ColorScheme,
  ColorSchemeProvider,
  MantineProvider,
} from "@mantine/core";
import { useHotkeys, useLocalStorage } from "@mantine/hooks";
import Home from "./pages/Home";
import Footer from "./layout/Footer";
import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";

const Products = lazy(() => import("./pages/Products"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const Error = lazy(() => import("./layout/Error"));
const Blog = lazy(() => import("./pages/Blog"));

function App() {
  const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
    key: "mantine-color-scheme",
    defaultValue: "light",
    getInitialValueInEffect: true,
  });

  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));

  useHotkeys([["mod+J", () => toggleColorScheme()]]);

  return (
    <ColorSchemeProvider
      colorScheme={colorScheme}
      toggleColorScheme={toggleColorScheme}
    >
      <MantineProvider
        theme={{ colorScheme, fontFamily: "Greycliff CF, sans-serif" }}
        withGlobalStyles
        withNormalizeCSS
      >
        <Navbar links={["Home", "Products", "Blog", "About", "Contact"]} />
        <Suspense fallback={<div>Loading</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />´
            <Route path="*" element={<Error />} />
          </Routes>
        </Suspense>
        <Footer links={["Home", "Products", "Blog", "About", "Contact"]} />
      </MantineProvider>
    </ColorSchemeProvider>
  );
}

export default App;
