import mongoose, { connection } from "mongoose";

export async function connect() {
  try {
    mongoose.connect(process.env.MONGO_URI!);

    connection.on("connected", () => {
      console.log("MongoDB is connected");
    });

    connection.on("error", (err) => {
      console.log("MongDB connection error: " + err);
      process.exit();
    });
  } catch (error) {
    console.log("Something went wrong while connecting connection");
    console.log(error);
  }
}
