import { supabase } from "@/lib/supabase";
import "../styles/globals.css";

import NewItem from '@/components/NewItem';
import PendingTask from '@/components/PendingTask';
import Navbar from "@/components/Navbar";

export const revalidate = 0;
export default async function Todo() {
  const { data: todo, error } = await supabase
  .from("todo")
  .select("*")
  .order("priority", {ascending: true});
  if (error) console.error("Error fetching todo list", error); 
  

  return (
    <div>
    <Navbar />
    <div className="flex flex-col items-center justify-center mt-12 space-x-3">
      <h1 className='text-2xl font-semibold'>Pending Items</h1>
    </div>
    {todo &&
    todo.map((todo: Todo) => <PendingTask key={todo.id} {...todo} />)}
    <NewItem />
    </div>
    
  )
}