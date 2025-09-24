export interface Todo {
  id: number;
  title: string;
  text: string;
  completed: boolean;
}

export interface TodoFormData {
  id?: number;
  title: string;
  text: string;
}

export interface TodosControllerType {
  todos: Todo[];
  initialData: TodoFormData | null;
  showModal: boolean;
  manageTodo: (data: TodoFormData) => void;
  toggleTodo: (id: number) => void;
  removeTodo: (id: number) => void;
  openModal: () => void;
  closeModal: () => void;
}
