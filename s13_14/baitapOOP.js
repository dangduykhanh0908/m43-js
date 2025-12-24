class book {
    constructor(title,author,isRead) {
        this.title=title;
        this.author = author;
        this.isRead = false;
    }
    markAsRead(){
        this.isRead = true;
    }
    getSumsry() {
        const status = this.isRead ? "da doc" : "chua doc";
        return `${this.title} cua tac gia ${this.author} .${status}`;
    }

}