import { useState } from 'react';

import { useStorageStateHook } from '@common/hooks';
import type { Todo, TodoFormData } from '@common/types';
import { type TodosControllerType, FilterEnum } from '@modules/todos/types';

export const useTodosController = (): TodosControllerType => {
  const [todos, setTodos] = useStorageStateHook<Todo[]>([], 'todos');
  const [initialData, setInitialData] = useState<TodoFormData | null>(null);
  const [filter, setFilter] = useState<FilterEnum>(FilterEnum.ALL);
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

  const filteredTodos = todos.filter(todo => {
    if (filter === FilterEnum.ACTIVE) return !todo.completed;
    if (filter === FilterEnum.COMPLETED) return todo.completed;
    return true;
  });

  return {
    todos: filteredTodos,
    initialData,
    showModal,
    filter,
    manageTodo,
    toggleTodo,
    removeTodo,
    openModal,
    closeModal,
    setFilter,
  };
};
