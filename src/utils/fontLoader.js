let fontsLoaded = false;
let fontPromise = null;

export const waitForFonts = () => {
  if (fontsLoaded) {
    return Promise.resolve();
  }
  
  if (!fontPromise) {
    fontPromise = document.fonts.ready.then(() => {
      fontsLoaded = true;
      return true;
    });
  }
  
  return fontPromise;
};

export const areFontsLoaded = () => fontsLoaded;