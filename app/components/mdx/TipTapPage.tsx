import React from 'react'
import { Form,FormControl,FormField,FormItem,FormLabel,FormMessage } from '@/components/ui/form'
import { useForm } from 'react-hook-form'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import Markdown from './Markdown'


function TipTapPage() {

    const formSchema = z.object({
        issue:z
        .string()
        .min(5,{message:"yoo cuz the title isn't log enough"})
        .max(100,{message:"it's too long"}),

        status:z
        .string()
        .min(5,{message:"yoo bro the price is Aaah"})
        .max(100,{message:"yoo it's too long"}),
        
        date:z
        .string()
        .min(5,{message:"yoo description is too shii short"})
        .max(100,{message:"it's too long"})
        .trim(),

        Description:z
        .string()
        .min(5,{message:"yoo description is too shii short"})
        .max(100,{message:"it's too long"})
        .trim()
    })

    const form = useForm<z.infer<typeof formSchema>>({
        resolver:zodResolver(formSchema),
        mode:"onChange",
        defaultValues:{
            issue:"Provide issue name",
            status:"Provide Status",
            date:"date created",
            Description:"issue description needed"
    },
    })

    function onSubmit(values:z.infer<typeof formSchema>){
        // this will be dealt later
    }

  return (
    <div className='tiptap p-24 justify-center'>
        <h4 className='capitalize font-bold text-2xl mb-7 text-gray-900'>deal with creating issue here..</h4>
        <Form {...form}>
            <form action="" onSubmit={form.handleSubmit(onSubmit)}>

                <FormField
                control={form.control}
                name='status'
                render={({field})=>(
                    <FormItem>
                        <FormLabel>Issue Name:</FormLabel>
                        <FormControl>
                            <Input placeholder="this is issue name" className='w-96'/>
                        </FormControl>
                        <FormMessage/>
                    </FormItem>
                )}
                />

                <FormField
                control={form.control}
                name='status'
                render={({field})=>(
                    <FormItem>
                        <FormLabel>Issue Status:</FormLabel>
                        <FormControl>
                            <Input placeholder="this is issue status" className='w-96 mb-10'/>
                        </FormControl>
                        <FormMessage/>
                    </FormItem>
                )}
                />

                <FormField
                control={form.control}
                name='date'
                render={({field})=>(
                    <FormItem>
                        <FormLabel>Issue Date:</FormLabel>
                        <FormControl>
                            <Input placeholder="this is issue date" className='w-96'/>
                        </FormControl>
                        <FormMessage/>
                    </FormItem>
                )}
                />

                <FormField
                control={form.control}
                name='Description'
                render={({field})=>(
                    <FormItem>
                        <FormLabel>Description:</FormLabel>
                        <FormControl>
                            <Markdown description={field.name} onChange={field.onChange}/>
                        </FormControl>
                        <FormMessage/>
                    </FormItem>
                )}
                />
                <Button className="">Submit</Button>
            </form>
        </Form>
    </div>
  )
}

export default TipTapPage