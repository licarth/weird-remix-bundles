import { LoaderFunction } from "@remix-run/node";
import { format } from "date-fns";
import {
  af,
  ar,
  arDZ,
  arEG,
  arMA,
  arSA,
  arTN,
  az,
  be,
  beTarask,
  bg,
  bn,
  bs,
  ca,
  cs,
  cy,
  da,
  de,
  deAT,
  el,
  enAU,
  enCA,
  enGB,
  enIE,
  enIN,
  enNZ,
  enUS,
  enZA,
  eo,
  es,
  et,
  eu,
  faIR,
  fi,
  fr,
  frCA,
  frCH,
  fy,
  gd,
  gl,
  gu,
  he,
  hi,
  hr,
  ht,
  hu,
  hy,
  id,
  is,
  it,
  itCH,
  ja,
  jaHira,
  ka,
  kk,
  km,
  kn,
  ko,
  lb,
  lt,
  lv,
  mk,
  mn,
  ms,
  mt,
  nb,
  nl,
  nlBE,
  nn,
  oc,
  pl,
  pt,
  ptBR,
  ro,
  ru,
  sk,
  sl,
  sq,
  sr,
  srLatn,
  sv,
  ta,
  te,
  th,
  tr,
  ug,
  uk,
  uz,
  uzCyrl,
  vi,
  zhCN,
  zhHK,
  zhTW,
} from "date-fns/locale";

export const loader: LoaderFunction = async ({ params }) => {
  const { ts } = params;

  const allLocales = [
    af,
    ar,
    arDZ,
    arEG,
    arMA,
    arSA,
    arTN,
    az,
    be,
    beTarask,
    bg,
    bn,
    bs,
    ca,
    cs,
    cy,
    da,
    de,
    deAT,
    el,
    enAU,
    enCA,
    enGB,
    enIE,
    enIN,
    enNZ,
    enUS,
    enZA,
    eo,
    es,
    et,
    eu,
    faIR,
    fi,
    fr,
    frCA,
    frCH,
    fy,
    gd,
    gl,
    gu,
    he,
    hi,
    hr,
    ht,
    hu,
    hy,
    id,
    is,
    it,
    itCH,
    ja,
    jaHira,
    ka,
    kk,
    km,
    kn,
    ko,
    lb,
    lt,
    lv,
    mk,
    mn,
    ms,
    mt,
    nb,
    nl,
    nlBE,
    nn,
    oc,
    pl,
    pt,
    ptBR,
    ro,
    ru,
    sk,
    sl,
    sq,
    sr,
    srLatn,
    sv,
    ta,
    te,
    th,
    tr,
    ug,
    uk,
    uz,
    uzCyrl,
    vi,
    zhCN,
    zhHK,
    zhTW,
  ];

  return Object.fromEntries(
    allLocales.map((locale) => [
      locale.code,
      format(Number(ts), "dd MMMM yyyy", { locale }),
    ])
  );
};

// export default function Index() {
//   return <></>;
// }
