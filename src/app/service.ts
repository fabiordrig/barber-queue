import { Barber, NewBarber, Queue } from "./types";

export const createBarber = async (barber: NewBarber): Promise<Barber> => {
  const response = await fetch("/api/barber", {
    method: "POST",
    body: JSON.stringify(barber),
  });

  return response.json();
};

export const getQueue = async (barberId: string): Promise<Queue> => {
  const response = await fetch(`/api/queue/${barberId}`);

  return response.json();
};

export const updateQueue = async (barberId: string, count: number): Promise<Queue> => {
  const response = await fetch(`/api/queue/${barberId}`, {
    method: "PATCH",
    body: JSON.stringify({ count }),
  });

  return response.json();
};
