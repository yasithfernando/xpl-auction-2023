"use client"
import Image from "next/image";
import Link from "next/link";
import RegisterButton from './RegisterButton';
import { useSupabase } from "../auth/supabase-provider";
import { useEffect, useState } from "react";
import { User } from "@supabase/supabase-js";

function Topbar() {
    const [user, setUser] = useState<User>();
    const {supabase} = useSupabase();

    async function isUserLoggedIn() {
        const { data: {user}, } = await supabase.auth.getUser();
        return user;
    }

    useEffect(() => {
        async function fetchUser() {
            const userData = await isUserLoggedIn();
            if (userData) {
                setUser(userData);
            }
        }
        fetchUser();
    }, []);

    return (
        <nav className="topbar">
            <Link href="/" className="flex items-center gap-4">
                <div className="relative w-32 lg:w-40 h-10 lg:h-12">
                    <Image src="/assets/logos/xpl-logo.svg" objectFit="cover" fill={true} alt="XPL 2023" />
                </div>
            </Link>
            <div className="flex flex-row gap-3 mr-4">
                {user ? (
                    <form action="/auth/sign-out" method="post">
                        <button className="w-32 text-body-normal font-radley bg-light-1 rounded-lg text-center p-1 border-2 border-logo-blue text-logo-blue">
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
    );
}

export default Topbar;
