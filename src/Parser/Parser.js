import {
  arrayToLinkedList,
  cons,
  curry,
  foldr,
  foldr1,
  reverseLinkedList,
} from "./LinkedList";

// functor
export function fMap(f, parser) {
  return (str) => {
    const result = parser(str)();
    if (result.length === 0) {
      return result;
    } else {
      result[1] = f(result[1]);
      return result;
    }
  };
}

// applicative
export function pure(x) {
  return (str) => {
    return [str, x];
  };
}
export function apply(p1, p2) {
  return (str) => {
    const arr1 = p1(str);
    if (arr1.length === 0) return [];
    const arr2 = p2(arr1[0]);
    if (arr2.length === 0) return [];
    return [arr2[0], arr1[1](arr2[1])];
  };
}
export function applyL(p1, p2) {
  return (str) => {
    const arr1 = p1(str);
    if (arr1.length === 0) return [];
    const arr2 = p2(arr1[0]);
    if (arr2.length === 0) return [];
    return [arr2[0], arr1[1]];
  };
}
export function applyR(p1, p2) {
  return (str) => {
    const arr1 = p1(str);
    if (arr1.length === 0) return [];
    const arr2 = p2(arr1[0]);
    if (arr2.length === 0) return [];
    return [arr2[0], arr2[1]];
  };
}
export function liftA2(f, a, b) {
  return apply(apply(pure(f), a), b);
}
export function sequenceA(array) {
  return foldr((a, b) => liftA2(curry(cons), a, b), pure(null), array);
}

// alternative
export function empty() {
  return () => {
    return [];
  };
}
export function alter(p1, p2) {
  return (str) => {
    let result = p1(str);
    if (result.length === 0) {
      return p2(str);
    } else {
      return result;
    }
  };
}
export function alterA(array) {
  return foldr1(alter, arrayToLinkedList(array));
}

// parsing

export function charFuncP(f) {
  return (str) => {
    if (str !== null && f(str.head)) {
      return [str.tail, str.head];
    }
    return [];
  };
}

export function charP(c) {
  return charFuncP((x) => x === c);
}

export function stringP(str) {
  return sequenceA(
    arrayToLinkedList(
      Array.from(str).map((object) => {
        return charP(object);
      })
    )
  );
}

export function spanP(f) {
  return (str) => {
    let res = null;
    while (str !== null && f(str.head)) {
      res = {
        head: str.head,
        tail: res,
      };
      str = str.tail;
    }
    res = reverseLinkedList(res);
    return [str, res];
  };
}

export function notEmpty(parser) {
  return (str) => {
    let result = parser(str);
    if (result.length === 0 || result[1] === null) {
      return [];
    }
    return result;
  };
}
