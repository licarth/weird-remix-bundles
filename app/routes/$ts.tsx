import { LoaderFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { useCallback, useEffect, useState } from "react";
import { fr } from "date-fns/locale";
import format from "date-fns/format";

export const loader: LoaderFunction = async ({ params }) => {
  const { ts } = params;
  const query = `${ts}`;

  return {
    query,
  };
};

export default function Index() {
  const { query } = useLoaderData();
  const [localizedDates, setLocalizedDates] = useState({});
  const fetchLocales = useCallback(
    (locale: "de" | "all-locales") => {
      fetch(`http://localhost:3000/api/${locale}/${query}`)
        .then((res) => res.json())
        .then((res) => {
          setLocalizedDates(res);
        });
    },
    [query]
  );
  useEffect(() => {
    fetchLocales("de");
  }, [query, fetchLocales]);
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <h1>Default frontend embedded locale</h1>
      <div>fr: {format(Number(query), "dd MMMM yyyy", { locale: fr })}</div>
      <h1>Other locales (via API call)</h1>
      <div style={{ display: "flex", gap: "10px", marginBottom: "10px" }}>
        <button onClick={() => fetchLocales("all-locales")}>Fetch All</button>
        <button onClick={() => fetchLocales("de")}>Fetch DE</button>
      </div>
      {Object.entries(localizedDates).map(([locale, str]) => (
        <div key={locale}>{`${locale}: ${str}`}</div>
      ))}
    </div>
  );
}
