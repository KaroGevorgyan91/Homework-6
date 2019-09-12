/* Task 1 function for binar search 

function binarSearch(arr, element, start = 0, end = arr.length - 1) {
  let mid = Math.floor((start + end) / 2);

  if (arr[mid] === element) {
    return mid;
  }

  if (arr[mid] > element) {
    return binarSearch(arr, element, start, mid - 1);
  }
  else {

    return binarSearch(arr, element, mid + 1, end);
  }


}

let arr = [1, 3, 5, 7, 8, 9, 12, 23, 45];
let element = 12;
console.log(binarSearch(arr, element))

*/
/* Task 2 subarrays with n length
function giveSubsets(arr, num) {
  var subSets;
  if (num > arr.length || num <= 0) {
    return [];
  }
  if (num === arr.length) {
    return [arr];
  }
  if (num === 1) {
    subSets = [];
    for (var i = 0; i < arr.length; i++) {
      subSets.push([arr[i]]);
    }
    return subSets;
  }
  subSets = [];
  for (var i = 0; i < arr.length - num + 1; i++) {
    var elements = arr.slice(i, i + 1); //ուզում եմ ստեղ հավաքվի միայն տվյալ էլեմենտը մեր սկզբնական առայի 
    var shortSets = giveSubsets(arr.slice(i + 1), num - 1); //սրանով էլ ամեն մի num-1 կոմբինացիայի համար միացնում ենք նախորդին ու տանում սթոր անում գիվսուբսեթսում
    for (var j = 0; j < shortSets.length; j++) {
      subSets.push(elements.concat(shortSets[j]))
    }
  }
  return subSets;
}
console.log(giveSubsets([1, 2, 3, 4], 3))
*/