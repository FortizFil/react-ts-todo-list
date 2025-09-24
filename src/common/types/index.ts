export interface Todo {
  id: number;
  title: string;
  text: string;
  completed: boolean;
}

export interface TodoFormData {
  id?: number;
  title: string;
  text: string;
}
