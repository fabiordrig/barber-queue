import supabase from "../../../supabase";
import { Params, Queue } from "../../../types";
import { convertToCamelCase } from "../../utils";

export const GET = async (
  // eslint-disable-next-line no-unused-vars
  _: Request,
  {
    params,
  }: Params<{
    barberId: string;
  }>,
) => {
  const { data, error } = await supabase
    .from("queue")
    .select("*")
    .eq("barber_id", params.barberId)
    .single();

  if (error) {
    return new Response(error.message, { status: 500 });
  }

  return Response.json(convertToCamelCase<Queue>(data));
};

export const PATCH = async (
  req: Request,
  {
    params,
  }: Params<{
    barberId: string;
  }>,
) => {
  const payload = await req.json();

  const { data, error } = await supabase
    .from("queue")
    .update({ count: payload.count })
    .match({ barber_id: params.barberId })
    .select("*")
    .single();

  if (error) {
    return new Response(error.message, { status: 500 });
  }

  return Response.json(convertToCamelCase<Queue>(data));
};
