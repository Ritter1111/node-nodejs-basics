import {  createGunzip } from 'node:zlib';
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const curentFile = path.resolve(__dirname, "files", "fileToCompress.txt");
const compressedFile = path.resolve(__dirname, "files", "archive.gz");

const gzip = createGunzip();
const source = fs.createReadStream(compressedFile);
const destination = fs.createWriteStream(curentFile);

const decompress = async () => {
    source.pipe(gzip).pipe(destination)
    destination.on('finish', () => {
        console.log('Compressed finish');
    });

    destination.on('error', (e) => {
        console.log(e);
    })
};

await decompress();