function EmptyBoxes(arr) {
    let count = 0; // 
    let n = arr.length;

    
    let nonZeroIndex = 0;
    for (let i = 0; i < n; i++) {
        if (arr[i] !== 0) {
            arr[nonZeroIndex++] = arr[i];
        } else {
            count++; 
        }
    }

    
    for (let i = nonZeroIndex; i < n; i++) {
        arr[i] = 0;
    }

    return {
        modifiedArray: arr,
        emptyBoxCount: count
    };
}


let boxes = [1, 0, 2, 0, 3, 4, 0, 5];
let result = EmptyBoxes(boxes);
console.log(result.modifiedArray); 
console.log("Count of empty boxes:", result.emptyBoxCount); 
