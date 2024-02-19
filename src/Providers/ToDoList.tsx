import { createContext, useState } from 'react';

export type CreateToDoListContextProps = {
  totalChecked: number;
  setTotalChecked: (value: number) => void;
};

export const CreateToDoListContext = createContext<CreateToDoListContextProps>({
  totalChecked: 0,
  setTotalChecked: () => {},
});

export const ToDoListProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [totalChecked, setTotalChecked] = useState(0);

  const createToDoListContext = {
    totalChecked,
    setTotalChecked,
  };

  return (
    <CreateToDoListContext.Provider value={createToDoListContext}>
      {children}
    </CreateToDoListContext.Provider>
  );
};
