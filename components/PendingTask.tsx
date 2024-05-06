"use client";

import "../styles/globals.css";
import { Separator } from '@/components/ui/separator';
import EditItem from "./EditItem";
import DeleteItem from "./DeleteItem";


export default function PendingTask(todo: Todo) {
    return (
        <div className='bg-white p-3 w-full flex items-center'>
            <div>
                <h2 className="text-sm font-medium">{todo.title}</h2>
                    <Separator className="bg-foreground my-3" />
            </div>
            <div className="ml-auto">
                <span className={`px-2 py-1 ${
                    todo.priority === 1
                    ? "bg-red-100 text-red-800"
                    : todo.priority === 2
                    ? "bg-yellow-100 text-yellow-800"
                    : "bg-green-100 text-green-800"
                } text-gray-800 text-xs rounded-x1 m-2 mt-0`}>
                    {todo.priority === 1                        ? "high"
                    : todo.priority === 2
                    ? "medium"
                    : "low"}
                </span>
                <EditItem {...todo} />
                <DeleteItem {...todo} />
            </div>
        </div>            
    )
}