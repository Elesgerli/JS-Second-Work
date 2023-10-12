// Task 2

let num = parseInt(prompt("Reqem daxil edin :"))

if(num>0){

    if(num%3===0 && num%5===0)
    {
        console.log("Bu eded hem 3 hemde 5  e bolune biler")
    }else{

        console.log("Bu eded eyni anda hem 3 e hemde 5e bolune bilmez")
    }


}else {
    console.log("Daxil eddiyiniz eded menfidir zehmet olmasa musbet eded daxil edin")
}