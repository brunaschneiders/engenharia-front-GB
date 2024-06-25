export interface Activity {
  id: string;
  name: string;
  description: string;
  date: Date;
  finished: boolean;
}

export interface Visit {
  id: string;
  visitantName: string;
  description: string;
  date: Date;
}

export interface Elderly {
  id: string;
  name: string;
}
