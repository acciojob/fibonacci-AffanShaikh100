function fibonacci(num) {
// your code here

	let sum = 0;
	let first = 0;
	let second = 1;

	if(num==1)
	{
		return 0;
	}
	else{
		for(let i=2;i<=num; i++)
			{
				sum = first+second;
				first = second;
				second = sum;	
			}
		return second;
	}
}

module.exports = fibonacci(5);
