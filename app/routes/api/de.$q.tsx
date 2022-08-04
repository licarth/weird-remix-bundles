import { LoaderFunction } from "@remix-run/node";
import { format } from "date-fns";
import { de } from "date-fns/locale";

export const loader: LoaderFunction = async ({ params }) => {
  const { q } = params;

  return { de: format(Number(q), "dd MMMM yyyy", { locale: de }) };
};
