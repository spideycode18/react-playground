export interface TodoProps {
  todo: string;
  status: string;
}

export enum Filter {
  ALL = 'all',
  ONGOING = 'ongoing',
  DONE = 'done'
}
