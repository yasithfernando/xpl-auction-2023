import Image from "next/image";
import Link from "next/link";

function Topbar() {
    return (
        <nav className="topbar">
            <Link href="/" className="flex items-center gap-4">
                <p className="text-heading2-normal text-dark-2 max-xs:hidden font-porter">XPL 2023</p>
            </Link>
            <div className="flex flex-row gap-3 max-md:hidden">

                <Link href="/login" className="flex items-center gap-4">
                    <button className="w-44 text-body-normal font-porter bg-light-1 rounded-lg text-center p-2 border-2 border-dark-2">
                        LOGIN
                    </button>
                </Link>

                <Link href="/register" className="flex items-center gap-4">
                    <button className="w-44 text-body-normal text-light-2 font-porter bg-dark-2 rounded-lg text-center p-2">
                        REGISTER
                    </button>
                </Link>

            </div>
        </nav>
    )
}

export default Topbar;