import Image from "next/image";
import Link from "next/link";

function Topbar() {
    return (
        <nav className="topbar">
            <Link href="/" className="flex items-center gap-4">
                <div className="relative w-32 lg:w-40 h-10 lg:h-12">
                    <Image src="/assets/logos/xpl-logo.svg" objectFit="cover" fill={true} alt="XPL 2023" />
                </div>
                {/* <p className="text-heading3-normal lg:text-heading2-normal text-dark-2 font-porter">XPL 2023</p> */}
            </Link>
            <div className="flex flex-row gap-3 mr-4">

                <Link href="/login" className="flex items-center gap-4 max-md:hidden">
                    <button className="w-44 text-body-normal font-aspire bg-light-1 rounded-lg text-center p-2 border-2 border-logo-blue text-logo-blue">
                        LOGIN
                    </button>
                </Link>

                <Link href="/register" className="flex items-center gap-4">
                    <button className="w-30 lg:w-44 text-subtle-medium lg:text-body-normal text-light-2 font-aspire border-logo-blue bg-logo-blue rounded-lg text-center p-2">
                        REGISTER
                    </button>
                </Link>

            </div>
        </nav>
    )
}

export default Topbar;