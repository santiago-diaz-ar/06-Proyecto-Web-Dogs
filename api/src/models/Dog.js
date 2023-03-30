const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    "dogs",
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
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
    { timestamps: false }
  );
};
