async function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
async function swap(a,b,arr){
    let left = arr[a]
    let right = arr[b]
    arr[b] = left
    arr[a] = right
    return arr;
}

async function sortRecursion(arr){
    for(let i=0; i<arr.length; i++){
        if( arr[i + 1] < arr[i] ){
            let new_arr = await swap(i, i+1, arr)
            await sortRecursion(new_arr)
        }
    }
    return arr
}

async function sortLoop(arr){
    while (true){
        let isChanged = false
        for(let i=0; i<arr.length; i++){
            if( arr[i + 1] < arr[i] ){
                let left = arr[i]
                let right = arr[i + 1]
                arr[i] = right
                arr[i+1] = left
                isChanged = true
            }
        }
        if( !isChanged ){
            break;
        }   
    }

    return arr
}

(async() => {
    let arr1 = []
    let arr2 = []

    for( let n = 0; n <= 1000; n++){
        let rand = await getRandomInt(1, 1000)
        arr1.push(rand)
        arr2.push(rand)
    }

    let past, now;

    past = Date.now()
    await sortLoop(arr1)
    now = Date.now() - past
    console.log(`Insertion Sort Using Loop (ms) ${ now }`)

    past = Date.now()
    await sortRecursion(arr2)
    now = Date.now() - past
    console.log(`Insertion Sort Using Recursion (ms) ${ now }`)
})();