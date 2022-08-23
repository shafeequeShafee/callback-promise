/////////////////////// then catch ////////////////////////////


const getTotal = (numlist) => {
    ///promise solve cheyyum allekil ath reject cheyyum // out therum allekil oru error therrum

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (numlist.length == 0) {
                // callback(null, new Error("the array is empty"))
                reject(new Error("the array is empty"))
            }
            else {
                var total = numlist.reduce((a, b) => a + b, 0)
                // callback(total, null)
                resolve({   // ethintae koodae verae parametersum koodi pass cheyyannekil
                    total: total,
                    name: 'sfq'
                })
            }
        }, 3000)

    })

}

const average = (total, num) => {
    return new Promise((resolve, reject) => {
        var avg = total / num;
        resolve(avg)
    })
}


const numlist = [2, 3, 6]
var total = getTotal(numlist).then((response) => {
    console.log("total", response.total, `,name:${response.name}`)
    average(response.total, 3).then((response) => {
        console.log(`average= ${response}`)
    }).catch(e => {
        console.log(e.message)
    })

}).catch(e => {
    console.log(e.message)
})