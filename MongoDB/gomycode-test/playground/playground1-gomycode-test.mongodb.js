use("gomycode-test");

db.users.find()

const session = db.getMongo().startSession()

try{
    session.startTransaction();
    // write your code here
    db.books.insertOne({ title: "1984", author: "George Orwell", genre: "Dystopian", price: 11.99, stock: 6 });    console.log(students);
    
    console.log(db.books.find());
    session.commitTransaction();
}catch(error){
    console.log(error);
    session.abortTransaction()
}finally{
    
    session.endSession()
}



