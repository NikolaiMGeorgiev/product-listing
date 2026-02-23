import { useState } from "react"
import MenuIcon from "../icons/MenuIcon";
import ExIcon from "../icons/ExIcon";
import { Link, useLocation } from "react-router-dom";
import { categoryData } from "../../../data/data";

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
                    <ul className="no-style-list">
                        {Object.keys(categoryData).map(name => <MenuLink name={name} key={name} />)}
                    </ul>
                </nav>
            </div>
        </div>
    )
}

function MenuLink({ name }) {
    const location = useLocation();
    const linkData = categoryData[name] ? categoryData[name] : categoryData.all;
    const isActive = linkData.href == location.pathname;

    return (
        <li className={isActive ? "active" : ""}>
            <Link to={linkData.href}>
                <span>{linkData.title}</span>
            </Link>
        </li>
    )
}