import { useState } from "react";
import "../../styles/dropdown.css";
import ArrowIcon from "../icons/ArrowIcon";

export default function Dropdown({ data, selectedValue, onClick }) {
    const [isExpanded, setIsExpanded] = useState(false);
    const selectedText = data.find(single => single.value == selectedValue)?.text ?? "Please select";

    return (
        <div className={`dropdown ${isExpanded ? "expanded" : ""}`}>
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
                        onClick={() => onClick(single.value)}
                    >
                        {single.text}
                    </li>)}
            </ul>
        </div>
    )
}