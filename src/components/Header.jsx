import logo from '../assets/kevinRushLogo.png';
import {FaLinkedinIn} from "react-icons/fa";
import {FaGithub} from "react-icons/fa";

export default function Header() {
    return (
        <nav className="mb-20 flex items-center justify-between py-6">
            <div className="flex flex-shrink-0 items-center">
                <img src={logo} alt="Robert Heinemann Logo" className="mx-2 w-10"/>
            </div>
            <div className="icons m-8 flex items-center justify-center gap-4 text-2xl">
                <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">
                    <FaLinkedinIn />
                </a>
                <a href="https://www.github.com" target="_blank" rel="noreferrer">
                    <FaGithub />
                </a>
            </div>
        </nav>
    )
}