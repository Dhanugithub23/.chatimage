import mongoose from "mongoose";

const connectDB = async () => {
    await mongoose.connect('mongodb+srv://dpdhanu23:Goal2026@cluster0.wyv10yd.mongodb.net/YT-CHAT-APPLICATION-MAIN').then(() => {
        console.log('Database connected');
    }).catch((error)=>{
        console.log(error);
    })
}
export default connectDB;