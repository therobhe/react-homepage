import {ABOUTME_TEXT, ABOUTME_NAME} from "../../data/data.js";
import kevinRushProfile from "../../assets/kevinRushProfile.jpg";

export default function AboutMe() {
    return (
        <section className="border-b border-neutral-900 pb-4 lg:mb-35">
            <div className="flex flex-wrap">
                <div className="w-full lg:w-1/2">
                    <div className="flex flex-col items-center lg:items-start">
                        <h1 className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg_text-8xl">{ABOUTME_NAME}</h1>
                        <span className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent">Frontend Web Developer</span>
                        <p className="my-2 max-w-xl py-6 font-light tracking-tighter">{ABOUTME_TEXT}</p>
                    </div>
                </div>
                <div className="w-full lg:w-1/2">
                    <img src={kevinRushProfile} alt="Robert Heinemann Portrait Image"/>
                </div>
            </div>
        </section>
    )
}