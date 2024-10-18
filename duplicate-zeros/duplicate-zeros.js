/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */

//Input: arr = [1,0,2,3,0,4,5,0] 8
//Output: [1,0,0,2,3,0,0,4]

var duplicateZeros = function(arr) { 
    let zerosToDuplicate = 0; 
    let length = arr.length - 1; //7

    length - zerosToDuplicate //  6 5
    
    // Step 1: Count zeros to be duplicated 1 0 2 3 0 4 5 
    for (let i = 0; i <= length - zerosToDuplicate; i++) { //1,2 3 4 5 6
        if (arr[i] === 0) { 
            // Check if the zero is at the edge
            if (i === length - zerosToDuplicate) {
                // Place a zero at the end of the array
                arr[length] = 0;
                length -= 1;
                break;
            }
            zerosToDuplicate++;//1 2
        }
    }
     // Step 2: Start from the end and duplicate zeros [1,0,0,2,3,0,0,4]
     for (let i = length - zerosToDuplicate; i >= 0; i--) { //5 4 3 2 1
        if (arr[i] === 0) {  
            // Duplicate zero
            arr[i + zerosToDuplicate] = 0; //6 2
            zerosToDuplicate--;  1
            arr[i + zerosToDuplicate] = 0;
        } else {
            // Shift the element
            arr[i + zerosToDuplicate] = arr[i]; //5+2 3+1 2+1 
        }
    }

}