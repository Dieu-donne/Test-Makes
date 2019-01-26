// function transfer(){
// 	var table = document.getElementById('table'), 
// 		newRow =  table.insertRow(table.length),
// 		firstCell = newRow.insertCell(0),
// 		secondCell = newRow.insertCell(1),
// 		thirdCell = newRow.insertCell(2),
// 		fourthCell = newRow.insertCell(3),
// 		fifthCell = newRow.insertCell(4),
// 		fname = localStorage.getItem('store1'),
// 		title = localStorage.getItem('subject1'),
// 		Desc = localStorage.getItem('desc1'),
// 		date2 = localStorage.getItem('dates1'),
// 		code = localStorage.getItem('codes1');


// 	firstCell.innerHTML = fname;
// 	secondCell.innerHTML = code;
// 	thirdCell.innerHTML = date2;
// 	fourthCell.innerHTML = title;
// 	fifthCell.innerHTML = Desc;

// }

function transfer(){

	// var i;
	// for (var i = 1; i < 10; i++) {
	// 	if (i == localStorage.length) {
	// 		i == localStorage.length 
	// 	}
	//  	i == localStorage.length
	//  } 

	var table = document.getElementById('table'), 
		newRow =  table.insertRow(table.length),
		firstCell = newRow.insertCell(0),
		secondCell = newRow.insertCell(1),
		thirdCell = newRow.insertCell(2),
		fourthCell = newRow.insertCell(3),
		fifthCell = newRow.insertCell(4),
		fname = localStorage.getItem('store' + i),
		title = localStorage.getItem('subject' + i),
		Desc = localStorage.getItem('desc' + i),
		date2 = localStorage.getItem('dates' + i),
		code = localStorage.getItem('codes' + i);


	firstCell.innerHTML = fname;
	secondCell.innerHTML = code;
	thirdCell.innerHTML = date2;
	fourthCell.innerHTML = title;
	fifthCell.innerHTML = Desc;
}