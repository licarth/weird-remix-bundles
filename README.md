### Weird Remix bundle sharing behaviour

This project has 1 page and 2 routes :

- `/$q`, with q being a timestamp, shows a page with a French and a German localised version of the provided timestamp `$q`. French version is provided from the frontend directly. German version is fetched with an API call to `/api/de/$q`

- There is another API endpoint that returns all suported date-fns localized versions: `/api/all/$q`

### What I would expect

- I expect the front bundle of `/api/de/$q` to only contain fr date-fns locale.

### What I see

- It contains all date-fns locales (exactly those imported in the API call implementation `/api/all/$q`)

### If I add the following code to `app/routes/api/all.$q.tsx` :

Then bundle `/api/de/$q` does not contain all locales anymore.

```
export default function Index() {
  return <></>;
}
```
