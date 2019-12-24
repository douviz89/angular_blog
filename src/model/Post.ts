export class Post {
    title: string;
    content: string;
    likes: number;
    creationDate: Date;
    constructor(title, content) {
        this.title = title;
        this.content = content;
        this.likes = 0;
        this.creationDate = new Date();
    }
    toString(): string {
        return "Post: " + this.title + "-- Created " + this.creationDate + "-- Likes = " + this.likes;
    }
}