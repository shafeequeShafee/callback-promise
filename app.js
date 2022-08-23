/////////////////  CallBack //////////////////
const getTotal = (numlist, callback) => {
    setTimeout(() => {
        console.log("c")
        var total = numlist.reduce((a, b) => a + b, 0)
        callback(total)
    }, 3000)

}
var total = getTotal([20, 30, 40], (total) => {
    console.log("getTotal", total)
})


/////////////// CallBack ///////////////////////

const calculateTotal = (numlist, callback) => {
    setTimeout(() => {
        if (numlist.length == 0) {
            callback(null, new Error("the array is empty"))
        }
        else {
            var total = numlist.reduce((a, b) => a + b, 0)
            callback(total, null)
        }
    }, 3000)

}
var total = calculateTotal([], (response, err) => {
    if (err != null) {
        console.log(err.message)
    }
    else {
        console.log("calculateTotal", response)
    }

})


/////////////////////// CallBack hell////////////////////////////


const calculateTotalNew = (numlist, callback) => {
    setTimeout(() => {
        if (numlist.length == 0) {
            callback(null, new Error("the array is empty"))
        }
        else {
            var total = numlist.reduce((a, b) => a + b, 0)
            callback(total, null)
        }
    }, 3000)

}

const average = (total, num, callback) => {
    var avg = total / num;
    callback(avg)
}


const numlist=[2,3,6]
var total = calculateTotalNew(numlist, (response, err) => {
    if (err != null) {
        console.log(err.message)
    }
    else {
        average(response,3,(avg)=>{
            console.log("average", avg)
        })     
    }
})





