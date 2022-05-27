const { createDir, writeAndReadFile, appendDataToFile } = require("./fs");
const path = require("path");

const emotesDir = path.join(__dirname, "emotes");

const createNewEmotes = async (fileName, content) => {
  try {
    await createDir(emotesDir);

    const emoteFilePath = path.join(emotesDir, fileName);

    await writeAndReadFile(emoteFilePath, content);

    await appendDataToFile(emoteFilePath, " @HACKABOSS");
  } catch (error) {
    console.error(error.message);
  }
};

createNewEmotes("emotes-sample-1.txt", ":) :D :c :O :(");
createNewEmotes("emotes-sample-2.txt", "-.- !.! :p");
