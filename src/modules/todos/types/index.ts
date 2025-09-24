import type { Todo, TodoFormData } from '@common/types';

export enum FilterEnum {
  ALL = 'all',
  ACTIVE = 'active',
  COMPLETED = 'completed',
}
export interface TodosControllerType {
  todos: Todo[];
  initialData: TodoFormData | null;
  showModal: boolean;
  filter: FilterEnum;
  saveTodo: (data: TodoFormData) => void;
  toggleTodo: (id: number) => void;
  removeTodo: (id: number) => void;
  openModal: (id?: number) => void;
  closeModal: () => void;
  setFilter: (filter: FilterEnum) => void;
}
