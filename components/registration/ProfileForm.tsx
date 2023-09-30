"use client"
import { set, useForm} from 'react-hook-form';
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"

import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { useSupabase } from '../auth/supabase-provider';
import { useToast } from '../ui/use-toast';
import { Player } from '@/lib/models/player.model';
import { createPlayer } from '@/lib/actions/player.actions';
import { useState } from 'react';


const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email.",
  }),
  category: z.enum(["BAT", "BOW", "ALL"]),
  battingStyle: z.enum(["RHB", "LHB"]),
  battingLevel: z.array(z.number().min(5).max(100)),
  bowlingStyle: z.enum(["RMF", "LMF", "RSP", "LSP", "NONE"]),
  bowlingLevel: z.array(z.number().min(5).max(100)),
})

export function ProfileForm({name, email, id}: {name: string, email: string, id: string}) {

  const {supabase} = useSupabase();
  const {toast} = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: name,
      email: email,
      category: "BAT",
      battingStyle: "RHB",
      battingLevel: [0],
      bowlingStyle: "RSP",
      bowlingLevel: [0],

    },
  })
 
  async function onSubmit(values: z.infer<typeof formSchema>) {
    const player:Player = {
          base_price : 0,
          batting_level : values.battingLevel[0],
          batting_style : values.battingStyle,
          bowling_level : values.bowlingLevel[0],
          bowling_style : values.bowlingStyle,
          category: values.category,
          created_at: "",
          gender: "Male",
          name : values.username,
          player_id: "",
          team_id: null,
          tier: null,
          user_id: id,
        }
    try {
      setIsSubmitting(true);
      const {data,error,status} = await createPlayer(player, id);
      if (error) {
        setIsSubmitting(false);
        if(error.message.includes("duplicate key value violates unique constraint")){
          toast(
            {
              title: `Error`,
              description: `Player already exists`,
              variant: "destructive",
            }
          )
        }else{
          toast(
            {
              title: `Error`,
              description: `Something went wrong`,
              variant: "destructive",
            }
          )
        }
          
      }
      else if(data){
        setIsSubmitting(false);
        toast(
          {
            title: `Success`,
            description: `Player registered successfully`,
          }
        )
      }
    } catch (error) {
      setIsSubmitting(false);
      toast(
            {
              title: `Error`,
              description: `Something went wrong`,
              variant: "destructive",
            }
          )
      console.log(error);      
    }
  }

  return (
    <Form {...form}>
      
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 lg:space-y-6 w-full p-4">
        <FormField control={form.control} name="username" render={({ field }) => (
            <FormItem className='border-logo-blue'>
              <FormLabel className='border-logo-blue'>Name</FormLabel>
              <FormControl>
                <Input placeholder={`${name}`} {...field} value={`${name || ""}`} />
              </FormControl>
              {/* <FormDescription>
                This is your public display name.
              </FormDescription> */}
              <FormMessage className='text-tiny-medium'/>
            </FormItem>
          )}
        />
        <FormField control={form.control} name="email" render={({ field }) => (
            <FormItem className='border-logo-blue'>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder={`${email}`} {...field} value={`${email || ""}`} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField control={form.control} name="category" render={({ field }) => (
            <FormItem>
              <FormLabel>Category</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select your playing type" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent className='font-radley'>
                  <SelectItem value="BAT">BATSMAN</SelectItem>
                  <SelectItem value="BOW">BOWLER</SelectItem>
                  <SelectItem value="ALL">ALL ROUNDER</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className='flex flex-col lg:flex-row gap-6 lg:gap-2'>
            <FormField control={form.control} name="battingStyle" render={({ field }) => (
                <FormItem className='lg:w-1/2'>
                <FormLabel>Batting Style</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                    <SelectTrigger>
                        <SelectValue placeholder="Select your batting style" />
                    </SelectTrigger>
                    </FormControl>
                    <SelectContent className='font-radley'>
                    <SelectItem value="RHB">{`RIGHT HAND BATSMAN (RHB)`}</SelectItem>
                    <SelectItem value="LHB">{`LEFT HAND BATSMAN (LHB)`}</SelectItem>
                    </SelectContent>
                </Select>
                <FormMessage />
                </FormItem>
            )}
            />
            <FormField control={form.control} name="bowlingStyle" render={({ field }) => (
                <FormItem className='lg:w-1/2'>
                <FormLabel>Bowling Style</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                    <SelectTrigger>
                        <SelectValue placeholder="Select your bowling style" />
                    </SelectTrigger>
                    </FormControl>
                    <SelectContent className='font-radley'>
                    <SelectItem value="RMF">{`RIGHT ARM MEDIUM FAST (RMF)`}</SelectItem>
                    <SelectItem value="LMF">{`LEFT ARM MEDIUM FAST (LMF)`}</SelectItem>
                    <SelectItem value="RSP">{`RIGHT ARM SPIN (RSP)`}</SelectItem>
                    <SelectItem value="LSP">{`LEFT ARM SPIN (LSP)`}</SelectItem>
                    <SelectItem value="NONE">{`NONE`}</SelectItem>

                    </SelectContent>
                </Select>
                <FormMessage />
                </FormItem>
            )}
            />
        </div>

        <div className='flex flex-col lg:flex-row gap-6 lg:gap-2'>
            <FormField control={form.control} name="battingLevel" render={({ field }) => (
                <FormItem className='lg:w-1/2'>
                <FormLabel>Batting Level {`[ ${field.value} ]`}</FormLabel>
                <FormControl>
                    <Slider defaultValue={field.value} max={100} step={1} onValueChange={field.onChange}/>
                    {/* <Slider {...field} max={100} step={1} /> */}
                </FormControl>
                <FormMessage />
                </FormItem>
              )}
            />

            <FormField control={form.control} name="bowlingLevel" render={({ field }) => (
                <FormItem className='lg:w-1/2'>
                <FormLabel>Bowling Level {`[ ${field.value} ]`}</FormLabel>
                <FormControl>
                    <Slider defaultValue={field.value} max={100} step={1} onValueChange={field.onChange}/>
                    {/* <Slider {...field} max={100} step={1} /> */}
                </FormControl>
                <FormMessage />
                </FormItem>
              )}
            />

        </div>

        <Button disabled={isSubmitting} className={`bg-logo-blue ${isSubmitting && 'bg-slate-700 '}`} type="submit">
          <svg className={`animate-spin w-6 h-6 mr-2 ${!isSubmitting && 'hidden'}`} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path fill="#ffffff" d="M12,4a8,8,0,0,1,7.89,6.7A1.53,1.53,0,0,0,21.38,12h0a1.5,1.5,0,0,0,1.48-1.75,11,11,0,0,0-21.72,0A1.5,1.5,0,0,0,2.62,12h0a1.53,1.53,0,0,0,1.49-1.3A8,8,0,0,1,12,4Z"/>
                </svg>
                {isSubmitting ? 'REGISTERING...' : 'REGISTER'}
        </Button>
      </form>
    </Form>
  )
}
