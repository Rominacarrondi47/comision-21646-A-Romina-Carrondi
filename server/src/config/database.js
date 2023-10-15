import { Sequelize } from "sequelize";
import "dotenv/config";

const {DB_NAME,DB_USER,DB_PASSWORD,DB_HOST,DB_DIALECT} = process.env;

export const sequelize = new Sequelize(DB_NAME,DB_USER,DB_PASSWORD,{
host: DB_HOST,
dialect: DB_DIALECT,
});

export const starDb = async () => {
    try {
        await sequelize.authenticate();
        await sequelize.sync();
         //await sequelize.sync({force:treu});
         console.log("connection.established successfully.");
     } catch (error) {
        console.log("unable to connect to the database:",error);
     }
    };
    
