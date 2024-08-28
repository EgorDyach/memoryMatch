import { Location } from "@type/user";
import { ShortLevel } from "@type/map";
import { request } from ".";

export const requestLocationLevels$ = async (
  locationId: string | number
): Promise<ShortLevel[]> => {
  return await request.get(`/location/${locationId}/levels`);
};

export const requestLocations$ = async (): Promise<Location[]> => {
  return await request.get("/location");
};
