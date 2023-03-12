function MergeSort() {}

MergeSort.prototype.sort = function (values) {
  if (values.length < 2) {
    return values;
  }

  var mid = Math.floor(values.length / 2);
  var left = this.sort(values.slice(0, mid));
  var right = this.sort(values.slice(mid, values.length));

  return this.merge(left, right);
};

MergeSort.prototype.merge = function (left, right) {
  var output = [];

  while (left.length > 0 && right.length > 0) {
    if (left[0] > right[0]) {
      output.push(right[0]);
      right.shift();
    } else {
      output.push(left[0]);
      left.shift();
    }
  }

  while (left.length > 0) {
    output.push(left[0]);
    left.shift();
  }

  while (right.length > 0) {
    output.push(right[0]);
    right.shift();
  }

  return output;
};

let sorter = new MergeSort();

console.log(sorter.sort([16, 2, 30, 10, 9]));
