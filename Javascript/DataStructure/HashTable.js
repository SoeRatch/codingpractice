function NaiveDict(){
	this.keys=[]
	this.values=[]
}

NaiveDict.prototype.set = function(key,value){
	this.keys.push(key);
	this.values.push(value);
}

NaiveDict.prototype.get = function(lookupKey){
	for(let i=0;i<this.keys.length;i++){
		let key = this.keys[i];
		if(key === lookupKey){
			return this.values[i];
		}
	}
}


function HashTable(){
	this.bucketCount = 100000;
	this.buckets = [];
	for(let i=0; i<this.bucketCount;i++){
		this.buckets.push(new NaiveDict())
	}
}


HashTable.prototype.hashFunction = function(key){
	var hash = 0;
	for(let i=0;i<key.length;i++){
		/* good
		hash=hash+key.charCodeAt(i)
		*/

		/* better
		hash=hash+key.charCodeAt(i)*i
		*/

		//best
		hash = (hash<<5) - hash;   //This operator shifts the first operand the specified number of bits to the left. and then subtracts it
        hash = hash + key.charCodeAt(i);
        hash = hash & hash; // Convert to 32bit integer

	}
	return hash;
}

HashTable.prototype.getBucketIndex = function(key){
	return this.hashFunction(key)%this.bucketCount;
}

HashTable.prototype.getBucket = function(key){
	return this.buckets[this.getBucketIndex(key)];
}

HashTable.prototype.set = function(key,value){
	this.getBucket(key).set(key,value);
}

HashTable.prototype.get = function(lookupKey){
	return this.getBucket(lookupKey).get(lookupKey);
}



function makeid(){
  var text = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  for (var i = 0; i < 5; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  return text;
}

var dict = new HashTable();
var keys=[];
var values=[];
for(let i=0;i<100000;i++){
	keys.push(makeid());
	values.push(Math.random());
}
console.time("SET");
for (let i=0;i<keys.length;i++){
	dict.set(keys[i],values[i]);
}
console.timeEnd("SET");

console.time("GET");
for(let i=0;i<keys.length;i++){
	var val = dict.get(keys[i]);
}
console.timeEnd("GET");








