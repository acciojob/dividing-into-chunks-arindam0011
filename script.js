const arr = [1, 2, 3, 4, 1, 0, 2, 2];

const divide = (arr, n) => {
  // Write your code here
	let sum=0;
	let st=0;
	let ans=[];
	for (let i=0; i<arr.length, i++){
		  sum+=arr[i];
		 if(sum>m){
			 let sub= arr.slice(st,i);
			 ans.push(sub);
			 st=i;
			 sum=0;
		 }
	}
	console.log(ans);
};

const n = prompt("Enter n: ");
alert(JSON.stringify(divide(arr, n)));
