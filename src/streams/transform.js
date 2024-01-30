import { Transform } from "stream";

const transform = async () => {
  const uppercase = new Transform({
    transform(chunk, encoding, callback) {
      callback(null, chunk.toString().split("").reverse().join(""));
    },
  });

  process.stdin.pipe(uppercase).pipe(process.stdout);
};

await transform();
