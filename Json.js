var obj1={name:"person 1",age:5};
var obj2={age:5,name:"person 1"};
var arr=[obj1,obj2];
for(i=0;i<arr.length;i++){
    var a=arr[i];
    for(j=0;j<arr.length;j++){
        var b=arr[i];
        if(a.name==b.name){
            if(a.age==b.age){
                console.log("are equal")

            }
        }
        else{
            console.log("not equal")
        
        }

    }
}