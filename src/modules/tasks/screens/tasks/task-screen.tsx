import { Header, Content } from './components';

const TaskScreen = () => (
  <div className="p-6 max-w-3xl mx-auto h-screen flex flex-col gap-[20px]">
    <Header />
    <Content />
  </div>
);

export default TaskScreen;
