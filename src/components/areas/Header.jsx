import logo from '../../assets/rh_logo.png';
import {FaLinkedinIn} from "react-icons/fa";
import {FaGithub} from "react-icons/fa";

export default function Header() {
    return (
        <header>
            <nav className="mb-20 flex items-center justify-between py-6">
                <div className="flex flex-shrink-0 items-center">
                    <img src={logo} alt="Robert Heinemann Logo" className="mx-2 w-20"/>
                </div>
                <div className="icons m-8 flex items-center justify-center gap-4 text-2xl">
                    <a href="https://www.linkedin.com/authwall?trk=gf&trkInfo=AQE_kpt3Ti-s2wAAAW2I5dognmDD8csdgmJ69IMix-7FT0TYhUXReOm9sK8E6U8x5WHAVloC3TNU4wQpxH6zathz19VjLsyn9u7YGG_7_y-2hYcdDDthfOfa4J2xfGllKPxrqkw=&originalReferer=https://www.google.com/&sessionRedirect=https%3A%2F%2Fde.linkedin.com%2Fin%2Frobert-heinemann-0501a5193" target="_blank" rel="noreferrer">
                        <FaLinkedinIn />
                    </a>
                    <a href="https://github.com/therobhe" target="_blank" rel="noreferrer">
                        <FaGithub />
                    </a>
                </div>
            </nav>
        </header>
    )
}