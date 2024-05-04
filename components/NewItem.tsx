import { createClient } from '@/utils/supabase/server';
import "../styles/globals.css";
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
import { insertTodo } from '@/app/todo/page';
  
        
export default function NewItem()
{
    return(
            <Dialog>
        <DialogTrigger asChild>
            <Button variant="outline" className='bg-background text-foreground'>New</Button>
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
                        <input id='title'  defaultValue="Get Bread" className='col-span-3' />
                    </div>

                    <div className="grid grid-cols-4 items-center gap-4">
                        <label htmlFor="priority" className="text-right">
                        Priority
                        </label>
                        <input
                        id="priority"
                        
                        defaultValue="1(lowest) - 5(highest)"
                        className="col-span-3"
                        />
                    </div>
                </div>
            
                <DialogFooter>
                    <Button type='submit'>Save changes</Button>
                </DialogFooter>
            </DialogContent>  
        </Dialog>
        
    )
}    
    