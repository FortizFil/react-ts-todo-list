import { Title, CreateTodoButton } from './components';

export const Header = () => (
  <div className="flex justify-between items-center">
    <Title />
    <CreateTodoButton />
  </div>
);
