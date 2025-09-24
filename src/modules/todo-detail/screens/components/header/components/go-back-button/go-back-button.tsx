import { useNavigate } from 'react-router';

import { PATH } from '@router';
import { IconButton } from '@common/ui-kit';

export const GoBackButton = () => {
  const navigate = useNavigate();

  return (
    <div>
      <IconButton
        icon="ri-arrow-left-line"
        onClick={() => navigate(PATH.Root())}
      />
    </div>
  );
};
