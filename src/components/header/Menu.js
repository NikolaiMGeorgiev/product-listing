import { useState } from "react"
import MenuIcon from "../icons/MenuIcon";
import ExIcon from "../icons/ExIcon";

const linksData = {
    all: {
        href: "",
        text: "All CDs"
    }, 
    new: {
        href: "new",
        text: "New Entires"
    }, 
    classics: {
        href: "classics",
        text: "Classics"
    },
    sale: {
        href: "sale",
        text: "Sale"
    }
};

export default function Menu() {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <div id="menu" className={isExpanded ? "expanded" : ""}>
            <div id="menu__header">
                <button id="expand-btn" className="icon-btn" type="button" onClick={() => setIsExpanded(!isExpanded)}>
                    <MenuIcon />
                </button>
                <button id="collapse-btn" className="icon-btn" type="button" onClick={() => setIsExpanded(!isExpanded)}>
                    <ExIcon />
                </button>
                <h2>Menu</h2>
            </div>
            <div id="menu__container">
                <nav>
                    <ul>
                        {Object.keys(linksData).map(name => 
                            <li key={name}>
                                <MenuLink name={name} />
                            </li>)}
                    </ul>
                </nav>
            </div>
        </div>
    )
}

function MenuLink({ name }) {
    const linkData = linksData[name] ? linksData[name] : linksData.all;
    const pathname = window.location.pathname;
    const isActive = linkData.href == pathname;

    return (
         <a href={linkData.href} className={isActive ? "active" : ""}>
            <span>{linkData.text}</span>
        </a>
    )
}