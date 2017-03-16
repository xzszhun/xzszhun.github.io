var request = indexedDB.open('linksDB',1);
var MYDB = {
  name:'testDB',
  db:null
}
request.onerror = function(err){
  console.log(err)
}
request.onsuccess = function(e){
  MYDB.db = e.target.result;
}
