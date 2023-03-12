class NumArray {
  constructor(arr) {
    this.nums = arr;
    this.n = arr.length;
    this.segTree = new Array(this.n * 2);
    this.build(arr, 1, 0, this.n - 1);
  }
  build(nums, index, left, right) {
    if (left === right) {
      this.segTree[index] = nums[left];
      return;
    } else {
      const mid = Math.floor((left + right) / 2);
      this.build(nums, 2 * index, left, mid);
      this.build(nums, 2 * index + 1, mid + 1, right);
      this.segTree[index] =
        this.segTree[2 * index] + this.segTree[2 * index + 1];
    }
  }
  update(index, value) {
    let [tree, nums] = [this.segTree, this.nums];
    let diff = value - nums[index];
    nums[index] = value;
    helper(1, 0, this.n - 1);
    function helper(pos, l, r) {
      if (index >= l && index <= r) {
        tree[pos] += diff;
        if (l === r) return;
        const mid = Math.floor((l + r) / 2);
        helper(2 * pos + 1, l, mid);
        helper(2 * pos + 2, mid + 1, r);
      }
    }
  }
  sumRange(left, right) {
    const [tree, nums] = [this.segTree, this.nums];
    return helper(1, 0, nums.length - 1);
    function helper(pos, l, r) {
      if (l >= left && r <= right) return tree[pos]; // total overlap
      if (l > right || r < left) return 0; // no overlap
      const mid = Math.floor((l + r) / 2);
      return helper(2 * pos + 1, l, mid) + helper(2 * pos + 2, mid + 1, r);
    }
  }
}
let seg = new NumArray([1, 3, 5]);
console.log(seg.segTree);
