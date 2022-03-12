function solve() {
    class Post {
        constructor(title, content) {
            this.title = title;
            this.content = content;
        }

        toString() {
            return `Post: ${this.title}\nContent: ${this.content}`;
        }
    }

    class SocialMediaPost extends Post {
        constructor(title, content, likes, disikes) {
            super(title, content);
            this.likes = likes;
            this.disikes = disikes;
            this.comments = [];
        }

        addComment(comment) {
            this.comments.push(comment);
        }

        toString() {
            let commentsResult = (this.comments.length !== 0 && `Comments:\n * ${this.comments.join('\n * ')}`) || '';
            return (`Post: ${this.title}\nContent: ${this.content}\nRating: ${this.likes} - ${this.disikes}\n${commentsResult}`);
        }
    }

    return {
        Post,
        SocialMediaPost
    };
}

const classes = solve();
let post = new classes.Post("Post", "Content");

console.log(post.toString());

// Post: Post
// Content: Content

let scm = new classes.SocialMediaPost("TestTitle", "TestContent", 25, 30);

scm.addComment("Good post");
scm.addComment("Very good post");
scm.addComment("Wow!");

console.log(scm.toString());

// Post: TestTitle
// Content: TestContent
// Rating: -5
// Comments:
//  * Good post
//  * Very good post
//  * Wow!
