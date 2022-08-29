import { atom } from "jotai";
import { atomWithStorage } from "jotai/utils";

export const highscoresAtom = atomWithStorage("highscores", [
  "100000",
  "500000",
  "1000000",
  "3333",
  "11",
  "1",
  "11",
]);
export const gameoverAtom = atom(false);
export const dayAtom = atom(30);
export const mineralIDAtom = atom(0);
export const selectedPlanetAtom = atom("Fitzgerald 5");
export const mineralPickedAtom = atom("");
export const selectedMineralAtom = atom(false);
export const mineralToBuyOrSellAtom = atom({});
export const playerAtom = atom({ cash: 2000, debt: 2001 });
export const planetAtom = atom([
  { name: "Fitzgerald 5" },
  { name: "Quetzacoatl" },
  { name: "Ariana Prime" },
  { name: "Euclid" },
  { name: "Artemis" },
  { name: "Utopia" },
]);

export const breakingGoodNewsAtom = atom([
  {
    msg: "Luck of the irish!",
    id: 0,
    img: "https://cdn.pixabay.com/photo/2015/09/15/19/22/klee-941597_960_720.jpg",
  },
  {
    msg: "Mineral saturation!",
    id: 1,
    img: "https://cdn.pixabay.com/photo/2015/09/15/19/22/klee-941597_960_720.jpg",
  },
]);
export const mineralAtom = atom([
  {
    id: 0,
    name: "Lizac",
    startingPrice: 1090,
    changedPrice: null,
    lastChangedPrice: null,
    amountOwned: 4,
    description: "This is a mineral",
    currentMineral: false,
    image:
      "https://cdn.pixabay.com/photo/2016/06/24/09/14/glass-1476909_960_720.jpg",
  },
  {
    id: 1,
    name: "Elsmmuth",
    startingPrice: 333,
    changedPrice: null,
    lastChangedPrice: null,
    amountOwned: 0,
    description: "This is a mineral",
    currentMineral: false,
    image:
      "https://cdn.pixabay.com/photo/2016/06/17/00/34/glass-1462395_960_720.jpg",
  },
  {
    id: 2,
    name: "Motuesia",
    startingPrice: 12123,
    changedPrice: null,
    lastChangedPrice: null,
    amountOwned: 3,
    description: "This is a mineral",
    currentMineral: false,
    image:
      "https://cdn.pixabay.com/photo/2016/08/18/17/35/rock-crystal-1603474_960_720.jpg",
  },
  {
    id: 3,
    name: "Dalusine",
    startingPrice: 223,
    changedPrice: null,
    lastChangedPrice: null,
    amountOwned: 0,
    description: "This is a mineral",
    currentMineral: false,
    image:
      "https://cdn.pixabay.com/photo/2014/01/03/16/29/rock-crystal-238075_960_720.jpg",
  },
  {
    id: 4,
    name: "Jadeenic",
    startingPrice: 555,
    changedPrice: null,
    lastChangedPrice: null,
    amountOwned: 0,
    description: "This is a mineral",
    currentMineral: false,
    image:
      "https://cdn.pixabay.com/photo/2016/08/16/17/31/fluorite-1598472_960_720.jpg",
  },
  {
    id: 5,
    name: "Mendraz",
    startingPrice: 10,
    changedPrice: null,
    lastChangedPrice: null,
    amountOwned: 1,
    description: "This is a mineral",
    currentMineral: false,
    image:
      "https://cdn.pixabay.com/photo/2016/08/18/17/34/rock-crystal-1603469_960_720.jpg",
  },
]);
