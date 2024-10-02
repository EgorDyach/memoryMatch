import AdIcon from "@components/icons/AdIcon";
import DiamondIcon from "@components/icons/DiamondIcon";
import { ReactNode } from "react";

export const formatShopCount = (num: number): string => {
  if (num < 1000) {
    return num.toString();
  } else if (num < 1000000) {
    return (Math.round((num / 1000) * 10) / 10).toString() + "k";
  } else {
    return (Math.round((num / 100000) * 10) / 10).toString() + "M";
  }
}

export const getShopPrice = (price_type: 'dollar' | 'ad' | 'crystall', price: number | null): ReactNode => {
  if (price_type === 'ad') return <AdIcon color="#E0622C" size={26} />;
  if (price_type === 'crystall') return <>{price}<DiamondIcon size={16} style={{marginLeft: 2}} /></>
  return `$${price}`;
}