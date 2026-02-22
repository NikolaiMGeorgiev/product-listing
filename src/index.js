import "./styles/colors.css";
import "./styles/main.css";

import { createRoot } from "react-dom/client";
import Header from "./components/Header";
import Products from "./components/Products";
import Footer from "./components/Footer";

const root = createRoot(document.getElementById("app"));
root.render(<App />);

function App() {
    return (
        <>
            <Header />
            <Products />
            <Footer />
        </>
    )
}