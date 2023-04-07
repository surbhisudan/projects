const arr=[
    {book:"book1",author:"author1",year:1995},
    {book:"book2",author:"author2",year:2005},
    {book:"book3",author:"author3",year:2007},
    {book:"book4",author:"author4",year:2011},
    {book:"book5",author:"author5",year:2010}
]

const newarr=arr.filter((arr)=>{
    if(arr.year<2010){
        arr.author=arr.author.toUpperCase()
        return arr
    }
})

console.log(newarr)