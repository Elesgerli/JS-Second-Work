let x= parseInt(prompt("X ededini daxil edin:"))
let y= parseInt(prompt("Y ededini daxil edin:"))

let z=(4*x)+(2*y)+4 
let h= (2*x)-y+3
let g=(3*x)+(4*y)+3


if(x>0 && y<0){
    console.log("4x+2y+4="+z)

}
else if(x>0 && y===0) {
    console.log(" 2x-y+3="+h)
}else if(x<0 && y>0) {
    console.log("3x+4y+3="+g)
}
else {
    console.log("yazilan reqemler verilen sertlere uyqun deyil")
}