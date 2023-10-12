// Task 8

let num = parseInt(prompt("Yasi daxil edin :"))
if(num>=0){
    if(num<130){



        if(num<18){
            console.log("Yeniyetme")
        }else if(num>=18 &&num<=64){
            console.log("Yetkin")
        }else {
            console.log("Yasli")
        }


    }else {
        console.log("Yazdiqiniz yas dogru deil")
    }

}else {
    console.log("Musbet eded daxil edin")
}