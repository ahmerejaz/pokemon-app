export const retrieveID = (url: string) => {
  return url.split('/').splice(-2, 1);
}
