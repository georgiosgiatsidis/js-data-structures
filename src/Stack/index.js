class Stack {
    constructor(size) {
        this.arr = new Array(size);
        this.capacity = size;
        this.top = -1;
    }

    push(x) {
        if (this.isFull()) {
            throw new Error('Overflow');
        }

        this.arr[++this.top] = x;
    }

    pop() {
        if (this.isEmpty()) {
            throw new Error('Underflow');
        }

        return this.arr[this.top--];
    }

    size() {
        return this.top + 1;
    }

    isEmpty() {
        return this.size() === 0;
    }

    isFull() {
        return this.size() === this.capacity;
    }
}

module.exports = Stack;
