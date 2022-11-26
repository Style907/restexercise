const numbers = [2,3,4,5]
const filterOutOdds = (...arr) => arr.filter((num)=> num %2 === 0)

const findMin = (...nums) =>  nums.reduce((min, num) => { return num < min ? num : min})

function mergeOb(ob1, ob2){
    const newOb = {...ob1, ...ob2}
    return newOb
}

function doubleAndReturnArgs(arr, ...nums){
    newArr =[...arr, ...nums]
    doubledArr = []
    for(let i = 0; i < newArr.length; i++){
        doubledArr.push(newArr[i]*2)

    }
    return doubledArr
}
const removeRandom = items => {
  let idx = Math.floor(Math.random() * items.length);
  return [...items.slice(0, idx), ...items.slice(idx + 1)];
}

const extend = (arr1, arr2) => {const newArr= [...arr1, ...arr2]; return newArr}

const addKeyVal = (obj, key, val) => {const newOb = {...obj}; newOb[key] = val; return newOb}

const removeKey = (obj, key) => { const newOb = {...obj}; delete newOb[key]; return newOb}

const combine = (obj1, obj2)=> {const newOb = {...obj1, ...obj2}; return newOb}

const update = (obj, key, val) => {const newOb = {...obj}; newOb[key] = val; return newOb}