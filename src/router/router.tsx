import { lazy } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router';

import { Container } from '@common/layout';
import { PATH } from './paths';

const TodosPage = lazy(() => import('@modules/todos'));
const TodoDetailPage = lazy(() => import('@modules/todo-detail'));

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Container />}
          children={[
            <Route index element={<TodosPage />} />,
            <Route path={PATH.TodoDetail()} element={<TodoDetailPage />} />,
          ]}
        />
      </Routes>
    </BrowserRouter>
  );
};
