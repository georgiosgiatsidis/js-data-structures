class Queue {
    constructor(size) {
        this.data = [];
        this.rear = 0;
        this.size = size || 10;
    }

    enqueue(element) {
        if (this.rear < this.size) {
            this.data[this.rear] = element;
            this.rear = this.rear + 1;
        }
    }
    length() {
        return this.rear;
    }
    isEmpty() {
        return this.rear === 0;
    }
    getFront() {
        if (!this.isEmpty()) {
            return this.data[0];
        }
    }
    getLast() {
        if (!this.isEmpty()) {
            return this.data[this.rear - 1];
        }
    }
    dequeue() {
        if (!this.isEmpty()) {
            this.rear = this.rear - 1;
            return this.data.shift();
        }
    }
    print() {
        for (let i = 0; i < this.rear; i++) {
            console.log(this.data[i]);
        }
    }
    clear() {
        this.data.length = 0;
        this.rear = 0;
    }
}

module.exports = Queue;
