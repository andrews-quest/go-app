import {sassPlugin} from "esbuild-sass-plugin";
import esbuild from "esbuild";

esbuild
    .build({
        entryPoints: ["components/App.tsx"],
        outdir: "public",
        assetNames: "resources/[name]-[hash]",
        bundle: true,
        minify: true,
        plugins: [sassPlugin()],
        loader: {
            ".jpg" : "file",
            ".png" : "file",
            ".webp" : "file",
            ".svg" : "file"
        }
    })
    .then(() => console.log("Esbuild complete!"))
    .catch(() => process.exit(1))
