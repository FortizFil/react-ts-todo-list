import type { Todo, TodoFormData } from '@common/types';

export interface TodosControllerType {
  todos: Todo[];
  initialData: TodoFormData | null;
  showModal: boolean;
  manageTodo: (data: TodoFormData) => void;
  toggleTodo: (id: number) => void;
  removeTodo: (id: number) => void;
  openModal: (id?: number) => void;
  closeModal: () => void;
}
