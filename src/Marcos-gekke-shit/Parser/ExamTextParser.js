import { linkedListToString } from "./LinkedList";
import {
    alterA,
    apply,
    applyL,
    applyR,
    notEmpty,
    pure,
    spanP,
    stringP
} from "./Parser";

export function ParseText() {
  return apply(pure(linkedListToString), notEmpty(spanP((c) => c !== "<")));
}

export function ParseTag(tagName) {
  let tagParser = applyR(
    stringP(`<${tagName}>`),
    applyL(ParseElementArray(), stringP(`</${tagName}>`))
  );
  return apply(
    pure((elements) => {
      return { tag: tagName, inside: elements };
    }),
    tagParser
  );
}
export function ParseParagraph() {
  return ParseTag("p");
}
export function ParseBold() {
  return ParseTag("b");
}
export function ParseItalics() {
  return ParseTag("i");
}

export function ParseElement() {
  return (str) => {
    return alterA([ParseParagraph(), ParseBold(), ParseItalics(), ParseText()])(
      str
    );
  };
}
export function ParseElementArray() {
  return (str) => {
    let res = [];
    while (true) {
      let arr = ParseElement()(str);
      if (arr.length === 0) {
        break;
      }
      str = arr[0];
      res.push(arr[1]);
    }
    return [str, res];
  };
}
