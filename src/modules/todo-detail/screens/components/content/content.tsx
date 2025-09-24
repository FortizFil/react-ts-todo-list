import { Title, Date, Description } from './components';

export const Content = () => (
  <div className="flex flex-col gap-[15px]">
    <Title />
    <Date />
    <Description />
  </div>
);
