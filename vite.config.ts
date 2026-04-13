import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  // GitHub Pages では /<repo>/ 配下で配信されるため、アセット参照の基準パスを合わせる。
  base: "/SelectionOfOrganizers/",
});
