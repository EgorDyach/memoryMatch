import crystall0 from "/img/shop/crystall0.webp";
import crystall1 from "/img/shop/crystall1.webp";
import crystall2 from "/img/shop/crystall2.webp";
import crystall3 from "/img/shop/crystall3.webp";
import crystall4 from "/img/shop/crystall4.webp";
import crystall5 from "/img/shop/crystall5.webp";

import coins0 from "/img/shop/coins0.webp";
import coins1 from "/img/shop/coins1.webp";
import coins2 from "/img/shop/coins2.webp";
import coins3 from "/img/shop/coins3.webp";
import coins4 from "/img/shop/coins4.webp";
import coins5 from "/img/shop/coins5.webp";

import boosts0 from "/img/shop/boosts0.webp";
import boosts1 from "/img/shop/boosts1.webp";
import boosts2 from "/img/shop/boosts2.webp";
import { ButtonType } from "@components/button/Button";

type ShopItems = {
  title: "crystall" | "coins" | "boosts";
  type: ButtonType;
  items: {
    title:
      | "Crystall"
      | "Pair of Crystalls"
      | "Bunch of Crystalls"
      | "Bag of Crystalls"
      | "Cart of Crystalls"
      | "Safe of Crystalls"
      | "Coin"
      | "Pair of Coins"
      | "Bunch of Coins"
      | "Bag of Coins"
      | "Cart of Coins"
      | "Safe of Coins"
      | "Open all cards for 2 sec"
      | "Add 5 moves"
      | "Open 1 pair";
    count: number;
    price: null | number;
    price_type: "ad" | "crystall" | "dollar";
    img: string;
  }[];
}[];

export const shopItems: ShopItems = [
  {
    title: "crystall",
    type: "red",
    items: [
      {
        title: "Crystall",
        count: 1,
        price: null,
        price_type: "ad",
        img: crystall0,
      },
      {
        title: "Pair of Crystalls",
        count: 10,
        price: 0.99,
        price_type: "dollar",
        img: crystall1,
      },
      {
        title: "Bunch of Crystalls",
        count: 30,
        price: 1.99,
        price_type: "dollar",
        img: crystall2,
      },
      {
        title: "Bag of Crystalls",
        count: 50,
        price: 3.99,
        price_type: "dollar",
        img: crystall3,
      },
      {
        title: "Cart of Crystalls",
        count: 100,
        price: 5.99,
        price_type: "dollar",
        img: crystall4,
      },
      {
        title: "Safe of Crystalls",
        count: 1000,
        price: 7.99,
        price_type: "dollar",
        img: crystall5,
      },
    ],
  },
  {
    title: "coins",
    type: "red",
    items: [
      {
        title: "Coin",
        count: 1,
        price: null,
        price_type: "ad",
        img: coins0,
      },
      {
        title: "Pair of Coins",
        count: 1000,
        price: 0.99,
        price_type: "dollar",
        img: coins1,
      },
      {
        title: "Bunch of Coins",
        count: 5000,
        price: 1.99,
        price_type: "dollar",
        img: coins2,
      },
      {
        title: "Bag of Coins",
        count: 10000,
        price: 3.99,
        price_type: "dollar",
        img: coins3,
      },
      {
        title: "Cart of Coins",
        count: 50000,
        price: 5.99,
        price_type: "dollar",
        img: coins4,
      },
      {
        title: "Safe of Coins",
        count: 100000,
        price: 7.99,
        price_type: "dollar",
        img: coins5,
      },
    ],
  },
  {
    title: "boosts",
    type: "red",
    items: [
      {
        title: "Open all cards for 2 sec",
        count: 1,
        price: 5,
        price_type: "crystall",
        img: boosts0,
      },
      {
        title: "Add 5 moves",
        count: 1,
        price: 5,
        price_type: "crystall",
        img: boosts1,
      },
      {
        title: "Open 1 pair",
        count: 1,
        price: 5,
        price_type: "crystall",
        img: boosts2,
      },
    ],
  },
];
