function lowerCaseWords(array){
    const promise = new Promise((resolve, reject) => {
        if (Array.isArray(array)){
            const filteredArray = array.filter(s => typeof s === "string")
            const lowerCased = filteredArray.map((each) => each.toLowerCase())
            resolve(lowerCased)
        }else{
            reject("That is not an array")
        }
    })

    return promise

}

const mixedArray = ['PIZZA', 10, true, 25, false, 'Wings']

lowerCaseWords(mixedArray).then((result) => {
    console.log(result)
}).catch((err) => {
    console.log("Error: ", err)
})