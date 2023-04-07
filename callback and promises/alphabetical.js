const books=[
    {title:"t1", author:"a1", year:2001},
    {title:"a2", author:"a2", year:2002},
    {title:"d3", author:"a3", year:2003},
    {title:"m4", author:"a4", year:2004},
];

function booksDetails(books,alphabetical) {
    const newList=books.map((book)=>{
        return  book.title;
        
    })
   return  alphabetical(newList)
}

function alphabetical(newList) {

    newList.sort();
    console.log(newList.join(", "));
}

booksDetails(books,alphabetical)