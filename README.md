### Weird Remix bundle sharing behaviour

This project has 1 page and 3 routes (2 API endpoints with a loader function, 1 frontend layout route) :

1. [`app/routes/$ts.tsx`](./app/routes/%24q.tsx) that serves [`/$ts`](https://weird-remix-bundles-production.up.railway.app/1700000000000), with `$ts` being a timestamp, shows a page with a French and a German localised formatted version of the provided timestamp `$ts`.

- French version is provided by the frontend import `import { fr } from "date-fns/locale";` directly.
- German version is fetched with an API call to `/api/de/$ts`

2. [`app/routes/api/de.$ts.tsx`](./app/routes/api/de.%24ts.tsx) that serves [`/api/de/$ts`](https://weird-remix-bundles-production.up.railway.app/api/de/1700000000000)

3. [`app/routes/api/all-locales.$ts.tsx`](./app/routes/api/all-locales.%24ts.tsx) that serves [`/api/all-locales/$ts`](https://weird-remix-bundles-production.up.railway.app/api/all-locales/1700000000000)

## Expected behaviour

> ✅ The frontend bundle(s) for route [`app/routes/$ts.tsx`](./app/routes/%24ts.tsx) to only contain `fr` `date-fns` locale, the one that is used in the Frontend.

## Actual behaviour

> ❌ The frontend bundle(s) for route [`app/routes/$ts.tsx`](./app/routes/%24ts.tsx) contains all `date-fns` locales (exactly those imported in the API call implementation `/api/all/$ts`). However, most of them (except `fr`) are not imported anywhere in the code of [`app/routes/$ts.tsx`](./app/routes/%24ts.tsx) (neither in the frontend component, nor in the loader function)

## Remarks & possible explanation

a. Tree shaking works properly on this library. Removing route `app/routes/api/all.$ts.tsx` fixes the problem on route

b. The problem only happens when the imported library is exactly the same path in [`app/routes/$ts.tsx`](./app/routes/%24ts.tsx) and [`app/routes/api/all-locales.$ts.tsx`](./app/routes/api/all-locales.%24ts.tsx). (changing `import { fr } from "date-fns/locale";` to `import fr from "date-fns/locale/fr";` in [`app/routes/$ts.tsx`](./app/routes/%24ts.tsx) fixes the problem)

c. Adding the following code to [`app/routes/api/all-locales.$ts.tsx`](./app/routes/api/all-locales.%24ts.tsx) fixes the problem (but breaks `/api/de/$ts`):

```
export default function Index() {
  return <></>;
}
```

=> I suspect that there is some build-time optimization consisting in sharing bundles between routes. A bundle containing all locales is shared between
