/*
 * FORMATOS BODY:
 * x-www-form-url-encoded
 * multipart/form-data
 * raw (json, text, etc)
 */

// Esto sería un parser para bodys en formato JSON

const bodyParser = (request) => {
  return new Promise((resolve, reject) => {
    const buffers = [];

    request.on("data", (chunk) => {
      buffers.push(chunk);
    });

    request.on("end", () => {
      const bodyJSON = Buffer.concat(buffers).toString();
      resolve(JSON.parse(bodyJSON));
    });
  });
};

module.exports = bodyParser;
