function findErrorNums(nums) {
    const n = nums.length;
    const countMap = new Map();
  
    let duplicate;
    let missing;
  
    for (let i = 0; i < n; i++) {
      const num = nums[i];
  
      // Find the duplicate number
      if (countMap.has(num)) {
        duplicate = num;
      } else {
        countMap.set(num, 1);
      }
    }
  
    // Find the missing number
    for (let i = 1; i <= n; i++) {
      if (!countMap.has(i)) {
        missing = i;
        break;
      }
    }
  
    return [duplicate, missing];
  }
  
  // Example usage:
  const nums = [1, 2, 2, 4];
  const result = findErrorNums(nums);
  console.log(result); // Output: [2, 3]
  