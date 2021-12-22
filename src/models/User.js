import { DataTypes } from "sequelize";
import db from "../config/mysql.js";

export default db.define(
  "User",
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  { timestamps: true }
);
