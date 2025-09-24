import { useStorageStateHook } from '@common/hooks';
import type {
  Todo,
  TodoFormData,
  TodosControllerType,
} from '@modules/todos/types/types';
import { useState } from 'react';

export const useTodosController = (): TodosControllerType => {
  const [todos, setTodos] = useStorageStateHook<Todo[]>([], 'todos');
  const [initialData, setInitialData] = useState<TodoFormData | null>(null);
  const [showModal, setShowModal] = useState(false);

  const manageTodo = (data: TodoFormData) => {
    if (initialData) {
      setTodos(
        todos.map(todo =>
          todo.id === initialData.id
            ? { ...todo, title: data.title, text: data.text }
            : todo,
        ),
      );
    } else {
      setTodos([
        {
          id: Date.now(),
          title: data.title,
          text: data.text,
          completed: false,
        },
        ...todos,
      ]);
    }
    setInitialData(null);
    setShowModal(false);
  };

  const toggleTodo = (id: number) => {
    setTodos(
      todos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo,
      ),
    );
  };

  const removeTodo = (id: number) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const openModal = (id?: number) => {
    const currentTodo = todos.find(todo => todo.id === id);
    if (currentTodo) {
      setInitialData({
        title: currentTodo.title,
        text: currentTodo.text,
        id: currentTodo.id,
      });
    }
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setInitialData(null);
  };

  return {
    todos,
    initialData,
    showModal,
    manageTodo,
    toggleTodo,
    removeTodo,
    openModal,
    closeModal,
  };
};
