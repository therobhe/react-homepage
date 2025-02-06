import {RiReactjsLine, RiNodejsLine, RiPhpLine, RiTailwindCssLine, RiBootstrapFill} from "react-icons/ri";
import {SiMysql} from "react-icons/si";

export default function Techstack() {
    return (
        <div className="">
            <h2 className="my-20 text-center text-4xl">Technologies</h2>
            <div className="flex flex-wrap items-center justify-center gap-4">
                <div className="rounded-2xl border-4 border-neutral-800 p-4">
                    <RiReactjsLine className="text-7xl text-cyan-400" />
                </div>
                <div className="rounded-2xl border-4 border-neutral-800 p-4">
                    <RiNodejsLine className="text-7xl text-green-500" />
                </div>
                <div className="rounded-2xl border-4 border-neutral-800 p-4">
                    <RiTailwindCssLine className="text-7xl text-cyan-600" />
                </div>
                <div className="rounded-2xl border-4 border-neutral-800 p-4">
                    <RiBootstrapFill className="text-7xl text-purple-600" />
                </div>
                <div className="rounded-2xl border-4 border-neutral-800 p-4">
                    <RiPhpLine className="text-7xl text-purple-700" />
                </div>
                <div className="rounded-2xl border-4 border-neutral-800 p-4">
                    <SiMysql className="text-7xl text-cyan-400" />
                </div>
            </div>
        </div>
    )
}