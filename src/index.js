import "./styles/colors.css";
import "./styles/main.css";

import { createRoot } from "react-dom/client";
import { HashRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Products from "./components/Products";
import Footer from "./components/Footer";
import { classicsData, newEntriesData, salesDate, fullData } from "../data/data-handler";

const root = createRoot(document.getElementById("app"));
root.render(<App />);

function App() {
    return (
        <HashRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Products key="all" initialData={fullData}/>} />
                <Route path="/new" element={<Products key="new" initialData={newEntriesData}/>} />
                <Route path="/classics" element={<Products key="classics" initialData={classicsData}/>} />
                <Route path="/sale" element={<Products key="sale" initialData={salesDate}/>} />
            </Routes>
            <Footer />
        </HashRouter>
    )
}