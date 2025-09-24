import { Title, CreateTaskButton } from './components';

export const Header = () => (
  <div className="flex justify-between items-center">
    <Title />
    <CreateTaskButton />
  </div>
);
