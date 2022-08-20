import { atom } from "jotai";

export const mineralAtom = atom([
  {
    id: 0,
    name: "Jadeenic",
    price: 1090,
    amountOwned: 0,
    description: "This is a mineral",
    currentMineral: false,
  },
  {
    id: 1,
    name: "Elsmmuth",
    price: 333,
    amountOwned: 0,
    description: "This is a mineral",
    currentMineral: false,
  },
  {
    id: 2,
    name: "Motuesia",
    price: 12123,
    amountOwned: 0,
    description: "This is a mineral",
    currentMineral: false,
  },
  {
    id: 3,
    name: "Daedalusine",
    price: 223,
    amountOwned: 0,
    description: "This is a mineral",
    currentMineral: false,
  },
  {
    id: 4,
    name: "Lizac",
    price: 555,
    amountOwned: 0,
    description: "This is a mineral",
    currentMineral: false,
  },
  {
    id: 5,
    name: "Mendrazalite",
    price: 10,
    amountOwned: 0,
    description: "This is a mineral",
    currentMineral: false,
  },
]);

export const playerAtom = atom({ cash: 2000, debt: 2001, daysPlayer: 0 });

export const planetAtom = atom([
  { name: "Fitzgerald 5" },
  { name: "Quetzacoatl" },
  { name: "Ariana Prime" },
  { name: "Euclid" },
  { name: "Artemis" },
  { name: "Utopia" },
]);

export const selectedPlanetAtom = atom({ name: "Fitzgerald 5" });
