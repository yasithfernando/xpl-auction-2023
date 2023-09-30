"use server"
import { Player } from '../models/player.model'
import { createServerComponentClient, createServerActionClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from 'next/headers'
import { Database } from '../types/supabase';
import { toast } from '@/components/ui/use-toast';

const supabase = createServerActionClient({ cookies });

export async function getPlayers(){
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