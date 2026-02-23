import "../styles/header.css";

import Menu from "./header/Menu";

export default function Header() {
    return (
        <header id="main-header">
            <a className="logo" href="index.html">
                <img src="../public/logo.png" alt="Website Logo - DiscoTake" />
            </a>
            <Menu />
        </header>
    )
}