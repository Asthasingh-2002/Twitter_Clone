import mongoose from "mongoose";

export const connect = async () => {
    const password = encodeURIComponent("Astha123");
    await mongoose.connect(`mongodb+srv://astharana0123:${password}@cluster0.wnyje4f.mongodb.net/`);
};


