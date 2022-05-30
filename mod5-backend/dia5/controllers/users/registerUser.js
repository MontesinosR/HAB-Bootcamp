const insertUser = require("../../respositories/users/insertUser");
const uploadImage = require("../../helpers/uploadImage");
const uploadFile = require("../../helpers/uploadFile");

const registerUser = async (req, res, next) => {
  try {
    /** Nos traemos el email y la password del body */
    const { email, password } = req.body;

    /** Nos traemos el avatar y el cv de req.files*/
    const { avatar, cv } = req.files;

    /** Si falta el email, la password o el avatar, lanzamos un error */
    if (!(email && password && avatar)) {
      const error = new Error("User email, password and avatar are required");
      error.statusCode = 400;
      throw error;
    }

    /** Subimos el avatar usando uploadImage y pasándole por parámetro el Buffer que representa dicho avatar */
    const avatarName = await uploadImage(avatar.data);

    /** Si no usásemos Sharp, podríamos guardar la imagen con esta simple línea */
    // await avatar.mv(imagePath);

    let cvName;

    /** Si el usuario ha enviado un cv, lo subimos con la función uploadFile */
    if (cv) {
      cvName = await uploadFile(cv);
    }

    /** Insertamos los datos del usuario en la base de datos */
    const insertId = await insertUser(email, password, avatarName, cvName);

    /** Enviamos la respuesta con código 201 y un JSON que contiene los datos del usuario registrado */
    res.status(201).send({
      status: "ok",
      message: "Usuario registrado correctamente",
      data: { id: insertId, email, avatarName, cvName },
    });
  } catch (err) {
    /** En caso de error, lo mandamos al middleware de errores con next(err) */
    next(err);
  }
};

module.exports = registerUser;
