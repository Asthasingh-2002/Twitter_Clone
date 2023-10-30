import { TweetRepository } from "../repository/tweet-repository"
import { HashtagRepository } from "../repository/hashtag-repository"


class TweetService{
    constructor(){
        this.tweetRepository= new TweetRepository();
        this.hashtagrepository= new HashtagRepository();
    }
    async create (data){
        const content= data.content;
        const tags = content.match(/#+[a-zA-Z0-9(_)]+/g).map((tag) => tag.substring(1).toLowerCase());

        // stroring the tweet
        const tweet= await this.tweetRepository.create(data);

        // storing the hashtags
        let alreadyPresentTags= await this.hashtagrepository.findByName(tags)
        let textOfPresentTags =alreadyPresentTags.map(tags => tags.text)
        let newTags =tags.filter(tag=>!textOfPresentTags.includes(tag))
        newTags= newTags.map(tag =>{
            return {
                text:tag,
                tweets:[tweet.id]
            }
        })
        await this.hashtagrepository.bulkCreate(newTags);
        alreadyPresentTags.forEach((tag)=>{
            tag.tweet.push(tweet.id);
            tag.save();

        })
        return tweet;
    }

    async getTweet(tweetId){
        const tweet= await this.tweetRepository.getTweet(tweetId);
        return tweet;
    }
}

export default TweetService;