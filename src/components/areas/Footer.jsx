import {FOOTER_HEADLINE, FOOTER_INFORMATION} from "../../data/lang.js";

export default function Footer() {
    return (
        <footer className="border-b border-neutral-900 pb-4">
            <h2 className="my-10 text-center text-4xl">{FOOTER_HEADLINE}</h2>
            <div className="text-center tracking-tighter">
                <p className="my-4">{FOOTER_INFORMATION.address}</p>
                <p className="my-4">
                    <a href={FOOTER_INFORMATION.email} className="border-b">{FOOTER_INFORMATION.email}</a>
                </p>
                <p className="my-4">{FOOTER_INFORMATION.phoneNo}</p>
            </div>
        </footer>
    )
}