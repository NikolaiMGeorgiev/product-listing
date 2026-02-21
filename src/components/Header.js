import "../styles/header.css";

import Logo from "./header/Logo";
import Menu from "./header/Menu";

export default function Header() {
    return (
        <header id="main-header">
            <Logo />
            <Menu />
        </header>
    )
}