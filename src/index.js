const LinkedList = require('./LinkedList');

const linkedList = new LinkedList();

linkedList.pushLeft(1);
linkedList.pushLeft(2);
linkedList.pushLeft(3);
linkedList.pushLeft(4);
linkedList.pushLeft(5);
linkedList.pushLeft(6);
linkedList.removeRight();
linkedList.removeLeft();

linkedList.print();
