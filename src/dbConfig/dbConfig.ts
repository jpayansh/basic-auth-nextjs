import mongoose from "mongoose";

export async function connect(){
    try {
        mongoose.connect(process.env.MONGO_URL!)
        const connection=mongoose.connection;
        connection.on('connected',()=>{
            console.log('MongoDB connected')
        })
        connection.on('error',(err)=>{
            console.log('MongoDb connection error, please make sure db is running'+err)

            process.exit(1)
        })

        
    } catch (error) {
        console.log("Something went wrong in the connecting to db")
        console.log(error)
        
    }
}