const list1 = [1, 2, 3];
const list2 = ['a', 'b', 'c'];

function zipList(data1, data2) {
  if (data1.length > data2.length || data1.length < data2.length) {
    return null;
  }
  const newList = [];
  for (let i = 0; i < data1.length; i++) {
    newList.push(data1[i]);
    newList.push(data2[i]);
  }
  return newList;
}

function zipListTheSimpleWay(data1, data2) {
  return _.flatten(_.zip(data1, data2));
}

console.log(zipList(list2, list1));
console.log(zipListTheSimpleWay(list2, list1));
