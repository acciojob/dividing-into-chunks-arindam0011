const arr = [1, 2, 3, 4, 1, 0, 2, 2];

const divide = (arr, n) => {
    let sum = 0;
    let st = 0;
    let ans = [];
    for(let i = 0; i <arr.length; i++) {
        sum += arr[i];
        if (sum > n) {
            let sub = arr.slice(st, i);
            ans.push(sub);
            st = i;
            sum = arr[i];
        }
    }
    let sub2= arr.slice(st, arr.length);
    ans.push(sub2);
    return ans;
};

const n = prompt("Enter n: ");
const result = divide(arr, parseInt(n));
alert(JSON.stringify(result));