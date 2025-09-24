import { TodosProvider } from './providers';
import { TodosScreen } from './screens/todos-screen';

const Todos = () => (
  <TodosProvider>
    <TodosScreen />
  </TodosProvider>
);

export default Todos;
