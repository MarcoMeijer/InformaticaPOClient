
export function curry(func) {
  return function curried(...args) {
    if (args.length >= func.length) {
      return func.apply(this, args);
    } else {
      return function (...args2) {
        return curried.apply(this, args.concat(args2));
      }
    }
  };
}

export function cons(x, head) {
  return {
    head: x,
    tail: head
  };
}

export function reverseLinkedList(head) {
  let result = null;
  let current = head;
  while (current !== null) {
    result = {
      head: current.head,
      tail: result
    };
    current = current.tail;
  }
  return result;
}

export function getLinkedListLength(head) {
  let result = 0;
  let current = head;
  while (current !== null) {
    result++;
    current = current.tail;
  }
  return result;
}

export function foldr(f, acc, head) {
  let current = reverseLinkedList(head);
  while (current !== null) {
    acc = f(current.head, acc);
    current = current.tail;
  }
  return acc;
}

export function foldr1(f, head) {
  let current = reverseLinkedList(head);
  let acc = current.head;
  current = current.tail;
  while (current !== null) {
    acc = f(current.head, acc);
    current = current.tail;
  }
  return acc;
}

export function arrayToLinkedList(str) {
  let result = null;
  for (let c of str) {
    result = {
      head: c,
      tail: result
    };
  }
  return reverseLinkedList(result);
}

export function linkedListToString(head) {
  let arr = [];
  let current = head;
  while (current !== null) {
    arr.push(current.head);
    current = current.tail;
  }
  return arr.join('');
}