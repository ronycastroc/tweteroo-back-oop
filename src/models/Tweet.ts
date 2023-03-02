export class Tweet{
  username: string
  tweet: string
  avatar: string

  constructor(username: string, tweet: string, avatar: string) {
    this.username = username
    this.tweet = tweet
    this.avatar = avatar
  }
}