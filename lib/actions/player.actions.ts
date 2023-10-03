"use server"
import { Player } from '../models/player.model'
import { createServerActionClient } from "@supabase/auth-helpers-nextjs";
import { createClient } from '@supabase/supabase-js';
import { cookies } from 'next/headers'

export async function getPlayers(){
    const supabase = createClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
    )
    try {
        const { data, error, status } = await supabase
          .from("players")
          .select('*');

        return {data,error,status};

    } catch (error:any) {
        console.log(error.message);
        throw new Error(error);
    }
}

export async function createPlayer(player:Player,id:string){
    const supabase = createServerActionClient({ cookies });
    
    try {
        const { data, error, status } = await supabase
          .from("players")
          .insert([
            {
              user_id: id,
              name: player.name,
              gender: "Male",
              category: player.category,
              batting_style: player.batting_style,
              batting_level: player.batting_level,
              bowling_style: player.bowling_style,
              bowling_level: player.bowling_level,
            },
          ])
          .select();

        return {data,error,status};

    } catch (error:any) {
        console.log(error.message);
        throw new Error(error);
    }


}