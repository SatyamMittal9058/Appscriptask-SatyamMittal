import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { filterArray } from '../Assets/SidebarArray/filterArray';
import sidebar from '../componentcss/sidebar.module.css';
const Sidebar = ({ filtername }) => {
    const data=filterArray[filtername];
    const [showItems, setShowItems] = useState(false);
    return (
        <div className={sidebar.container}>
            <div className={sidebar.filters}>
                <p className={sidebar.filterName}>{filtername.toUpperCase()}</p>
                <p onClick={() => setShowItems(!showItems)} >
                    {
                        showItems ? <FontAwesomeIcon icon={faChevronUp} /> : <FontAwesomeIcon icon={faChevronDown} />
                    }

                </p>
            </div>
            {showItems?(<div>
                <p className={sidebar.unselectOption}>UnselectAll</p>
                {data.map((ele)=>(<div className={sidebar.filterOptions}><input type="checkbox" className={sidebar.optionName} />{ele}</div>))}
            </div>):<></>}
        </div>

    )
}

export default Sidebar