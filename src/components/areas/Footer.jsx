import {useTranslation} from "react-i18next";
import {motion} from "framer-motion";
import {FaGithub, FaLinkedinIn} from "react-icons/fa";

export default function Footer() {
    const currentYear = new Date().getFullYear();
    const {t} = useTranslation();
    
    return (
        <footer className="border-b border-neutral-900 pb-4">
            <motion.h2 className="my-20 text-center text-4xl"
                       whileInView={{opacity: 1, y: 0}}
                       initial={{opacity: 0, y: -100}}
                       transition={{duration: 0.5}}>
                {t("footer.headline")}
            </motion.h2>
            <div className="text-center tracking-tighter">
                <div className="icons m-8 flex items-center justify-center gap-4 text-2xl">
                    <a href="https://www.linkedin.com/authwall?trk=gf&trkInfo=AQE_kpt3Ti-s2wAAAW2I5dognmDD8csdgmJ69IMix-7FT0TYhUXReOm9sK8E6U8x5WHAVloC3TNU4wQpxH6zathz19VjLsyn9u7YGG_7_y-2hYcdDDthfOfa4J2xfGllKPxrqkw=&originalReferer=https://www.google.com/&sessionRedirect=https%3A%2F%2Fde.linkedin.com%2Fin%2Frobert-heinemann-0501a5193" target="_blank" rel="noreferrer">
                        <FaLinkedinIn />
                    </a>
                    <a href="https://github.com/therobhe" target="_blank" rel="noreferrer">
                        <FaGithub />
                    </a>
                </div>
                <p className="my-4">{t("footer.information.address")}</p>
                <p className="my-4">
                    <a href={t("footer.information.email")} className="border-b">{t("footer.information.email")}</a>
                </p>
                <p className="text-xs text-neutral-600">&copy; Robert Heinemann {currentYear}</p>
            </div>
        </footer>
    )
}