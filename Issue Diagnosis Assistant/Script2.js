// function storage(){
// 	console.log(localStorage.length); 
// 	var storef = document.getElementById('fname'),
// 		storeIT = document.getElementById('subject'), 
// 		storeI = document.getElementById('desc'); 
// 	localStorage.setItem('store1', storef.value);
// 	localStorage.setItem('subject1', storeIT.value);
// 	localStorage.setItem('desc1', storeI.value);

// 	var date1 = new Date(),
// 		date = date1.toUTCString();

// 	var	gettingID = document.getElementById('lname').value,
// 	 	gettingPhone = document.getElementById('Phone').value,
// 	 	nameId = gettingID.slice(0,2),
// 	 	phoneID = gettingPhone.slice(4,9),
// 	 	IssueId = nameId + phoneID;

// 	localStorage.setItem('dates1', date);
// 	localStorage.setItem('codes1', IssueId);

// 	window.alert("Succesfully Saved (" + date + ")");

// }

function storage(){
	console.log(localStorage.length); 
	var storef = document.getElementById('fname'),
		storeIT = document.getElementById('subject'), 
		storeI = document.getElementById('desc'), 
		len = localStorage.length;
	localStorage.setItem('store' + len, storef.value);
	localStorage.setItem('subject' + len, storeIT.value);
	localStorage.setItem('desc' + len, storeI.value);
	var date1 = new Date(),
		date = date1.toUTCString();

	var	gettingID = document.getElementById('lname').value,
	 	gettingPhone = document.getElementById('Phone').value,
	 	nameId = gettingID.slice(0,2),
	 	phoneID = gettingPhone.slice(4,9),
	 	IssueId = nameId + phoneID;

	localStorage.setItem('dates' + len, date);
	localStorage.setItem('codes' + len, IssueId);

	window.alert("Succesfully Saved (" + date + ")");

}