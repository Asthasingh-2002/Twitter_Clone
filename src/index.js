import express from "express";
import { connect } from "./config/database.js";
 import router from "./routes/index.js";
import TweetRepository from "./repository/tweet-repository.js";

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use("/", router)

app.listen(3000, async () => {
  console.log("Server is started at 3000");

  // Wait for the MongoDB connection to be established
    console.log("MongoDB connected");

    
    // const newTweet = new Tweet({
    //   content: "This is my first tweet",
    //   likes: 25,
    //   noOfRetweets: 5,
    //   Comment: "abs"
    // });
    // await newTweet.save();

    // Uncomment this part to create a new Hashtag
    // const newHashtag = new Hashtag({
    //   text: "travel",
    //   tweets: ['653bfae9d17c74c8a63d9a0f']
    // });
    // await newHashtag.save();

  //   const tweetRepo = new TweetRepository();

    
  //   let tweets = await tweetRepo.deleteTweet({
  //     '_id':'653ce2d34427117b706e08b2'
  //   });
  //   console.log(" Tweet:", tweets);
  // } catch (error) {
  //   console.error("Error:", error);
  // }
  
}); 
