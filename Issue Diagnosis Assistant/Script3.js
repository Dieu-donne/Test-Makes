
len = localStorage.length;

function storage(){
	console.log(localStorage.length); 
	var storef = document.getElementById('fname'),
		storeIT = document.getElementById('subject'), 
		storeI = document.getElementById('desc'),
		storeA = document.getElementById('workers'); 

	localStorage.setItem('store' + len, storef.value);
	localStorage.setItem('subject' + len, storeIT.value);
	localStorage.setItem('desc' + len, storeI.value);
	localStorage.setItem('Worker' + len, storeA.value);
	var date1 = new Date(),
		date = date1.toUTCString();

	var	gettingID = document.getElementById('fname').value,
	 	gettingPhone = document.getElementById('Phone').value,
	 	nameId = gettingID.slice(0,2),
	 	phoneID = gettingPhone.slice(4,9),
	 	IssueId = nameId + phoneID;

	localStorage.setItem('dates' + len, date);
	localStorage.setItem('codes' + len, IssueId);

	window.alert("Succesfully Saved (" + date + ")");

}



function transfer(){
	var table = document.getElementById('table'),
		newRow =  table.insertRow(table.length),
		firstCell = newRow.insertCell(0),
		secondCell = newRow.insertCell(1),
		thirdCell = newRow.insertCell(2),
		fourthCell = newRow.insertCell(3),
		fifthCell = newRow.insertCell(4),
		sixthCell = newRow.insertCell(5),
		i = (len - 6),
		fname = localStorage.getItem('store' + i),
		title = localStorage.getItem('subject' + i),
		Desc = localStorage.getItem('desc' + i),
		date2 = localStorage.getItem('dates' + i),
		code = localStorage.getItem('codes' + i),
		worker1 = localStorage.getItem('Worker' + i);


	firstCell.innerHTML = fname;
	secondCell.innerHTML = code;
	thirdCell.innerHTML = date2;
	fourthCell.innerHTML = title;
	fifthCell.innerHTML = Desc;
	sixthCell.innerHTML = worker1;
} 