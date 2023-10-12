// Task 5
let num = parseInt(prompt("Reqem daxil edin :"))

if(num>0)
{
    if(num<100){
        console.log("Bu eded 1-100 araliqindadi");
    }

}else if (num<0) {
    console.log("Daxil edddiyiniz eded menfidir musbet eded daxil edin")
}else {
    console.log("Daxil eddiyiniz eded ya 0 dir yada  100den boyukdur daxil olunmali eded :1-100 araliqiid");
}