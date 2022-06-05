function reverseArray(array) {
    let res = [];
    for (let i = array.length - 1; i >= 0; i--) {
      res.push(array[i]);
    }
    return res;
  }
  
  function reverseArrayInPlace(array) {
    for (let i = 0; i < Math.floor(array.length / 2); i++) {
      let temp = array[i];
      array[i] = array[array.length - 1 - i];
      array[array.length - 1 - i] = temp;
    }
    return array;
  }
  
  let element = document.getElementById("ReversingAnArray");
  let pTag1 = document.createElement("p");
  let text1 = document.createTextNode(reverseArray(["A", "B", "C"]))
  // → ["C", "B", "A"];
  pTag1.appendChild(text1);
  element.appendChild(pTag1);

  let pTag2 = document.createElement("p");
  let arrayValue = [1, 2, 3, 4, 5];
  reverseArrayInPlace(arrayValue);
  let text2 = document.createTextNode(arrayValue);
  // → [5, 4, 3, 2, 1]
  pTag2.appendChild(text2);
  element.appendChild(pTag2);