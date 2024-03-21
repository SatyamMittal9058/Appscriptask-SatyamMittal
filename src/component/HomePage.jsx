import React, { useContext } from 'react'
import Header from './Header'
import Footer from './Footer'
import Body from './Body'
import Sidebar from './Sidebar'
import UserContext from '../utils/userContext'
import { filterArray } from '../Assets/SidebarArray/filterArray';
import homepage from '../componentcss/homepage.module.css';

const HomePage = () => {
  const showToggle = useContext(UserContext)
  return (
    <>
      <Header />
      <div className={homepage.sidebarContainer}>
        {showToggle.toggle ?
          <div className={homepage.sidebarContainerWidth}>

            <input className={homepage.customizableCheckbox} type="checkbox" />Customizable
            {Object.keys(filterArray).map((items) => (
              <div><Sidebar filtername={items} /></div>
            ))}
          </div>
          : <></>
        }
        <div className={homepage.bodyContainer}> <Body /></div>
      </div>
      <Footer />
    </>
  )
}

export default HomePage