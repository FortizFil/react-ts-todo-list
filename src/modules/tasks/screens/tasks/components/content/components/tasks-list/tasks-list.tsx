import { Empty, TaskItem } from './components';

export const TasksList = () => {
  const isEmpty = false;

  if (isEmpty) return <Empty />;

  return (
    <div>
      <ul className="space-y-3">
        {Array.from({ length: 5 }, (_, i) => i).map(el => (
          <TaskItem key={el} />
        ))}
      </ul>
    </div>
  );
};
