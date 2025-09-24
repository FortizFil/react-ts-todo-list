import {
  GoBackButton,
  EditTodoButton,
  DeleteTodoButton,
  ToggleTodo,
} from './components';

export const Header = () => (
  <div className="flex items-center justify-between">
    <GoBackButton />
    <div className="flex items-center gap-[10px]">
      <ToggleTodo />
      <EditTodoButton />
      <DeleteTodoButton />
    </div>
  </div>
);
