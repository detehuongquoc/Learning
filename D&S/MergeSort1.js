const mergeUnsortedArrs = (left, right) => {
  // *** các phần tử cần được sắp xếp lại sẽ được chứa ở đây
  const sortedItems = [];

  /*
       *** Chúng ta sẽ dùng method shift của Array để loại bỏ các phần tử của 2 mảng left và right
           trong từng vòng lặp. Nên, nếu 1 trong 2 mảng left và right là mảng trống => ta khg thể
           và cũng khg cần phải so sánh thêm nữa,
    */
  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      sortedItems.push(left.shift());
    } else {
      sortedItems.push(right.shift());
    }
  }

  // *** kết hợp (merge) các cặp mảng con đã được sắp xếp lại với nhau thành một mảng mới,
  return [...sortedItems, ...left, ...right];
};
const mergeSort = (arr) => {
  // *** Chúng ta sẽ không chia arr ra thành các mảng con nữa nếu arr chỉ có 1 phần tử
  if (arr.length <= 1) return arr;

  // *** vì splice sẽ thay đổi giá trị của arr nên mình copy arr để giữ nguyên giá trị ban đầu của nó
  const right = [...arr];

  // *** chia đôi mảng ra thành 2 mảng con
  const middlePoint = arr.length / 2;
  const left = right.splice(0, middlePoint);
  console.log(left, right);
  // *** tiếp tục chia các mảng con ra thành các mảng con
  return mergeUnsortedArrs(mergeSort(left), mergeSort(right));
};

const arr = [38, 27, 43, 3, 9, 82, 10];
console.log(mergeSort(arr)); // *** => [3, 9, 10, 27, 38, 43, 82]

var countSmallerMergeSort = function (nums) {
  if (nums.length == 0 || !nums) return nums;

  let inversion = new Array(nums.length).fill(0);
  let map = nums.map((val, index) => {
    return { val: val, index: index };
  });

  var merge = function (arr) {
    if (arr.length == 1) {
      return arr;
    }
    let mid = Math.floor(arr.length / 2);
    let left = merge(arr.slice(0, mid));
    let right = merge(arr.slice(mid));

    let li = 0,
      ri = 0,
      inversionCount = 0,
      sorted = [];
    // compare numbers from left part to right part
    while (li < left.length) {
      if (right[ri] && left[li].val > right[ri].val) {
        // inversion found
        inversionCount++;
        sorted.push(right[ri++]);
      } else {
        // no inversions for this number (or right is exhausted)
        // update its inversion count up to the current stack
        inversion[left[li].index] += inversionCount;
        sorted.push(left[li++]);
      }
    }

    // deal with left over right values and return
    return [...sorted, ...right.slice(ri)];
  };

  merge(map);
  return inversion;
};
