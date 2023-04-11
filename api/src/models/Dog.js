const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    "dogs",
    {
      id: {
        type: DataTypes.UUID, // UUID => identificador unico universal
        primaryKey: true, // clave primaria
        defaultValue: DataTypes.UUIDV4, //valor por defecto
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false, // no puede ser vacia la propiedad
      },
      height: {
        type: DataTypes.ARRAY(DataTypes.STRING),
        allowNull: false,
      },
      weight: {
        type: DataTypes.ARRAY(DataTypes.STRING),
        allowNull: false,
      },
      life_span: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      image: {
        type: DataTypes.STRING(500),
      },
    },
    { timestamps: false } // no me  agrega las filas createAt y updatedAt por defecto en la tabla
  );
};
