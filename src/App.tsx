import Navbar from "./layout/Navbar";
import {
  ColorScheme,
  ColorSchemeProvider,
  Loader,
  MantineProvider,
} from "@mantine/core";
import { useHotkeys, useLocalStorage } from "@mantine/hooks";
import Footer from "./layout/Footer";
import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import Blog1 from "./pages/Blogs/Blog1";

const Home = lazy(() => import("./pages/Home"));
const Shop = lazy(() => import("./pages/Shop"));
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
        <Navbar links={["Home", "Products", "Shop", "Contact"]} />
        <Suspense
          fallback={
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Loader size={80} />
            </div>
          }
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/blog/" element={<Blog />}>
              <Route path=":blog1" element={<Blog1 />} />
            </Route>
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />´
            <Route path="*" element={<Error />} />
          </Routes>
        </Suspense>
        <Footer />
      </MantineProvider>
    </ColorSchemeProvider>
  );
}

export default App;
