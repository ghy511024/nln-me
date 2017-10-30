function ListNode(val) {
    this.val = val;
    this.next = null;
}

var n1 = new ListNode(1)
// var n2 = new ListNode(4)
// var n3 = new ListNode(3)

var m1 = new ListNode(5)
var m2 = new ListNode(6)
var m3 = new ListNode(8)
// n1.next = n2;
// n2.next = n3;
m1.next = m2;
m2.next = m3;

var addTwoNumbers = function (l1, l2) {
    var tmp1 = l1, tmp2 = l2,x = 0,head = null,bottom = null;
    while (tmp1 || tmp2) {
        var t1 = 0, t2 = 0;
        if (tmp1 != null) {
            t1 = tmp1.val;
            tmp1 = tmp1.next;
        }
        if (tmp2 != null) {
            t2 = tmp2.val;
            tmp2 = tmp2.next;
        }
        var tmp3 = new ListNode(t1 + t2);
        tmp3.val += x;
        var b = tmp3.val >= 10 ? 1 : 0;
        tmp3.val %= 10;
        x = b;
        if (head == null) {
            head = tmp3;
            bottom = tmp3;
        } else {
            bottom.next = tmp3;
            bottom = tmp3;
        }

    }
    if (x > 0) {
        var tmp4 = new ListNode(x);
        bottom.next = tmp4;
    }
    return head;
};
var t = +new Date();
var head = addTwoNumbers(n1, m1);
console.log((+new Date() - t), "........")
while (head) {
    console.log(head.val);
    head = head.next;
}