/* mergeArrays([1,2,3,3,3], [1,4,5,2]) // should return [1,2,3,4,5] */

const arrays = [[1,2,3,3,3], [1,4,5,2]]

/* function mergeArrays(arrays) {
    let jointArray = [];
    arrays.forEach(array => jointArray = [...jointArray, ...array])
  // return [...new Set(jointArray)] 
    return Array.from(new Set(jointArray))
} */

/* function mergeArrays(arrays) {
    let jointArray = []
    arrays.forEach(array => jointArray = [...jointArray, ...array])
    const uniqueArray = jointArray.filter((item, index) => jointArray.indexOf(item) === index;
    return uniqueArray
}
 */

function mergeArrays(arrays) {
    let jointArray = []

    arrays.forEach(array => {
        jointArray = [...jointArray, ...array]
    })
    
    const uniqueArray = jointArray.reduce((newArray, item) =>{
        if (newArray.includes(item)){
            return newArray
        } else {
            return [...newArray, item]
        }
    }, [])
    return uniqueArray
}

console.log(mergeArrays(arrays))