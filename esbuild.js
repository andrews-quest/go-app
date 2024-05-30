import {sassPlugin} from "esbuild-sass-plugin";
import esbuild from "esbuild";

esbuild
    .build({
        entryPoints: ["components/App.tsx"],
        outdir: "public",
        bundle: true,
        minify: true,
        plugins: [sassPlugin()]
    })
    .then(() => console.log("Esbuild complete!"))
    .catch(() => process.exit(1))
