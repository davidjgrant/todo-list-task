import React from 'react';
import { todos } from '../TodoList';
import { Item } from '../Item';
import { ListTitle } from './ListTitle';
import { ToDoListProvider } from '@/Providers/ToDoList';

export const List = ({
  todos,
  category,
}: {
  todos: todos[];
  category: string;
}) => {
  const items = todos.length ? (
    todos.map((item) => {
      return <Item key={item.id} item={item} />;
    })
  ) : (
    <p className="p-4 text-center text-gray-400">No items found</p>
  );

  return (
    <ToDoListProvider>
      <section className="mb-6 lg:mb-0 w-full h-fit lg:max-w-[324px]">
        <ListTitle category={category} categoryMax={todos.length} />
        <div className="shadow-md rounded-2xl w-full bg-white">{items}</div>
      </section>
    </ToDoListProvider>
  );
};
