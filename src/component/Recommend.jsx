import { useContext } from "react"
import UserContext from "../utils/userContext"
import recommend from "../componentcss/recommend.module.css";
const Recommend = () => {
    const showToggle = useContext(UserContext);
    const handleHide = () => {
        showToggle.setToggle(!showToggle.toggle);
    }
    return (
        <div>
            <div className={recommend.container}>
                <div className={recommend.buttonContainer}>
                    <button className={recommend.filterButton} onClick={handleHide}>
                        {
                            showToggle.toggle ? "< HIDE FILTER" : "> SHOW FILTER"
                        }
                    </button>
                </div>
                <select className={recommend.selectButton}>
                    <option>Recommend</option>
                    <option>Newest First</option>
                    <option>Price Low to High</option>
                    <option>Price High to Low</option>
                </select>

            </div>
        </div>

    )
}

export default Recommend