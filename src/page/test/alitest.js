function Node(data) {
    this.data = data;
    this.next = null;
}

Node.prototype.getNext = function () {
    return this.next;
}

function ListNode() {
    this.head = null;
    this.foot = null;
}

ListNode.prototype.addFirst = function (node) {

    node.next = this.head;
    this.head = node;
    if (this.foot == null) {
        this.foot = this.head
    }

}
ListNode.prototype.addLast = function (node) {
    if (this.foot == null) {
        this.foot = node;
    }
    else {
        this.foot.next = node;
        this.foot = node;
    }
    if (this.head == null) {
        this.head = this.foot
    }
}
ListNode.prototype.getHead = function () {
    return this.head;
}

//
function test() {
    console.log("=====第一题合并两个有序链表============")
    var list1 = new ListNode();
    var list2 = new ListNode();
    var array1 = [2, 3, 5, 6, 9, 18];
    var array2 = [3, 4, 7, 9, 10, 12];
    // 构造链表
    for (var i = 0; i < array1.length; i++) {
        var node = new Node(array1[i]);
        list1.addLast(node)
    }
    for (var j = 0; j < array2.length; j++) {
        var node = new Node(array2[j]);
        list2.addLast(node)
    }

    // 面试第一题，合并两个有序链表
    var head1 = list1.getHead();
    var head2 = list2.getHead();
    var list3 = new ListNode();
    while (head1 || head2) {
        var d1 = head1 ? head1.data : null;
        var d2 = head2 ? head2.data : null;
        if (d1 && d2) {
            if (d1 > d2) {
                list3.addLast(new Node(d2));
                head2 = head2.getNext();
            } else {
                list3.addLast(new Node(d1));
                head1 = head1.getNext();
            }
        } else if (d1) {
            list3.addLast(new Node(d1));
            head1 = head1.getNext();
        } else {
            list3.addLast(new Node(d2));
            head2 = head2.getNext();
        }
    }
    var head3 = list3.getHead();
    while (head3) {
        console.log(head3.data);
        head3 = head3.getNext();
    }
    console.log("===============华丽的分割线 倒叙输出链表==============")
    var head4 = list3.getHead();
    var array4 = [];// 理解为一个栈操作，这儿不写栈的实现了，遍历入栈，倒叙输出则是弹栈
    while (head4) {
        array4.push(head4.data)// 入栈操作
        head4 = head4.getNext();
    }
    var m = array4.pop();
    while (m) {
        console.log(m);// 出栈
        m = array4.pop();
    }
}

test();

//，
function clonetest() {
    Object.prototype.clone = function () {
        var temp = Object.create(this);
        for (var key in this) {
            if (typeof this[key] == "object") {
                if (this[key] instanceof Array) {
                    temp[key] = [];
                    for (var i in this[key]) {
                        if (typeof this[key][i] != "function") {
                            temp[key].push(this[key][i])
                        }
                    }
                }
                else {
                    temp[key] = this[key].clone();
                }

            } else {
                temp[key] = this[key];
            }
        }
        return temp;
    }
    console.log("===============第二题 object clone==============")
    var a = {a: 1, b: [1, 2, 3], c: {d: "", e: [{ss: "sdf"}]}};
    var b = a.clone();
    console.log(a === b);
    console.log(JSON.stringify(a) == JSON.stringify(b));
    console.log(JSON.stringify(a));
    console.log(JSON.stringify(b));

}

clonetest();

// 快排

var qsort = function (array) {
    if (array.length <= 1) {
        return array;
    }
    var pivotIndex = Math.floor(array.length / 2);//取半
    var pivot = array.splice(pivotIndex, 1)[0];
    var tmpleft = [];
    var tmpright = [];
    for (var i = 0; i < array.length; i++) {
        if (array[i] < pivot) {
            tmpleft.push(array[i]);
        } else {
            tmpright.push(array[i]);
        }
    }
    return qsort(tmpleft).concat([pivot], qsort(tmpright));
};
console.log("=================第三题 快排===================")
console.log(qsort([3, 7, 4, 9, -1, 20]));

// 继承
// 继承工具类，章鱼工具tool函数底层实现，此方法无法继承 构造器方法。所以要实现构造器，需要在子类中写额外代码。
function ext(subClass, superClass) {
    function o() {
        this.constructor = subClass;
    }

    o.prototype = superClass.prototype;
    return (subClass.prototype = new o())
}

function Parent(a) {
    this.a = a;
}

function Child() {
    Parent.call(this);// 重定向 new 出来的prototype 指针问题。第二个作用是，super 父类构造器方法（）
}

ext(Child, Parent);// 实现继承prototype 属性。（工具类中还没想好怎么实现 ，Parent.call(this) 这种，所以工具类不太完美，Parent.call(this) 这种写法像补丁）
var m = new Child();
console.log("==================继承==============")
console.log(m instanceof Parent);
console.log(m instanceof Child);
console.log(m.constructor);

console.log("==================第6题闭包计数器==============")

var count = (function () {
    var c = 0;
    return function () {
        return c += 1;
    }
})();
console.log(count())
console.log(count())
console.log(count())
console.log(count())
console.log(count())

