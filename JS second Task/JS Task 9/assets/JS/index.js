// Task 9

let saat= parseInt(prompt("Saat daxil edin"))


if(saat>=0)
{
    if(saat<=24){
        if(saat>=6 && saat<=12)
        {
            console.log("Sabahiniz xeyr")
        }else if(saat>=13 && saat<=21) {
            console.log("Gunortaniz  xeyr")
        }else {
            console.log("Axsamvuz xeyr")
        }
    }


}else {
    console.log("Musbet eded daxil edin")
}