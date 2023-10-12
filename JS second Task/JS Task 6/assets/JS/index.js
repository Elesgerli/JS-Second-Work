// Task 6

let num1 = parseInt(prompt("Reqem daxil edin :"))
let num2 = parseInt(prompt("Reqem daxil edin :"))
let num3 = parseInt(prompt("Reqem daxil edin :"))


if(num1>0 && num2>0 && num3>0){
  if(num1>num2 && num1>num3 ){
    console.log("En boyuk eded birinci ededdir")
  }else  if(num2>num1 && num2>num3 ){
    console.log("En boyuk ikinci ededdir")
  }else {
    console.log("En boyuk ucuncu ededdir")
  }
}else{
    console.log("Bu eded menfidir musbet eded daxil edin" )
}