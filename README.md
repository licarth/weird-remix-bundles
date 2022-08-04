### Weird Remix bundle sharing behaviour

This project has 1 page and 2 routes :

- `/$q`, with q being a timestamp, shows a page with a French and a German localised version of the provided timestamp `$q`. French version is provided from the frontend directly. German version is fetched with an API call to `/api/de/$q`

There is another API endpoint that returns all suported date-fns localized versions: `/api/all/$q`

## Expected behaviour

> ✅ I expect the frontend bundles of route [`app/routes/$q.tsx`](./app/routes//%24q.tsx) to only contain `fr` date-fns locale.

## Actual behaviour

> ❌ The frontend bundles of route [`app/routes/$q.tsx`](./app/routes//%24q.tsx) contains all date-fns locales (exactly those imported in the API call implementation `/api/all/$q`). However, most of them (except `fr`) are not imported anywhere (neither in the frontend component, nor in the loader function)

### If I add the following code to `app/routes/api/all.$q.tsx` :

Then bundle `/api/de/$q` does not contain all locales anymore.

```
export default function Index() {
  return <></>;
}
```
