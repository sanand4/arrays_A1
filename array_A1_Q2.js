function removeElement(nums, val) {
  let k = 0; // Count of elements not equal to val

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[k] = nums[i]; // Move the element to the front of the array
      k++; // Increment count
    }
  }

  return k;
}

// Example usage:
const nums = [3, 2, 2, 3];
const val = 3;
const k = removeElement(nums, val);
console.log(k); // Output: 2
console.log(nums); // Output: [2, 2, _, _] (underscore represents irrelevant elements)
