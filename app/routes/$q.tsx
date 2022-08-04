import { LoaderFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { useEffect, useState } from "react";
import { fr } from "date-fns/locale";
import format from "date-fns/format";

export const loader: LoaderFunction = async ({ params }) => {
  const { q } = params;
  const query = `${q}`;

  return {
    query,
  };
};

export default function Index() {
  const { query } = useLoaderData();
  const [localizedDates, setLocalizedDates] = useState({});
  useEffect(() => {
    fetch(`http://localhost:3000/api/de/${query}`)
      .then((res) => res.json())
      .then((res) => {
        setLocalizedDates(res);
      });
  }, [query]);

  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <h1>Default frontend embedded locale</h1>
      <div>fr: {format(Number(query), "dd MMMM yyyy", { locale: fr })}</div>
      <h1>Other locales (via API call)</h1>
      {Object.entries(localizedDates).map(([locale, str]) => (
        <div key={locale}>{`${locale}: ${str}`}</div>
      ))}
    </div>
  );
}
