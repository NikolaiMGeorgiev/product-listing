import "../../styles/sort.css";

import { sorting } from "../../../data/data";
import Dropdown from "../common/Dropdown";

export default function Sort({ sortedBy, setSortedBy }) {
    return (
        <div id="sorting">
            <span>Sort by:</span>
            <Dropdown 
                data={sorting}
                selectedValue={sortedBy}
                onClick={(selectedValue) => setSortedBy(selectedValue)}
            />
        </div>
    )
}