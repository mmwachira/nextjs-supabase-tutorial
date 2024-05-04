
import "../styles/globals.css";

import NewItem from '@/components/NewItem';
import PendingTask from '@/components/PendingTask';


export default async function Todo() {
  
  return (
    <body>
    <PendingTask />
    <NewItem />
    </body>
    
  )
}