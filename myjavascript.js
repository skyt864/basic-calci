let history = document.getElementById('history-value');
let output = document.getElementById('output-value');
let keypad = document.getElementById('keyboard');

let historyValue = '';
let temp = '';
let opr = '';
let result = '';

keypad.addEventListener('click',function(e){
	if (e.target.className === 'number') {
		temp += e.target.innerText;
		output.innerText = temp;
	} else if (e.target.className === 'operator' && temp !== '' && e.target.id !== 'clear') {
		if (opr !== '') {
			result = calculate(opr);
			output.innerText = result;
			opr = e.target.innerText;
			temp = '';
		} else {
			opr = e.target.innerText;
			if (result === '') {
				result = temp;	
			}
			temp = '';
		}
	} else {
		historyValue = '';
		temp = '';
		opr = '';
		result = '';
		output.innerText = result;
	}
	console.log('temp : '+temp);
	console.log('opr : '+opr);
	console.log('result : '+result);
});

function calculate(opr) {
	switch(opr) {
		case '+' : return (Number(result) + Number(temp));
		case '-' : return (Number(result) - Number(temp));
		case '*' : return (Number(result) * Number(temp));
		case '/' : return (Number(result) / Number(temp));
		case '%' : return ((Number(result) * Number(temp))/100);
		default: return '0';