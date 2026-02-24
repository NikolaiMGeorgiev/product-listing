import "../../styles/filter.css";

import { artists, genres } from "../../../data/data";
import FilterIcon from "../icons/FilterIcon";
import { useState } from "react";
import CustomCheckbox from "./CustomCheckbox";
import ExIcon from "../icons/ExIcon";

export default function Filter() {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <div id="filter" className={isExpanded ? "expanded" : ""}>
            <div id="filter__icon-container" onClick={() => setIsExpanded(!isExpanded)}>
                <FilterIcon />
            </div>
            <form id="filter__wrapper">
                <div id="filter__container">
                    <div id="filter__header">
                        <h2>Filter</h2>
                        <button id="close-btn" className="icon-btn" type="button" onClick={() => setIsExpanded(false)}>
                            <ExIcon />
                        </button>
                    </div>
                    <div id="filter__filters">
                        <CheckboxFilterSection
                            id="filter__genres"
                            title="Genres"
                            name="genre"
                            data={genres}
                        />
                        <CheckboxFilterSection
                            id="filter__artists"
                            title="Artists"
                            name="artist"
                            data={artists}
                        />
                    </div>
                </div>
                <div className="btn-container">
                    <button type="submit">Apply</button>
                    <button type="button">Cancel</button>
                </div>
            </form>
        </div>
    )
}

function CheckboxFilterSection({ id, title, name, data }) {
    return (
        <div id={id} className="section">
            <div className="filter__section-header">
                <span className="filter__title">{title}:</span>
                <button type="button" className="clear-btn text-btn">Clear</button>
            </div>
            <ul className="no-style-list">
                {data.map(single => 
                    <li key={single}>
                        <CustomCheckbox name={name} value={single} labelText={single} />
                    </li>)}
            </ul>
        </div>
    )
}