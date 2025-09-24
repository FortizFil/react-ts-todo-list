import { createContext, useContext } from 'react';

import type { TodoDetailControllerType } from '../types';

export const TodoDetailContext = createContext<TodoDetailControllerType | null>(
  null,
);

export const useTodoDetail = (): TodoDetailControllerType => {
  const context = useContext(TodoDetailContext);
  if (!context) {
    throw new Error('useTodo must be used within a TodoProvider');
  }
  return context;
};
