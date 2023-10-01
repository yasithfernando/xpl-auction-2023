export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      admins: {
        Row: {
          created_at: string
          id: string
          team_id: string | null
          user_id: string | null
        }
        Insert: {
          created_at?: string
          id?: string
          team_id?: string | null
          user_id?: string | null
        }
        Update: {
          created_at?: string
          id?: string
          team_id?: string | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "admins_team_id_fkey"
            columns: ["team_id"]
            referencedRelation: "teams"
            referencedColumns: ["team_id"]
          },
          {
            foreignKeyName: "admins_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          }
        ]
      }
      players: {
        Row: {
          base_price: number | null
          batting_level: number | null
          batting_style: string | null
          bowling_level: number | null
          bowling_style: string | null
          category: string | null
          created_at: string
          gender: string | null
          name: string | null
          player_id: string
          team_id: number | null
          tier: number | null
          user_id: string | null
        }
        Insert: {
          base_price?: number | null
          batting_level?: number | null
          batting_style?: string | null
          bowling_level?: number | null
          bowling_style?: string | null
          category?: string | null
          created_at?: string
          gender?: string | null
          name?: string | null
          player_id?: string
          team_id?: number | null
          tier?: number | null
          user_id?: string | null
        }
        Update: {
          base_price?: number | null
          batting_level?: number | null
          batting_style?: string | null
          bowling_level?: number | null
          bowling_style?: string | null
          category?: string | null
          created_at?: string
          gender?: string | null
          name?: string | null
          player_id?: string
          team_id?: number | null
          tier?: number | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "players_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          }
        ]
      }
      players_teams: {
        Row: {
          created_at: string
          id: string
          player_id: string | null
          team_id: string | null
        }
        Insert: {
          created_at?: string
          id?: string
          player_id?: string | null
          team_id?: string | null
        }
        Update: {
          created_at?: string
          id?: string
          player_id?: string | null
          team_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "players_teams_player_id_fkey"
            columns: ["player_id"]
            referencedRelation: "players"
            referencedColumns: ["player_id"]
          },
          {
            foreignKeyName: "players_teams_team_id_fkey"
            columns: ["team_id"]
            referencedRelation: "teams"
            referencedColumns: ["team_id"]
          }
        ]
      }
      profiles: {
        Row: {
          avatar_url: string | null
          full_name: string | null
          id: string
          role: string | null
          updated_at: string | null
          username: string | null
        }
        Insert: {
          avatar_url?: string | null
          full_name?: string | null
          id: string
          role?: string | null
          updated_at?: string | null
          username?: string | null
        }
        Update: {
          avatar_url?: string | null
          full_name?: string | null
          id?: string
          role?: string | null
          updated_at?: string | null
          username?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "profiles_id_fkey"
            columns: ["id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      teams: {
        Row: {
          created_at: string
          logo: string | null
          name: string | null
          team_id: string
          wallet: number | null
        }
        Insert: {
          created_at?: string
          logo?: string | null
          name?: string | null
          team_id?: string
          wallet?: number | null
        }
        Update: {
          created_at?: string
          logo?: string | null
          name?: string | null
          team_id?: string
          wallet?: number | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
