import { lazy } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router';

import { PATH } from './paths';

const TodosPage = lazy(() => import('@modules/todos'));
const TodoDetailPage = lazy(() => import('@modules/todo-detail'));

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TodosPage />} />
        <Route path={PATH.TodoDetail()} element={<TodoDetailPage />} />
      </Routes>
    </BrowserRouter>
  );
};
