type Todo = {
    id: string;
    title: string;
    priority: number;
    createdat: string;
    done: boolean;
    doneat: string | null;
  };
  
  type TodoContextType = {
    todo: Todo[];
    setTodo: (todo: React.SetStateAction<Todo[]>) => void;
  };