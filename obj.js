
function obj(array) {
    let newArray=[];
    array.forEach(element => {

let data=element.split(",");
let name=data[0].split(" ");
let outPut=`${name[0]}:{second name:${name[1]},age:${data[1]}}`;
newArray.push(outPut)
  })
  return newArray
  ;}
  
  console.log(obj(["Patrick wyne, 30", "lil wyne, 32","Eric mimi, 21","Dodos deck, 21","Alian Dwine, 22","Patrick wyne, 33","Patrick wyne, 100","Patrick wyne, 40"]))