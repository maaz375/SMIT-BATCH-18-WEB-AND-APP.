//  nested loop

//  print arr1 elements with both arr2 elements

var arr1 = ['jazz', 'zong', 'warid'];
var arr2 = ['telenor', 'ufone'];

// for (var i = 0; i < arr1.length; i++) {
//     document.write(arr1[i] + "<br>");
//     for (var j = 0; j < arr2.length; j++) {
//         document.write(" - " + arr2[j] + "<br>");
//     }
// }


//  counting

for (var i = 1; i <=100; i = i +10) {
    for (var j = i; j < i + 10; j++) {
        document.writeln(j +  '<br>');
    }
};