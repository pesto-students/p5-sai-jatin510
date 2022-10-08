function Queue() {
  let stack1 = [];
  let stack2 = [];

  this.enqueue = function (value) {
    if (stack2.length > 0) {
      let len = stack2.length;
      for (let i = 0; i < len; i++) {
        let p = stack2.pop();
        stack1.push(p);
      }
    }
    stack1.push(value);
  };

  this.dequeue = function () {
    if (stack2.length > 0) {
      stack2.pop();
    } else {
      if (stack1.length === 0) throw new Error('Queue is empty');
      else if (stack1.length === 1) return stack1.pop();
      else if (stack1.length > 0) {
        while (stack1.length) {
          stack2.push(stack1.pop());
        }
        return stack2.pop();
      }
    }
  };

  this.log = function () {
    console.log(stack1, stack2);
  };
}

function testQueue() {
  try {
    let q = new Queue();
    q.enqueue(1);
    q.enqueue(2);
    q.enqueue(1);
    q.enqueue(3);
    q.enqueue(4);
    q.enqueue(2);

    q.log();
    q.dequeue();
    q.dequeue();
    q.log();
  } catch (error) {
    console.error(error);
  }
}
testQueue();
