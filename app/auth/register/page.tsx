"use client"
import { ProfileForm } from "@/components/registration/ProfileForm";
import { Database } from "@/lib/database.types";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useEffect, useState } from "react";

export default function page() {

    const [player, setPlayer] = useState({
        name:"",
        email:"",
    });
    const [isLoading, setIsLoading] = useState(true); // Loading state

    const supabase = createClientComponentClient<Database>()

    async function getUser() {
        try {
        const { data: { user }, } = await supabase.auth.getUser();
        setPlayer({
            name: user?.user_metadata?.name,
            email: user?.email as string,
        });
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
        <div className="flex justify-center border bg-light-2 font-radley mt-2 p-4">
            <ProfileForm name={player.name} email={player.email} />
        </div>
    )
}
