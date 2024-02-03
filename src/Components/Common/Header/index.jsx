import './style.css'
import CommonNavlinks from './CommonNavlinks';
import TemporaryDrawer from './Drawer'

const Header = () => {
  return (
    <nav>
        <h1>CryptoTracker <span style={{color: "var(--primary)"}}>.</span></h1>

        <CommonNavlinks className={"desktopMenu"}/>

        <div className='mobile-drawer'> <TemporaryDrawer/> </div>
    </nav>
  )
}

export default Header