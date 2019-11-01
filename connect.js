async(req,res)=>{
    
        try {

            await mongoose.connect('mongodb://localhost:27017/Social_credit', { useNewUrlParser: true });

        } catch (error) {

            handleError(error);//Handling error for the initial Connection

        }

//This is for handling errors after the initial connection 
mongoose.connection.on('error', err => {

    logError(err);

  });
}