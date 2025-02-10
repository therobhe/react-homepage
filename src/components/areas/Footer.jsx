import {FOOTER_HEADLINE, FOOTER_INFORMATION} from "../../data/lang.js";
import {motion} from "framer-motion";
import {FaGithub, FaLinkedinIn} from "react-icons/fa";

export default function Footer() {
    const currentYear = new Date().getFullYear();
    
    return (
        <footer className="border-b border-neutral-900 pb-4">
            <motion.h2 className="my-20 text-center text-4xl"
                       whileInView={{opacity: 1, y: 0}}
                       initial={{opacity: 0, y: -100}}
                       transition={{duration: 0.5}}>
                {FOOTER_HEADLINE}
            </motion.h2>
            <div className="text-center tracking-tighter">
                <div className="icons m-8 flex items-center justify-center gap-4 text-2xl">
                    <a href="https://www.linkedin.com/in/robert-heinemann-0501a5193/" target="_blank" rel="noreferrer" aria-label="Link to Robert Heinemanns LinkedIn Profile">
                        <FaLinkedinIn />
                    </a>
                    <a href="https://github.com/therobhe" target="_blank" rel="noreferrer" aria-label="Link to Robert Heinemanns GitHub Profile">
                        <FaGithub />
                    </a>
                </div>
                <p className="my-4 text-neutral-200">{FOOTER_INFORMATION.address}</p>
                <p className="my-4 text-neutral-200">
                    <a href={`mailto:${FOOTER_INFORMATION.email}`} className="border-b" aria-label="Link to Robert Heinemanns Contact Email Adress">{FOOTER_INFORMATION.email}</a>
                </p>
                <p className="text-xs text-neutral-600">&copy; Robert Heinemann {currentYear}</p>
            </div>
        </footer>
    )
}