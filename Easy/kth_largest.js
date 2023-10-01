
// GPT ans 

class KthLargest {
    constructor(k, nums) {
        this.k = k;
        this.minHeap = [];
        for (const num of nums) {
            this.add(num);
        }
    }

    add(val) {
        if (this.minHeap.length < this.k) {
            this.minHeap.push(val);
            this.minHeap.sort((a, b) => a - b);
        } else if (val > this.minHeap[0]) {
            this.minHeap.shift();
            this.minHeap.push(val);
            this.minHeap.sort((a, b) => a - b);
        }
        return this.minHeap[0];
    }
}

// Example usage
const kthLargest = new KthLargest(3, [4, 5, 8, 2]);
console.log(kthLargest.add(3));  // Output: 4
console.log(kthLargest.add(5));  // Output: 5
console.log(kthLargest.add(10));  // Output: 5
console.log(kthLargest.add(9));  // Output: 8
console.log(kthLargest.add(4));  // Output: 8



// Design a class to find the kth largest element in a stream. Note that it is the kth largest element in the sorted order, not the kth distinct element.

// Implement KthLargest class:

// KthLargest(int k, int[] nums) Initializes the object with the integer k and the stream of integers nums.
// int add(int val) Appends the integer val to the stream and returns the element representing the kth largest element in the stream.
 

// Example 1:

// Input
// ["KthLargest", "add", "add", "add", "add", "add"]
// [[3, [4, 5, 8, 2]], [3], [5], [10], [9], [4]]
// Output
// [null, 4, 5, 5, 8, 8]

// Explanation
// KthLargest kthLargest = new KthLargest(3, [4, 5, 8, 2]);
// kthLargest.add(3);   // return 4
// kthLargest.add(5);   // return 5
// kthLargest.add(10);  // return 5
// kthLargest.add(9);   // return 8
// kthLargest.add(4);   // return 8


