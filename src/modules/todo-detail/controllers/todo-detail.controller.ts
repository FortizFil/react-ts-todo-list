import { useState, useEffect } from 'react';
import { useParams } from 'react-router';

import { useStorageStateHook } from '@common/hooks';
import type { Todo, TodoFormData } from '@common/types';
import type { TodoDetailControllerType } from '../types';

export const useTodoDetailController = (): TodoDetailControllerType => {
  const { id } = useParams();
  const [todos, setTodos] = useStorageStateHook<Todo[]>([], 'todos');
  const [todo, setTodo] = useState<Todo | null>(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (!id) {
      return;
    }

    const currentTodo = todos.find(todo => todo.id.toString() === id);

    if (currentTodo) {
      setTodo(currentTodo);
    }
  }, [id, todos]);

  const editTodo = (data: TodoFormData) => {
    if (!todo) return;

    setTodos(
      todos.map(el =>
        el.id === todo.id ? { ...el, title: data.title, text: data.text } : el,
      ),
    );

    setShowModal(false);
  };

  const toggleTodo = () => {
    if (!todo) return;

    setTodos(
      todos.map(el =>
        el.id === todo.id ? { ...el, completed: !el.completed } : el,
      ),
    );
  };

  const removeTodo = () => {
    if (!todo) return;

    setTodos(todos.filter(el => el.id !== todo.id));
  };

  const openModal = () => setShowModal(true);

  const closeModal = () => setShowModal(false);

  return {
    todo,
    showModal,
    editTodo,
    toggleTodo,
    removeTodo,
    openModal,
    closeModal,
  };
};
