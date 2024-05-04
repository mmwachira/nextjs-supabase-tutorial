import { createClient } from '@/utils/supabase/server';

export const insertTodo = async (todoData: any) => {
    const supabase = createClient();
    try {
        // Insert data
        const {data, error} = await supabase
        .from('todo')
        .insert(todoData);

        if (error) {
            throw error;
        }

        return data;
    }
    catch (error) {
        //console.error('Error inserting todo: ', error.message);
        throw error;
    }
};
