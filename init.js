const mongoose = require("mongoose");
const Chat = require("./models/chat.js");

main()
.then(() => {
    console.log("Connected Succesfully!!");
    return Chat.insertMany(allchats);
})
.catch((err) => {
    console.err(err);
})

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}

let allchats = [
    {
    from : "neha",
    To : "priya",
    msg : "Send me your exam sheets" ,
    created_at : new Date()
  },
  {
    from : "mohit",
    To : "priya",
    msg : "send the notes" ,
    created_at : new Date()
  },
  {
    from : "neha",
    To : "aayush",
    msg : "teach me js" ,
    created_at : new Date()
  },
  {
    from : "neha",
    To : "tushar",
    msg : "Send me your pages" ,
    created_at : new Date()
  },
];
  
