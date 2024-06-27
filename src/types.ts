export interface Activity {
  id: string;
  name: string;
  description: string;
  date: Date;
  finished: boolean;
}

export interface Visit {
  id: string;
  description: string;
  date: Date;
  elderlyName: string;
  responsableName: string;
}

export interface Elderly {
  id: string;
  name: string;
}
