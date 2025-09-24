import { Checkbox, IconButton } from '@common/ui-kit';

export const TaskItem = () => {
  return (
    <li className="flex justify-between items-center bg-white shadow rounded-lg p-4">
      <div className="flex items-center gap-[16px]">
        <Checkbox checked={false} onChange={() => {}} />
        <div>
          <h4 className={`font-semibold `}>Title</h4>
          <p className="text-sm text-gray-500">Description</p>
        </div>
      </div>
      <div className="flex items-center gap-[10px]">
        <IconButton icon="ri-pencil-line" />
        <IconButton icon="ri-delete-bin-6-line" />
      </div>
    </li>
  );
};
