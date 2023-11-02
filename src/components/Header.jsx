import {FullNavBar, Navbar} from './Navbar.jsx';
import {LogoImg} from './LogoImg.jsx';


export function Header ( {theme, isMobile}) {

    return (
        <header>
            <div className='logo'>
                <LogoImg />
            </div>
            <FullNavBar theme={theme} isMobile={isMobile} />
        </header>
    )

}