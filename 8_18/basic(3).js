/*
//객체
var grades = {'kim': 10, 'ju': 6,'ha':50};
//kim은 key 10은 val
grades.kim
//값 가져오기

//객체와 반복문
var grades = {'egoing': 10, 'k8805': 6, 'sorialgi': 80};
for(key in grades) {
    document.write("key : "+key+" value : "+grades[key]+"<br />");
}
var grades = {
    'list' : {'kim': 10, 'ju': 8,'ha' : 34},
    'show' : function(){
        for(var name in this.list){
            console.log(name, this.list[name]);
        }
    
    }
}
grades.show();
*/

