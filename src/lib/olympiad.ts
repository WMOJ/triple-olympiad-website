// Shared event facts and the periodic-table geometry the site is built on.

export type Day = {
  n: number; // December date, and the cell's atomic number
  day: number;
  symbol: string;
  short: string;
  long: string;
  value: string; // the exact string /api/register expects in `sections`
  weekday: string;
  weekdayLong: string;
  extra?: string;
};

export const DAYS: Day[] = [
  {
    n: 15,
    day: 1,
    symbol: "Ma",
    short: "Math",
    long: "Mathematics",
    value: "Math",
    weekday: "TUE",
    weekdayLong: "Tuesday",
  },
  {
    n: 16,
    day: 2,
    symbol: "Cs",
    short: "Comp Sci",
    long: "Computer Science",
    value: "Computer Science",
    weekday: "WED",
    weekdayLong: "Wednesday",
  },
  {
    n: 17,
    day: 3,
    symbol: "Ph",
    short: "Physics",
    long: "Physics",
    value: "Physics",
    weekday: "THU",
    weekdayLong: "Thursday",
    extra: "Practical Hackathon",
  },
];

export const SECTION_VALUES = DAYS.map((d) => d.value);

export const CONTACT_EMAIL = "wosstriolympiad@gmail.com";

export const ELEMENT_SYMBOLS = (
  "H He Li Be B C N O F Ne Na Mg Al Si P S Cl Ar K Ca Sc Ti V Cr Mn Fe Co Ni Cu Zn Ga Ge As Se Br Kr " +
  "Rb Sr Y Zr Nb Mo Tc Ru Rh Pd Ag Cd In Sn Sb Te I Xe Cs Ba La Ce Pr Nd Pm Sm Eu Gd Tb Dy Ho Er Tm Yb Lu " +
  "Hf Ta W Re Os Ir Pt Au Hg Tl Pb Bi Po At Rn Fr Ra Ac Th Pa U Np Pu Am Cm Bk Cf Es Fm Md No Lr " +
  "Rf Db Sg Bh Hs Mt Ds Rg Cn Nh Fl Mc Lv Ts Og"
).split(" ");

/** Row (period) and column (group) of an element in the 18-column main table. */
export function positionOf(n: number): { r: number; c: number } {
  if (n === 1) return { r: 1, c: 1 };
  if (n === 2) return { r: 1, c: 18 };
  if (n <= 10) return { r: 2, c: n <= 4 ? n - 2 : n + 8 };
  if (n <= 18) return { r: 3, c: n <= 12 ? n - 10 : n };
  if (n <= 36) return { r: 4, c: n - 18 };
  if (n <= 54) return { r: 5, c: n - 36 };
  if (n <= 86) return { r: 6, c: n <= 56 ? n - 54 : n <= 71 ? 3 : n - 68 };
  return { r: 7, c: n <= 88 ? n - 86 : n <= 103 ? 3 : n - 100 };
}

/** Column inside the compact p-block view (groups 13-18, periods 1-3). */
export function pBlockColumn(c: number): number | null {
  return c >= 13 ? c - 12 : null;
}
