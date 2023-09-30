"use client"
import { useSupabase } from "@/components/auth/supabase-provider";
import { ProfileForm } from "@/components/registration/ProfileForm";
import { Database } from "@/lib/database.types";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useEffect, useState } from "react";

export default function page() {

    const [player, setPlayer] = useState({
        name:"",
        email:"",
        id:"",
    });
    const [isLoading, setIsLoading] = useState(true); // Loading state

    //const supabase = createClientComponentClient<Database>()
    const {supabase} = useSupabase();

    async function getUser() {
        try {
        const { data: { user }, } = await supabase.auth.getUser();
        setPlayer({
            name: user?.user_metadata?.name,
            email: user?.email as string,
            id: user?.id as string,
        });
        console.log(user);
        } catch (error) {
        console.error('Error fetching user data:', error);
        } finally {
        setIsLoading(false); // Set loading to false regardless of success or failure
        }
    }


    useEffect(() => {
        getUser()

        return () => {
        // cleanup
        console.log("Cleanup");
        }

    }, [])

    if (isLoading) {
        return <div>Loading...</div>;
    }
    
    return (
        <div className="flex justify-center pb-5">
            <div className="flex flex-col justify-center border lg:bg-light-2 lg:w-1/2 font-radley mt-2 pb-4 rounded-lg overflow-hidden">
                <div className=" bg-logo-blue px-4 pb-2">
                    <p className="text-heading4-normal lg:text-heading2-normal text-light-2">XPL 2023 PLAYER REGISTRATION</p>
                    <p className="text-tiny-medium text-light-2">Please fill in the following details to complete your registration.</p>
                </div>
                <ProfileForm name={player.name} email={player.email} id={player.id} />
            </div>
        </div>
        
    )
}
