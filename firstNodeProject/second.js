// const stu = {
//     name : "Sania",
//     class : "MCA",
//     age: 24,
//     developer : true 
// }
// module.exports= stu;

// const osm = require('os');
// console.log(osm.freemem());
// console.log(osm.uptime());
// console.log(osm.userInfo());
// console.log(osm.version());
// console.log(osm.uptime());
// console.log(osm.type());
const fs = require('fs');

fs.readFile( 'file.txt' , 'utf8', (err , data)=>{
    console.log(err , data)
})
// fs.writeFile('file2.txt' , "This is a data" , () =>{
//     console.log("Written to the file")
// });
// console.log("finished reading file");