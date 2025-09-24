import { useTodoDetailController } from '../controllers';
import { TodoDetailContext } from './todo-detail.context';

export const TodoDetailProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const controller = useTodoDetailController();
  return (
    <TodoDetailContext.Provider value={controller}>
      {children}
    </TodoDetailContext.Provider>
  );
};
