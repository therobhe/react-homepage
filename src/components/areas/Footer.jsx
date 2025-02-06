import {FOOTER_HEADLINE, FOOTER_INFORMATION} from "../../data/lang.js";
import {motion} from "framer-motion";

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
                <p className="my-4">{FOOTER_INFORMATION.address}</p>
                <p className="my-4">
                    <a href={FOOTER_INFORMATION.email} className="border-b">{FOOTER_INFORMATION.email}</a>
                </p>
                <p className="my-4">{FOOTER_INFORMATION.phoneNo}</p>
                <p className="text-xs text-neutral-600">&copy; Robert Heinemann {currentYear}</p>
            </div>
        </footer>
    )
}