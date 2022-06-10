// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// Parameters: two inputs, array of integers (nums) and the target integer (target) You may assume that each input would have exactly one solution, and you may not use the same element twice.
// Return: indices of two numbers that add up to target
// Example: input - twoSum([2, 5, 11, 7], 9) return - [0, 3]
// Pseudo Code:


let twoSum = (nums, target) => {
    // create a hashmap called visited that will hold elements already checked and their indices as key value pairs
    const visited = new Map()

    for(let i = 0; i < nums.length; i++){
        // subtracting current number from the target number provides the second number needed to reach the target, stored in a variable called compliment
        const compliment = target - nums[i]
        // checks to see if the compliment number exists inside the hashmap
        if(visited.has(compliment)){
            // once compliment number is found inside hashmap the function will return an array containing the indices of each number
            return [visited.get(compliment), i]
        }
        // if compliment number is not found inside hashmap then the number and its index are stored in hashmap as key:value pair
        visited.set(nums[i], i)
    }
};

twoSum([2, 5, 11, 7], 9)