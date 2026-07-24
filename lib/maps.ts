export function buildDirectionsUrl(placeQuery: string): string {
  return `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(placeQuery)}`;
}

export function buildSearchUrl(placeQuery: string): string {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(placeQuery)}`;
}
