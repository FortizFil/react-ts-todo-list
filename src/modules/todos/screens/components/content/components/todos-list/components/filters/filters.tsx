import { Button } from '@common/ui-kit';
import { FilterEnum } from '@modules/todos/types';
import { useTodos } from '@modules/todos/providers';

const FILTERS = [
  {
    title: 'All',
    value: FilterEnum.ALL,
  },
  {
    title: 'Active',
    value: FilterEnum.ACTIVE,
  },
  {
    title: 'Completed',
    value: FilterEnum.COMPLETED,
  },
];

export const Filters = () => {
  const { filter, setFilter } = useTodos();

  return (
    <div className="flex items-center gap-[5px]">
      {FILTERS.map(el => (
        <Button
          key={el.title}
          label={el.title}
          variant={filter === el.value ? 'primary' : 'tertiary'}
          onClick={() => setFilter(el.value)}
        />
      ))}
    </div>
  );
};
