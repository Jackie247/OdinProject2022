var Book = function(title,author,pages,read){
    this.title=title;
    this.author=author;
    this.pages=pages;
    this.read=read;
}

Book.prototype.info = function(){
    return `${this.title} by ${this.author},${this.pages} pages,${this.read} yet.`;
}