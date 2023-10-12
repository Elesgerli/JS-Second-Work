
// Task 7
let num = parseInt(prompt("Reqem daxil edin :"))


if (num > 0) {
    if (num < 100) {


        if (num <= 59) {
            console.log("Sizin Baliniz F qiymeti araliqindadir")
        } else if (num >= 60 && num <= 69) {
            console.log("Sizin Baliniz D qiymeti araliqindadir")

        } else if (num >= 70 && num <= 79) {
            console.log("Sizin Baliniz C qiymeti araliqindadir")

        } else if (num >= 80 && num <= 89) {
            console.log("Sizin Baliniz B qiymeti araliqindadir")

        } else {
            console.log("Sizin Baliniz A qiymeti araliqindadir")

        }


    } else {
        console.log("Bal araliqi 1-100 dur duz reqem daxil edin")
    }

} else if (num === 0) {
    console.log("Bal araliqi 0dan boyukdur ")
}

else {
    console.log("Bu eded menfidir musbet eded daxil edin")
}