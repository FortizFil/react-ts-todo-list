import { useTodosController } from '../controllers';
import { TodosContext } from './todos.context';

export const TodosProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const controller = useTodosController();
  return (
    <TodosContext.Provider value={controller}>{children}</TodosContext.Provider>
  );
};
