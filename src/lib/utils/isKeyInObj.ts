export function isKeyOfObject<T extends object>(
  key: PropertyKey,
  obj: T
): key is keyof T {
  return key in obj;
}
