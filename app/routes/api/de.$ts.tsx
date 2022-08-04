import { LoaderFunction } from "@remix-run/node";
import { format } from "date-fns";
import { de } from "date-fns/locale";

export const loader: LoaderFunction = async ({ params }) => {
  const { ts } = params;

  return { de: format(Number(ts), "dd MMMM yyyy", { locale: de }) };
};
