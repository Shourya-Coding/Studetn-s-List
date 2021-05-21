list_array = [];

function submit()
{
var name_1 = document.getElementById("student_1").value;
var name_2 = document.getElementById("student_2").value;
var name_3 = document.getElementById("student_3").value;
var name_4 = document.getElementById("student_4").value;

list_array.push(name_1);
list_array.push(name_2);
list_array.push(name_3);
list_array.push(name_4);

console.log(list_array);

document.getElementById("display_name").innerHTML = list_array;
document.getElementById("button_1").style.display = "none";
document.getElementById("button_2").style.display = "inline-block";
}

function sort()
{
    list_array.sort();
    console.log(list_array);
    document.getElementById("display_name").innerHTML = list_array;
}