import { CreateToDoListContext } from '@/Providers/ToDoList';
import React, { useContext } from 'react';
import { ListCount } from '../ListCount';

export const ListTitle = ({
  category,
  categoryMax,
}: {
  category: string;
  categoryMax: number;
}) => {
  const { totalChecked } = useContext(CreateToDoListContext);

  return (
    <div className="flex justify-between item-center p-4">
      <h2 className="font-bold capitalize">{category}</h2>
      {!!categoryMax && <ListCount curr={totalChecked} max={categoryMax} />}
    </div>
  );
};
