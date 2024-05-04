
import { createClient } from '@/utils/supabase/server';
import { Checkbox } from "@/components/ui/checkbox";
import "../styles/globals.css";
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';


export default async function PendingTask() {
  const supabase = createClient();


  const { data: todo } = await supabase.from("todo").select();

  /*interface ItemsProps {
    items: {
        id: number;
        title: string;
        priority: string;
    }[];
    onComplete: (id: number) => void;
    onDelete: (id: number) => void;
    isIncomplete: boolean;
  }

  const ItemsList: React.FC<ItemsProps> = ({
    isIncomplete,
    items,
    onComplete,
    onDelete,
  }) => {
    const renderItems = () => {
      if (isIncomplete) {
        return (
          <div>
            {items.map((item) => (
              <IncompleteItem
                key={item.id}
                task={item}
                onComplete={onComplete}
                onDelete={onDelete}
              />
            ))}
          </div>
        );
      } else if (isIncomplete == false) {
        return (
          <div>
            {items.map((item) => (
              <CompleteItem
                key={item.id}
                task={item}
                onComplete={onComplete}
                onDelete={onDelete}
              />
            ))}
          </div>
        );
      }
    };


  }

 return renderItems();
};
*/

return (
    <body className='dark:bg-primary flex items-center space-x-2'>
      <div className='my-3 space-x-2'>
        <div className="flex items-center space-x-2">
          <h1 className='scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl'>
            Todo List
          </h1>
        </div>

        <Separator className="my-3 bg-background" />
          <div className='flex items-center space-x-4 text-sm'>
            <Checkbox id = "todos" className='bg-background' />
              <label htmlFor='todos'>
                  Go home
                </label>
                <pre>{JSON.stringify(todo, null, 2)}</pre>
          </div>
          <div>
            <Button className='bg-background text-foreground'>Update</Button>
          </div>
          
      </div>
    </body>
    
  )
}