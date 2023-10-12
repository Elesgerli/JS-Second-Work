// Task 3

let num = parseInt(prompt("Reqem daxil edin :"))
let qaliq= num%2
if(num>0){

    if(num%2===0){
        console.log("Bolundu")
    }else if (num%2!==0) {
       console.log("Ededin qaliqi: "+" "+ qaliq)
    }
}
else{
    console.log("Daxil eddiyiniz eded menfidir zehmet olmasa musbet eded daxil edin")
}