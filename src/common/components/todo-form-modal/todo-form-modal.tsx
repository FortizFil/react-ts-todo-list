import { Controller, useForm } from 'react-hook-form';

import { Modal, Input, Button, Textarea } from '@common/ui-kit';
import type { TodoFormData } from '@modules/todos/types/types';

interface TodoFormModalProps {
  defaultValues?: TodoFormData;
  onSubmit: (data: TodoFormData) => void;
  onClose: () => void;
}

export const TodoFormModal = ({
  defaultValues,
  onSubmit,
  onClose,
}: TodoFormModalProps) => {
  const { control, handleSubmit } = useForm<TodoFormData>({ defaultValues });

  return (
    <Modal onClose={onClose}>
      <h2 className="text-xl font-bold mb-4">
        {defaultValues ? 'Edit todo' : 'Create todo'}
      </h2>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-[10px]"
      >
        <Controller
          name="title"
          control={control}
          rules={{ required: 'Please, fill out this field' }}
          render={({ field, formState: { errors } }) => (
            <Input
              id={field.name}
              placeholder="Todo name"
              errorMessage={errors.title?.message}
              {...field}
            />
          )}
        />

        <Controller
          name="text"
          control={control}
          rules={{ required: 'Please, fill out this field' }}
          render={({ field, formState: { errors } }) => (
            <Textarea
              id={field.name}
              placeholder="Todo description"
              errorMessage={errors.text?.message}
              {...field}
            />
          )}
        />
        <div className="ml-auto flex items-center gap-[10px]">
          <Button
            label="Cancel"
            variant="secondary"
            type="button"
            onClick={onClose}
          />
          <Button label={defaultValues ? 'Submit' : 'Create'} />
        </div>
      </form>
    </Modal>
  );
};
