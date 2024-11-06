export const getAssetURL = (image:string) => { 
    return new URL(`../images/${image}`, import.meta.url).href
  }
  