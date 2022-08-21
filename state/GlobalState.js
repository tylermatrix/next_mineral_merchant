import { atom } from "jotai";

export const mineralAtom = atom([
  {
    id: 0,
    name: "Lizac",
    price: 1090,
    amountOwned: 0,
    description: "This is a mineral",
    currentMineral: false,
    image:
      "https://cdn.pixabay.com/photo/2016/06/24/09/14/glass-1476909_960_720.jpg",
  },
  {
    id: 1,
    name: "Elsmmuth",
    price: 333,
    amountOwned: 0,
    description: "This is a mineral",
    currentMineral: false,
    image:
      "https://cdn.pixabay.com/photo/2016/06/17/00/34/glass-1462395_960_720.jpg",
  },
  {
    id: 2,
    name: "Motuesia",
    price: 12123,
    amountOwned: 0,
    description: "This is a mineral",
    currentMineral: false,
    image:
      "https://cdn.pixabay.com/photo/2016/08/18/17/35/rock-crystal-1603474_960_720.jpg",
  },
  {
    id: 3,
    name: "Daedalusine",
    price: 223,
    amountOwned: 0,
    description: "This is a mineral",
    currentMineral: false,
    image:
      "https://cdn.pixabay.com/photo/2014/01/03/16/29/rock-crystal-238075_960_720.jpg",
  },
  {
    id: 4,
    name: "Jadeenic",
    price: 555,
    amountOwned: 0,
    description: "This is a mineral",
    currentMineral: false,
    image:
      "https://cdn.pixabay.com/photo/2016/08/16/17/31/fluorite-1598472_960_720.jpg",
  },
  {
    id: 5,
    name: "Mendrazalite",
    price: 10,
    amountOwned: 0,
    description: "This is a mineral",
    currentMineral: false,
    image:
      "https://cdn.pixabay.com/photo/2016/08/18/17/34/rock-crystal-1603469_960_720.jpg",
  },
]);

export const playerAtom = atom({ cash: 2000, debt: 2001, daysPlayer: 0 });

export const planetAtom = atom([
  { name: "Fitzgerald 5", active: false },
  { name: "Quetzacoatl" },
  { name: "Ariana Prime" },
  { name: "Euclid" },
  { name: "Artemis" },
  { name: "Utopia" },
]);

export const selectedPlanetAtom = atom("Fitzgerald 5");
