import mongoose from "mongoose";

const { DB_URI } = process.env;

export const initMongoDB = async () => {
  try {
    const { connection } = await mongoose.connect(DB_URI);
    console.log("Mongo connected to database -> ", connection.name);
  } catch (err) {
    console.error("Error connecting with mongodb", err);
  }
};
