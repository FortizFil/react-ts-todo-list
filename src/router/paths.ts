export const PATH = {
  Root: () => '/',
  TodoDetail: (id: string | number = ':id') => `/task/${id}`,
};
