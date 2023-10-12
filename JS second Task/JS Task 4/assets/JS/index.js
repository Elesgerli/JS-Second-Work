// Task 4

let num1 = parseInt(prompt("Reqem daxil edin :"))
let num2 = parseInt(prompt("Reqem daxil edin :"))
let nums=num1*num2
if(num1>0 && num2>0  || num1<0 && num2<0){
    console.log("Bu ededlerin hasili musbetdir" + " " +nums )
}else{
    console.log("Bu ededlerin hasili menfidir" + " " +nums )
}