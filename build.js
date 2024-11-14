import esbuild from "esbuild";
// import { copyPlugin } from "@sprout2000/esbuild-copy-plugin";
import pkg from '@sprout2000/esbuild-copy-plugin';
const { copyPlugin } = pkg;

esbuild.build({
    entryPoints: ["./index.ts"],
    format: "esm",
    platform: "node",
    outdir: "./dist",
    minify: true,
    sourcemap: true,
    bundle: true,
    banner: {
        js: "import { createRequire } from 'module'; const require = createRequire(import.meta.url);",
    },
    plugins: [
        copyPlugin({
            src: "./web/build",
            dest: "./dist",
            filter: (src, dest) => {
                if (src === "web/build/index.js") return false;
                return true;
            }
        })
    ]
})
