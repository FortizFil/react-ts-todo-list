import { TodoDetailProvider } from './providers';
import { TodoDetailScreen } from './screens';

const TodoDetail = () => (
  <TodoDetailProvider>
    <TodoDetailScreen />
  </TodoDetailProvider>
);

export default TodoDetail;
