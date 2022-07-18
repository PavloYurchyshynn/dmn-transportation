import style from './Header.module.css'
import dmnLogo from '../icons/dmnLogo.png'
import { NavLink } from 'react-router-dom'
import MainButton from '../MainButton/MainButton';

const Header = () => {
    return (
        <div className={style.header}>
            <div className={style.header__container}>
                <div className={style.header__container__logo}>
                    <img src={dmnLogo} alt='logo' />
                </div>
                <div className={style.header__container__nav}>
                    <NavLink to='/about-us'>
                        about us
                    </NavLink>
                    <NavLink to='/our-servises'>
                        our servises
                    </NavLink>
                    <NavLink to='/become-a-driver'>
                        become a driver
                    </NavLink>
                    <NavLink to='/dispatchers'>
                        dispatchers
                    </NavLink>
                    <NavLink to='/contact-us'>
                        contact us
                    </NavLink>
                </div>
                <div>
                    <MainButton text={'TRACK SHIPMENT'}/>
                </div>
            </div>
        </div>
    );
}

export default Header;