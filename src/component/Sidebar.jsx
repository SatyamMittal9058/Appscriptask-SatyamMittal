import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { filterArray } from '../Assets/SidebarArray/filterArray';
import sidebar from './sidebar.module.css';
const Sidebar = ({ filtername }) => {
    const data=filterArray[filtername];
    const [showItems, setShowItems] = useState(false);
    return (
        <div className={sidebar.sidebarbox}>
            <div className={sidebar.sidebarboxdiv}>
                <span className={sidebar.sidebarboxspan}>{filtername.toUpperCase()}</span>
                <span onClick={() => setShowItems(!showItems)} >
                    {
                        showItems ? <FontAwesomeIcon icon={faChevronUp} /> : <FontAwesomeIcon icon={faChevronDown} />
                    }

                </span>
            </div>
            {showItems?(<div>
                <h1 className={sidebar.unselect}>UnselectAll</h1>
                {data.map((ele)=>(<div className={sidebar.filteroption}><input type="checkbox" className={sidebar.sidebaroptioninput} />{ele}</div>))}
            </div>):<></>}
        </div>

    )
}

export default Sidebar