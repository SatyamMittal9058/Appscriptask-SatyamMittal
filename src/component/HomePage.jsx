import React, { useContext } from 'react'
import Header from './Header'
import Footer from './Footer'
import Body from './Body'
import Sidebar from './Sidebar'
import UserContext from '../utils/userContext'
import { filterArray } from '../Assets/SidebarArray/filterArray';
import homepage from './homepage.module.css';

const HomePage = () => {
  const showToggle = useContext(UserContext)
  return (
    <>
      <Header />
      <div className={homepage.sidebarcontainer}>
        {showToggle.toggle ? 
        <div className={homepage.sidebarcontainerdiv}>
          <div className={homepage.sidebarcontainerdivdiv}><input className={homepage.sidebarcontainerinput}type="checkbox"/>Customizable</div>
          {Object.keys(filterArray).map((items)=>(
            <div><Sidebar filtername={items}/></div>
          ))} 
        </div> 
        : <></>
        }
        <div className={homepage.bodycontainer}> <Body /></div>
        
      </div>
      <Footer />
    </>
  )
}

export default HomePage