const Node = require('./Node');

class LinkedList {
    constructor() {
        this.left = null;
        this.right = null;
    }

    pushLeft(value) {
        const newNode = new Node(value, this.left, null);

        if (this.left) {
            this.left.previous = newNode;
        } else {
            this.right = newNode;
        }

        this.left = newNode;
    }

    pushRight(value) {
        const newNode = new Node(value, null, this.right);

        if (this.right) {
            this.right.next = newNode;
        } else {
            this.left = newNode;
        }

        this.right = newNode;
    }

    removeLeft() {
        if (!this.left) return null;

        const { value } = this.left;
        this.left = this.left.next;

        if (this.left) this.left.previous = null;
        else this.right = null;

        return value;
    }

    removeRight() {
        if (!this.right) return null;

        const { value } = this.right;

        this.right = this.right.previous;

        if (this.right) this.right.next = null;
        else this.left = null;

        return value;
    }

    getFirst() {
        return this.left;
    }

    getLast() {
        return this.right;
    }

    get(index) {
        let node;
        let current = this.left;
        let currentIndex = 0;
        while (current) {
            if (index === currentIndex) {
                return current;
            }
            current = current.next;
            currentIndex ++;
        }
    }

    print() {
        const result = [];
        let current = this.left;
        while (current) {
            result.push(current.value);
            current = current.next;
        }
        console.log(result.join(' -> '));
    }
}

module.exports = LinkedList;
