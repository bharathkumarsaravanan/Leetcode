// 2. Add Two Numbers

// You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.



var addTwoNumbers = function(l1, l2) {
    let carry = 0;
    let output = new ListNode(0);
    let current = output;

    while (l1 || l2 || carry) {
        let val1 = l1 ? l1.val : 0;
        let val2 = l2 ? l2.val : 0;
        let sum = val1 + val2 + carry;
        current.next = new ListNode(sum % 10);
        current = current.next;
        carry = Math.floor(sum / 10)
        if (l1) l1 = l1.next;
        if (l2) l2 = l2.next;
    }

    return output.next;
};