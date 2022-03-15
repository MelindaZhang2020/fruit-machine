
function containsDuplicate (nums) {
    for(let i=0; i<nums.length; i++) {
        console.log(nums[i])
          for(let j=i+1; j<nums.length; j++) {
              //compare the numbers 
            console.log(nums[j])
            if (nums[i] === nums[j]) {
            console.log(true);
            break;
            }
      }
  } 
}
containsDuplicate([1,2,3,1]);