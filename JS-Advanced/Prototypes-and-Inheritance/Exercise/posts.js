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
        constructor(title, content, likes, dislikes) {
            super(title, content);
            this.likes = likes;
            this.dislikes = dislikes;
            this._comments = [];
        }

        addComment(comment) {
            this._comments.push(comment);
        }

        get comments() {
            if (this._comments.length === 0) {
                return '';
            }
            return `Comments:\n * ${this._comments.join('\n * ')}`;
        }

        toString() {
            return (`Post: ${this.title}\nContent: ${this.content}\nRating: ${this.likes - this.dislikes}\n${this.comments}`);
        }
    }

    class BlogPost extends Post {
        constructor(title, content, views) {
            super(title, content);
            this.views = views;
        }

        view() {
            this.views += 1;
            return this;
        }

        toString() {
            return `Post: ${this.title}\nContent: ${this.content}\nViews: ${this.views}`;
        }
    }

    return {
        Post,
        SocialMediaPost,
        BlogPost
    };
}

const classes = solve();
let post = new classes.Post("Post", "Content");

console.log(post.toString());

let scm = new classes.SocialMediaPost("TestTitle", "TestContent", 25, 30);

scm.addComment("Good post");
scm.addComment("Very good post");
scm.addComment("Wow!");

console.log(scm.toString());