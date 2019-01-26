// var bigdata = [];

// function storage(){
// 	var storef = document.getElementById('fname'),
// 		storeIT = document.getElementById('subject'), 
// 		storeI = document.getElementById('desc'),
// 		storeA = document.getElementById('workers'),
// 		date1 = new Date(),
// 		date = date1.toUTCString(),
// 		gettingID = document.getElementById('fname').value,
// 	 	gettingPhone = document.getElementById('Phone').value,
// 	 	nameId = gettingID.slice(0,2),
// 	 	phoneID = gettingPhone.slice(4,9),
// 	 	issId = nameId + phoneID;


// 	localStorage.setItem('store1', storef.value);
//  	localStorage.setItem('store2', storeIT.value);
//  	localStorage.setItem('store3', storeI.value);
//  	localStorage.setItem('store4', issId);
//  	localStorage.setItem('store5', date);
//  	localStorage.setItem('store6', storeA.value);

//  	var data = [localStorage.getItem('store1'),
//  				localStorage.getItem('store2'),
//  				localStorage.getItem('store3'), 
//  				localStorage.getItem('store4'), 
//  				localStorage.getItem('store5'), 
//  				localStorage.getItem('store6')];

//  	localStorage.setItem('data', JSON.stringify(data));

//  	bigdata.push(JSON.parse(localStorage.getItem('data')));

// 	localStorage.setItem('bigdata', JSON.stringify(bigdata));

// 	window.alert("Succesfully Saved (" + date + ")");
// }


// function transfer(){ 
// 	var array = JSON.parse(localStorage.getItem('bigdata')),
// 		table = document.getElementById('table');
	
// 	for(var i = 0; i < array.length; i++){

// 		var newRow = table.insertRow(table.length);
// 		for(var j = 0; j < 6; j++){

// 			var cell = newRow.insertCell(j);
// 			cell.innerHTML = array[i][j];
// 		}
		
		
// 	}
// }



var bigdata = [];



function storage(){
	var prevData = JSON.parse(localStorage.getItem('bigdata'));

	prevData != null ? bigdata = prevData : '';

	var storef = document.getElementById('fname'),
		storeIT = document.getElementById('subject'), 
		storeI = document.getElementById('desc'),
		storeA = document.getElementById('workers'),
		date1 = new Date(),
		date = date1.toUTCString(),
		gettingID = document.getElementById('fname').value,
	 	gettingPhone = document.getElementById('Phone').value,
	 	nameId = gettingID.slice(0,2),
	 	phoneID = gettingPhone.slice(4,9),
	 	issId = nameId + phoneID,
	 	data = [storef.value,issId,date,storeIT.value,storeI.value,storeA.value];
	
	bigdata.push(data);

	localStorage.setItem('bigdata', JSON.stringify(bigdata));

	window.alert("Succesfully Saved (" + date + ")");
}

function transfer(){ 
	var array = JSON.parse(localStorage.getItem('bigdata')),
		table = document.getElementById('table');
	
	for(var i = 0; i < array.length; i++){

		var newRow = table.insertRow(table.length);
		for(var j = 0; j < 6; j++){

			var cell = newRow.insertCell(j);
			cell.innerHTML = array[i][j];
		}
	}
}

// var data = [];

// function storage(){
// 	console.log(localStorage.length); 
// 	var storef = document.getElementById('fname'),
// 		storeIT = document.getElementById('subject'), 
// 		storeI = document.getElementById('desc'),
// 		storeA = document.getElementById('workers'),
// 		date1 = new Date(),
// 		date = date1.toUTCString(),
// 		gettingID = document.getElementById('fname').value,
// 	 	gettingPhone = document.getElementById('Phone').value,
// 	 	nameId = gettingID.slice(0,2),
// 	 	phoneID = gettingPhone.slice(4,9),
// 	 	issId = nameId + phoneID;


// 	data.push(storef.value,storeIT.value,storeI.value,storeA.value,date,issId);

// 	localStorage.setItem('data', data);

// 	window.alert("Succesfully Saved (" + date + ")");

// }


// var data = [],
// 	bigdata = [];

// function storage(){
// 	// console.log(localStorage.length); 
// 	var storef = document.getElementById('fname'),
// 		storeIT = document.getElementById('subject'), 
// 		storeI = document.getElementById('desc'),
// 		storeA = document.getElementById('workers'),
// 		date1 = new Date(),
// 		date = date1.toUTCString(),
// 		gettingID = document.getElementById('fname').value,
// 	 	gettingPhone = document.getElementById('Phone').value,
// 	 	nameId = gettingID.slice(0,2),
// 	 	phoneID = gettingPhone.slice(4,9),
// 	 	issId = nameId + phoneID;

// 	data.push(storef.value); 
// 	data.push(storeIT.value);
// 	data.push(storeI.value);
// 	data.push(storeA.value);
// 	data.push(date);
// 	data.push(issId);
// 	bigdata.push(data);


// 	localStorage.setItem('bigdata', JSON.stringify(bigdata));

// 	window.alert("Succesfully Saved (" + date + ")");

// }


// function transfer(){
// 	var array = localStorage.getItem('bigdata'),
// 		table = document.getElementById('table');
	
// 	for(var i = 1; i < table.rows.length; i++){

// 		for (var j = 0; j < table.rows[i].cells.length; j++) {
			
// 			table.rows[i].cells[j].innerHTML = array[i-1][j];  

// 		}
// 	}
// }


// var rowOfTable = [] 
// 	rowOfTable = '<td>'+localStorage.getItem('store') + '</td>' + '<td>' + localStorage.getItem('subject') + '</td>' + '<td>' + localStorage.getItem('desc') + '</td>' + '<td>' + localStorage.getItem('dates') + '</td>' + '<td>' + localStorage.getItem('codes') + '</td>' + '<td>' + localStorage.getItem('Worker') + '</td>'
// 	tbody.push(rowOfTable)