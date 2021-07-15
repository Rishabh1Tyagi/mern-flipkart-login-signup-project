import mongoose from 'mongoose';

const Connection = async (username, password) => {
    const URL = `mongodb+srv://${username}:${password}@cluster0.2ojv5.mongodb.net/MERNSTACK?retryWrites=true&w=majority`;
    try {
    await mongoose.connect(URL,({
        useNewUrlParser:true,
        useUnifiedTopology:true,
        useFindAndModify:false,
        useCreateIndex:true
    }));
    console.log(`Database is successfully connected`);
   }catch(error){
     console.log(`Error`, error.message);
   }
}

export default Connection;
