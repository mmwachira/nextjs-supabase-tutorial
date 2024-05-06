"use client";

import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";
import { useState } from "react"; 
import { Input } from '@/components/ui/input';
import "../styles/globals.css";
import { Loader2, Save, Plus } from "lucide-react";
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"  

import { v4 as uuidv4 } from 'uuid';


export default function NewItem()
{
    

    const generateId = () => {
        return uuidv4();
    }

    //const id = generateId();
    const [title, setTitle] = useState("");
    const [priority, setPriority] = useState("");
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    async function createTodo(){
        setLoading(true);
        const { data, error } = await supabase.from("todo").insert({
            //id: id,
            title: title,
            priority: priority === "low" ? 3 : priority === "medium" ? 2 : 1,
            createdat: new Date().toISOString(),
            done: false,
            doneat: null,
        });

        if (error) {
            console.error("Error adding a new item", error);
        } else {
            setTitle("");
        }
        setLoading(false);
        router.refresh();
    }
    
    return(
            <Dialog>
                
                <DialogTrigger asChild>
                    <Button className='bg-foreground text-background ml-3'> <Plus className="mr-2 h-4 w-4" />New</Button>
                </DialogTrigger>
                
                <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                        <DialogTitle>New Item</DialogTitle>
                        <DialogDescription>Add a new item to the Todo list. Click save when you're done</DialogDescription>
                    </DialogHeader>

                    <div className='grid gap-4 py-4'>
                        <div className='grid grid-cols-4 items-center gap-4'>
                            <label htmlFor='title' className='text-right'>
                                Title
                            </label>
                            <Input 
                            type="text" 
                            value={title}
                            onChange={(e) => setTitle(e.target.value)} 
                            placeholder="Get Bread" 
                            className='col-span-3'
                            autoFocus 
                            />
                        </div>

                        <div className="grid grid-cols-4 items-center gap-4">
                            <label htmlFor="priority" className="text-right">
                            Priority
                            </label>
                            <Select onValueChange={(value: any) => setPriority(value)}>
                                <SelectTrigger className="w-[150px] mt-1 ml-1">
                                    <SelectValue placeholder="Low" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectItem value ="high">high</SelectItem>
                                        <SelectItem value ="medium">medium</SelectItem>
                                        <SelectItem value ="low">low</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                            
                            
                        </div>
                    </div>
            
                    <DialogFooter>
                        {title && priority ? (
                                loading ? (
                                    <Button disabled className="ml-2">
                                        <Loader2 className="w-4 h-4 ml-2 m-1 animate-spin" />
                                    </Button>
                                ) : (
                                <Button onClick={createTodo}><Save className="mr-2 h-4 w-4" />Save</Button>
                                )
                            ): (
                                <Button disabled className="ml-2 m-1">
                                    <Save className="mr-2 h-4 w-4" />Save
                                </Button>
                            )}
                        
                    </DialogFooter>
                </DialogContent>  
            </Dialog>
        
    )
}    
    