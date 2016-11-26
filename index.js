var Storage = function (key) {

	this.key = key;

	this.saveValue = function (value) {
		var data = JSON.parse(localStorage.getItem(this.key));
		data.push(value);
		return localStorage.setItem(this.key, JSON.stringify(data));
	}

	this.getValue = function () {
		return JSON.parse(localStorage.getItem(this.key));
	}

	this.initialize = function () {
		return localStorage.setItem(this.key, JSON.stringify([])); 
	} 

	this.removeValue = function (value) {
		var findValues  = this.getValue();
		var findIndex = findValues.indexOf(value);
		if (findIndex !== -1) {
			findValues.splice(findIndex, 1)
		    return localStorage.setItem(this.key, JSON.stringify(findValues));
		}
	}

}

// 1 when there are values in the localStorage load and display them on initialize