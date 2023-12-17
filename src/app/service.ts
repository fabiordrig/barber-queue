import { Barber, NewBarber } from "./types";

export const createBarber = async (barber: NewBarber): Promise<Barber> => {
  const response = await fetch("/api/barber", {
    method: "POST",
    body: JSON.stringify(barber),
  });

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  return response.json();
};
