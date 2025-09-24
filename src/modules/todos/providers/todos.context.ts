import { createContext, useContext } from 'react';

import type { TodosControllerType } from '@modules/todos/types';

export const TodosContext = createContext<TodosControllerType | null>(null);

export const useTodos = (): TodosControllerType => {
  const context = useContext(TodosContext);
  if (!context) {
    throw new Error('useTodo must be used within a TodoProvider');
  }
  return context;
};
