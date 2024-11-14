#!/usr/bin/env node

const { Command } = require('commander');
const program = new Command();

import { handler } from "./web/build/handler.js";
import polka from "polka";
import packageJSON from "./package.json";

function getPackageVersion() {
    const version = packageJSON.version;
    if (version === null || version === undefined) return "undefined";
    return version;
}

program
    .name("choku")
    .version(getPackageVersion())

program
    .command("serve")
    .description("Serve bundler and web server")
    .action(() => {
        serveWeb();
    })

program.parse();

function serveWeb() {
    const app = polka();
    app.all('*', handler);

    const PORT = process.env.PORT || 3000;
    // const PORT = 5173;

    app.listen(PORT, (err) => {
        if (err) {
            console.log('Error starting server:', err);
        } else {
            console.log(`Server running on http://localhost:${PORT}`);
        }
    });
}
