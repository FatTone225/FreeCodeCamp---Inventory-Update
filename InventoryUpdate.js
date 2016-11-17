/*jshint esversion: 6 */
function updateInventory(arr1, arr2){

 function updateItems() {  
    var newItem = true;                     //Assume each item is new.
    for (var i = 0; i < arr2.length; i++) { //for each item in the new items list,
      for (var entry in arr1) {             //Check against each item in current inventory.
        if(arr2[i][1] == arr1[entry][1]) {  //If there is a match,
          newItem = false;                  //It isn't a new item. Mark it as a match.
          arr1[entry][0] += arr2[i][0];     //Update the inventory amount.                            
        } else {                            //If it isn't a match,
          continue;                         //continue checking.
        }
      }//This ends the loop over the current inventory
      
      if(newItem === true) { //If there was no match,
        arr1.push(arr2[i]);  //Push the new item to the inventory array.
      } else {               //Otherwise,
        newItem = true;      //Assume the next item is new.
      }          
    }//This ends the loop over the new items.  
  }//function updateItems
  
  updateItems();
  arr1.sort(function(a, b) { //Sort the inventory.
    var itemA = a[1];
    var itemB = b[1];
    
    if (itemA < itemB) {
      return -1;
    } else if (itemA > itemB) {
      return 1;
    } else {
      return 0;
    }
  });
  
  return arr1;

}

// Example inventory lists
var curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
];

var newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
];

updateInventory(curInv, newInv);