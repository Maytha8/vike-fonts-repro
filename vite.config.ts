import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import vike from "vike/plugin";
import Unfonts from "unplugin-fonts/vite";

export default defineConfig({
  plugins: [
    vike({}),
    react({}),
    Unfonts({
      google: {
        families: ["Geist"]
      }
    })
  ],
});
