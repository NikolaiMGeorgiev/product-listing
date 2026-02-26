import "../../styles/dropdown.css";

import { useState } from "react";
import ArrowIcon from "../icons/ArrowIcon";

export default function Dropdown({ data, selectedValue, onClick }) {
    const [isExpanded, setIsExpanded] = useState(false);
    const selectedText = data.find(single => single.value == selectedValue)?.text ?? "Please select";
    const rows = data.length + 1;
    const style = isExpanded ? 
        {height: `calc(${rows}em + ${(rows + Math.ceil((rows) / 2)) * 10}px)`} : 
        {};

    return (
        <div className={`dropdown ${isExpanded ? "expanded" : ""}`} style={style}>
            <div 
                className="dropdown__selected-option" value={selectedValue} 
                onClick={() => setIsExpanded(!isExpanded)}
            >
                <span>{selectedText}</span>
                <ArrowIcon />
            </div>
            <ul className="no-style-list">
                {data.map(single => 
                    <li 
                        key={single.value}
                        className={`drowpdown__option ${single.value == selectedValue ? "selected" : ""}`}
                        onClick={() => { onClick(single.value); setIsExpanded(false) }}
                    >
                        {single.text}
                    </li>)}
            </ul>
        </div>
    )
}