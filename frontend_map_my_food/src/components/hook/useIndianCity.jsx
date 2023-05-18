import IndiaCity from "../TemporaryData/IndiaCity.json";

const useIndianCitys = (searchWord) => {
  class TrieNode {
    constructor() {
      this.childNode = new Array(26).fill(null);
      this.state = "";
      this.wordCount = 0;
    }
  }

  function insertKey(root, key) {
    let currentNode = root;
    for (let i = 0; i < key.name.length; i++) {
      if (!currentNode.childNode[key.name.charCodeAt(i) - 97]) {
        let newNode = new TrieNode();
        currentNode.childNode[key.name.charCodeAt(i) - 97] = newNode;
      }
      currentNode = currentNode.childNode[key.name.charCodeAt(i) - 97];
    }
    currentNode.wordCount++;
    currentNode.state = " , " + key.state + " , " + "India";
  }

  function finder(root, temp, str) {
    if (temp.length >= 5) return;
    if (root.wordCount > 0) temp.push(str + root.state);
    for (var i = 0; i < 26; i++) {
      if (root.childNode[i] != null) {
        str += String.fromCharCode(i + 97);
        finder(root.childNode[i], temp, str);
        str = str.slice(0, -1);
      }
    }
    return;
  }

  function searchKey(root, key) {
    let currentNode = root;
    var temp = [];
    var str = key;
    for (let i = 0; i < key.length; i++) {
      if (!currentNode.childNode[key.charCodeAt(i) - 97]) {
        return temp;
      }
      currentNode = currentNode.childNode[key.charCodeAt(i) - 97];
    }
    finder(currentNode, temp, str);
    return temp;
  }

  let root = new TrieNode();
  var n = IndiaCity.length;
  for (var i = 0; i < n; i++) {
    insertKey(root, IndiaCity[i]);
  }
  var newIndianCity = searchKey(root, searchWord);
  return { newIndianCity };
};
export default useIndianCitys;
