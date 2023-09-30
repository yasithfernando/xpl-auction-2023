"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";

import type { SupabaseClient } from "@supabase/auth-helpers-nextjs";
import { Database } from "@/lib/database.types";
import { useToast } from "../ui/use-toast";

type SupabaseContext = {
	supabase: SupabaseClient;
};

const Context = createContext<SupabaseContext | undefined>(undefined);

export default function SupabaseProvider({
	children,
}: {
	children: React.ReactNode;
}) {
	const [supabase] = useState(() => createClientComponentClient<Database>());
	const router = useRouter();

    const {toast} = useToast();

	useEffect(() => {
		const {
			data: { subscription },
		} = supabase.auth.onAuthStateChange((event,session) => {
                if(event === "SIGNED_IN"){
                    toast({
                        title: `Welcome`,
                        description: `Hi ${session?.user.user_metadata?.name}, Welcome to XPL 2023`,
                    })
                }
                else if(event === "SIGNED_OUT"){
                    toast({
                        title: `Goodbye`,
                        description: `See you soon`,
                    });
                }
            
			//router.refresh();
		});

		return () => {
			//subscription.unsubscribe();
		};
	}, [router, supabase]);

	return (
		<Context.Provider value={{ supabase }}>
			<>{children}</>
		</Context.Provider>
	);
}

export const useSupabase = () => {
	const context = useContext(Context);

	if (context === undefined) {
		throw new Error("useSupabase must be used inside SupabaseProvider");
	}

	return context;
};