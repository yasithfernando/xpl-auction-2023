import { Database } from "../types/supabase";

export type Player = Database["public"]["Tables"]["players"]["Row"];

export type Profile = Database["public"]["Tables"]["profiles"]["Row"];

export type Team = Database["public"]["Tables"]["teams"]["Row"];

export type Admin = Database["public"]["Tables"]["admins"]["Row"];