// Config
import { uri } from "./config";

export const api = Object.freeze({
  weather: {
    fetch: () => fetch(uri),
  },
});
