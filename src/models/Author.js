import { DataTypes } from "sequelize";
import db from "../config/mysql.js";

export default db.define(
  "Author",
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {
    timestamps: true,
    updatedAt: false
  }
);
