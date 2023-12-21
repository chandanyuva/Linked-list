function Node(data = null, next = null) {
    this.data = data;
    this.next = next;
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    prepend(data) {
        this.head = new Node(data, this.head);
        this.size++;
    }

    append(data) {
        let node = new Node(data);
        let current;

        //if empty, make head
        if (this.head === null) {
            this.head = node;
        } else {
            current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = node;
        }
        this.size++;
    }

    lSize() {
        return `Size: ${this.size}`;
    }

    lHead() {
        return this.head ? this.head.data : "empty";
    }

    lTail() {
        if (this.size === 0) {
            return `empty`;
        }
        let current = this.head;
        while (current.next) {
            current = current.next;
        }
        return current.data;
    }
    at(index) {
        if (index >= this.size) {
            return "invaled index";
        }
        let current = this.head;
        let count = 0;
        while (count < index) {
            current = current.next;
            count++;
        }
        return current;
    }

    pop() {
        let current = this.head;
        let previous;
        while (current.next) {
            previous = current;
            current = current.next;
        }
        previous.next = null;
        return current;
    }

    contains(value) {
        if (!value) return false;
        let current = this.head;
        let count = 0;
        while (count < this.size) {
            count++;
            if (current.data == value) {
                return true;
            }
            current = current.next;
        }
        return false;
    }

    print() {
        let current = this.head;
        const lList = [];
        while (current) {
            lList.push(`( ${current.data} )`);
            current = current.next;
        }
        let ll = lList.join(` => `);
        return lList.length === 0 ? "empty" : ll;
    }
}

const l1 = new LinkedList();

l1.prepend(400);
l1.prepend(100);
l1.prepend(200);
l1.prepend(300);

// l1.append(000);

console.log(l1.print());

console.log(l1.lSize());

console.log(l1.lHead());

console.log(l1.lTail());

console.log(l1.at(4));

console.log(l1.pop());

console.log(l1.contains("100"));
