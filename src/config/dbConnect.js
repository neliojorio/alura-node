import mongoose from "mongoose";

mongoose.connect(process.env.STRING_CONNECT_MONGODB);

let db = mongoose.connection;

export default db;