"use client"
import { useForm} from 'react-hook-form';
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
import Link from 'next/link';


const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email.",
  }),
  category: z.enum(["Batsman", "Bowler", "All Rounder"]),
  battingStyle: z.enum(["RHB", "LHB"]),
  battingLevel: z.array(z.number().min(0).max(100)),
  bowlingStyle: z.enum(["RMF", "LMF", "RSP", "LSP", "NONE"]),
  bowlingLevel: z.array(z.number().min(0).max(100)),
})

export function ProfileForm() {
    // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      email: "",
      category: "Batsman",
      battingStyle: "RHB",
      battingLevel: [0],
      bowlingStyle: "RSP",
      bowlingLevel: [0],

    },
  })
 
  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
  }
  // ...

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 w-4/5 lg:w-1/2">
        <FormField control={form.control} name="username" render={({ field }) => (
            <FormItem className='border-logo-blue'>
              <FormLabel className='border-logo-blue'>Username</FormLabel>
              <FormControl>
                <Input placeholder="name" {...field} />
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
                <Input placeholder="example@99x.io" {...field} />
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
                  <SelectItem value="Batsman">BATSMAN</SelectItem>
                  <SelectItem value="Bowler">BOWLER</SelectItem>
                  <SelectItem value="All Rounder">ALL ROUNDER</SelectItem>
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

        <Button className='bg-logo-blue' type="submit">Submit</Button>
      </form>
    </Form>
  )
}
