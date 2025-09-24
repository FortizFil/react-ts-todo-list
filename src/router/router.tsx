import { lazy } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router';

import { PATH } from './paths';

const TasksPage = lazy(() => import('@modules/tasks/screens/tasks'));
const TaskDetailPage = lazy(() => import('@modules/tasks/screens/task-detail'));

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TasksPage />} />
        <Route path={PATH.TaskDetail()} element={<TaskDetailPage />} />
      </Routes>
    </BrowserRouter>
  );
};
