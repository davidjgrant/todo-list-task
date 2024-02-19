import React from 'react';
import { List } from '../List';

export type todos = {
  id: number;
  name: string;
  count: number;
  category: string;
};

export type TodoListType = todos[];

export const TodoList = ({ todos }: { todos: todos[] }) => {
  const todoLists = todos.reduce((acc, cur) => {
    if (!acc[cur.category]) {
      acc[cur.category] = [];
    }
    acc[cur.category].push(cur);
    return acc;
  }, {} as { [key: string]: todos[] });

  return (
    <article className="w-full max-w-[672px] mb-14 flex flex-col lg:flex-wrap gap-6 lg:max-h-[700px]">
      {Object.entries(todoLists).map(([key, value]) => {
        return <List key={key} todos={value} category={key} />;
      })}
    </article>
  );
};
