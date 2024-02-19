import React, { useContext, useState } from 'react';
import { todos } from '../TodoList';
import { CheckIcon } from './CheckIcon';
import { CreateToDoListContext } from '@/Providers/ToDoList';

export const Item = ({ item }: { item: todos }) => {
  const { totalChecked, setTotalChecked } = useContext(CreateToDoListContext);
  const [isChecked, setIsChecked] = useState(false);

  const handleTodoToggle = () => {
    setIsChecked(!isChecked);
    setTotalChecked(isChecked ? totalChecked - 1 : totalChecked + 1);
  };

  return (
    <button
      onClick={handleTodoToggle}
      key={item.id}
      className={`w-full justify-between flex gap-2 items-center p-4 border-b border-gray-200 last-of-type:border-b-0 `}
    >
      <div className="flex gap-3 items-center">
        <CheckIcon isChecked={isChecked} />
        <p
          className={`${
            isChecked ? 'line-through text-gray-400' : 'font-bold'
          }`}
        >
          {item.name}
        </p>
      </div>
      <div>
        <p className="text-gray-400 pl-3 flex items-center justify-end gap-1">
          × <span className="min-w-[20px]">{item.count}</span>
        </p>
      </div>
    </button>
  );
};
