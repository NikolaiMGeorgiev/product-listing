import "../../styles/filter.css";

import { artists, genres } from "../../../data/data";
import FilterIcon from "../icons/FilterIcon";
import { useRef, useState } from "react";
import CustomCheckbox from "../common/CustomCheckbox";
import ExIcon from "../icons/ExIcon";
import Slider from "../common/Slider";

export default function Filter({ data, setFilter }) {
    const [isExpanded, setIsExpanded] = useState(false);
    const formRef = useRef(null);
    
    const clearGenreRef = useRef(null);
    const clearArtistRef = useRef(null);

    const minPrice = data.reduce((accumulator, currentData) => {
        if (accumulator > currentData.price) {
            return Math.ceil(currentData.price);
        }
        return accumulator;
    }, Infinity);
    const maxPrice = data.reduce((accumulator, currentData) => {
        if (accumulator < currentData.price) {
            return  Math.ceil(currentData.price);
        }
        return accumulator;
    }, 0);

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(formRef.current);
        const data = {};
        for (let key of formData.keys()) {
            data[key] = formData.getAll(key)
        }
        setFilter(data);
        setIsExpanded(false);
    }

    const handleCancel = () => {
        clearArtistRef.current.click();
        clearGenreRef.current.click();
        setFilter({})
        setIsExpanded(false);
    }

    return (
        <div id="filter" className={isExpanded ? "expanded" : ""}>
            <div id="filter__icon-container" onClick={() => setIsExpanded(!isExpanded)}>
                <FilterIcon />
            </div>
            <form id="filter__wrapper" ref={formRef} onSubmit={handleSubmit} >
                <div id="filter__container">
                    <div id="filter__header">
                        <h2>Filter</h2>
                        <button id="close-btn" className="icon-btn" type="button" onClick={() => setIsExpanded(false)}>
                            <ExIcon />
                        </button>
                    </div>
                    <div id="filter__filters">
                        <div id="filter__price" className="section">
                            <div className="filter__section-header">
                                <span className="filter__title">Max price:</span>
                            </div>
                            <Slider min={minPrice} max={maxPrice} name="maxPrice" />
                        </div>
                        <CheckboxFilterSection
                            id="filter__genres"
                            title="Genres"
                            name="genre"
                            data={genres}
                            clearRef={clearGenreRef}
                        />
                        <CheckboxFilterSection
                            id="filter__artists"
                            title="Artists"
                            name="artist"
                            data={artists}
                            clearRef={clearArtistRef}
                        />
                    </div>
                </div>
                <div className="btn-container">
                    <button className="submit-btn" type="submit">Apply</button>
                    <button className="cancel-btn" type="button" onClick={handleCancel}>Clear</button>
                </div>
            </form>
        </div>
    )
}

function CheckboxFilterSection({ id, title, name, data, clearRef }) {
    const [checked, setChecked] = useState([]);
    
    const handleClearField = () => {
        setChecked([]);
    }

    const handleCheck = (isChecked, field) => {
        if (isChecked) {
            setChecked([...checked, field])
        } else {
            setChecked(checked.filter(single => single != field))
        }
    }

    return (
        <div id={id} className="section">
            <div className="filter__section-header">
                <span className="filter__title">{title}:</span>
                <button ref={clearRef} type="button" className="clear-btn text-btn" onClick={handleClearField}>Clear</button>
            </div>
            <ul className="filter__section-content no-style-list">
                {data.map(single => 
                    <li key={single}>
                        <CustomCheckbox 
                            name={name} 
                            value={single} 
                            labelText={single} 
                            isChecked={checked.indexOf(single) > -1}
                            setIsChecked={handleCheck}    
                        /> 
                        
                    </li>)}
            </ul>
        </div>
    )
}