class HashTable{
    constructor(size){
        this.table = new Array(size);
        this.size = size;
    }
    hash(key){
        let total=0;
        for(let i=0;i<key.length;i++){
            total+=key.charCodeAt(i);  
        }
        return total%this.size;
    }
    set(key, value){
        let index = this.hash(key);
        this.table[index] = value;
    }
    
    get(key){
        let index = this.hash(key);
         return this.table[index];
    }
    remove(key){
        let index = this.hash(key);
        this.table[index]=undefined;    
    }
    display(){
        for(let i=0;i<this.size;i++){
            console.log(i, this.table[i]);
        }
    }
}
const hash = new HashTable(30);

hash.set("id",8075);
hash.set("home","manimala");
hash.set("batch", "BCT99");
hash.display();
console.log(" ");
console.log(hash.get("home"));
hash.set("batch", "TVM");
console.log(" ");
hash.display();

