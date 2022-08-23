//////////////  async await  ////////////////////////




const getTotal = (numlist) => {
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


async function Execution() {
    try {
        var numlist = [2,4,6]
        var total = await getTotal(numlist).catch(e => {
            console.log("inner catch", e.message); throw e;   /// athinnae purath kittannekil throw cheyyukkaaa
        })
        var avg= await average(total.total,3).catch(e => {
            throw e;  
        })
        console.log(total.total)
        console.log("avg",avg)
    }
    catch (err) {
        console.log('main catch', err.message)
    }
}

Execution();