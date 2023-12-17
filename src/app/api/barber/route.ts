import supabase from "@/app/supabase";
import { Barber } from "@/app/types";
import { convertToCamelCase } from "../utils";

export const POST = async (req: Request) => {
  const payload = await req.json();

  const { data, error } = await supabase
    .from("barber")
    .insert({ email: payload.email, name: payload.name })
    .select("*")
    .single();

  if (error) {
    return new Response(error.message, { status: 500 });
  }

  const barber = convertToCamelCase<Barber>(data);
  const { error: queueError } = await supabase
    .from("queue")
    .insert({ barber_id: barber.id, count: 0 })
    .select("*")
    .single();

  if (queueError) {
    return new Response(queueError.message, { status: 500 });
  }

  return Response.json(barber, { status: 201 });
};
