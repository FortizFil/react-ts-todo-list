export const PATH = {
  Root: () => '/',
  TaskDetail: (id: string | number = ':id') => `/task/${id}`,
};
