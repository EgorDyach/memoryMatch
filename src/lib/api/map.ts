import { Location } from "@type/user";
import { fakeRequestLocationLevels, fakeRequestLocations } from "./fakeApi/map";
import { ShortLevel } from "@type/map";

export const requestLocationLevels$ = async (
  locationId: string | number
): Promise<ShortLevel[]> => {
  return await fakeRequestLocationLevels(locationId);
};

export const requestLocations$ = async (): Promise<Location[]> => {
  return await fakeRequestLocations();
};
