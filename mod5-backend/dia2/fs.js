// const fs = require("fs");
const fs = require("fs").promises;

const createDir = async (path) => {
  try {
    await fs.mkdir(path, { recursive: true });
  } catch (error) {
    console.error(error.message);
  }
};

const deleteDir = async (path) => {
  try {
    await fs.rmdir(path, { recursive: true });
  } catch (error) {
    console.error(error.message);
  }
};

const deleteFile = async (path) => {
  try {
    await fs.unlink(path);
  } catch (error) {
    console.error(error.message);
  }
};

const writeAndReadFile = async (filePath, content) => {
  try {
    await fs.writeFile(filePath, content);

    const readContent = await fs.readFile(filePath, "utf-8");

    console.log(readContent);
  } catch (error) {}
};

const appendDataToFile = async (filePath, dataToAppend) => {
  try {
    await fs.appendFile(filePath, dataToAppend);
  } catch (error) {
    console.error(error.message);
  }
};

module.exports = {
  createDir,
  deleteDir,
  deleteFile,
  writeAndReadFile,
  appendDataToFile,
};
