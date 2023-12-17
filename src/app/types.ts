interface TrackedObject {
  id: string; // UUID
  createdAt: Date;
  updatedAt: Date;
}

export interface Barber extends TrackedObject {
  name: string;
  email: string;
}

export interface Queue extends TrackedObject {
  barberId: string;
  count: number;
}

export interface Params<T> {
  params: T;
}

export type NewBarber = Omit<Barber, "id" | "createdAt" | "updatedAt">;
