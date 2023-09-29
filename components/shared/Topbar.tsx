import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import Image from "next/image";
import Link from "next/link";
import RegisterButton from './RegisterButton';

async function Topbar() {
    const supabase = createServerComponentClient({cookies})

    const {data: {user},} = await supabase.auth.getUser();

    return (
        <nav className="topbar">
            <Link href="/" className="flex items-center gap-4">
                <div className="relative w-32 lg:w-40 h-10 lg:h-12">
                    <Image src="/assets/logos/xpl-logo.svg" objectFit="cover" fill={true} alt="XPL 2023" />
                </div>
                {/* <p className="text-heading3-normal lg:text-heading2-normal text-dark-2 font-porter">XPL 2023</p> */}
            </Link>
            <div className="flex flex-row gap-3 mr-4">

                {user ? (
                    <form action="/auth/sign-out" method="post">
                        <button className="w-44 text-body-normal font-aspire bg-light-1 rounded-lg text-center p-2 border-2 border-logo-blue text-logo-blue">
                            LOGOUT
                        </button>
                    </form>
                ) : (
                    <div className='flex flex-row gap-3'>
                        <RegisterButton />
                    </div>
                )}    

            </div>
        </nav>
    )
}



export default Topbar;