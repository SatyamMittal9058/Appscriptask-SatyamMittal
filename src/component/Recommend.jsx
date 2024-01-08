import { useContext } from "react"
import UserContext from "../utils/userContext"
import recommend from "./recommend.module.css";
const Recommend = () => {
    const showToggle=useContext(UserContext);
    const handleHide=()=>{
        showToggle.setToggle(!showToggle.toggle);
    }
    return (
        <div>
            <div className={recommend.recommendbox}>
                <div className={recommend.recommendboxdiv}>
                <button className={recommend.recommendfilterbutton}onClick={handleHide}>
                    {
                        showToggle.toggle?"< HIDE FILTER":"> SHOW FILTER"
                    }
                    </button>
                </div>
                <select className={recommend.recommendselect}>
                    <option className={recommend.recommendoption}>Recommend</option>
                    <option className={recommend.recommendoption}>Newest First</option>
                    <option className={recommend.recommendoption}>Price Low to High</option>
                    <option className={recommend.recommendoption}>Price High to Low</option>
                </select>
                
            </div>
        </div>

    )
}

export default Recommend