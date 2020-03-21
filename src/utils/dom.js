function getOffsetLeft(elem) {
    let offsetLeft = 0;
    do {
        if (!isNaN(elem.offsetLeft)) {
            offsetLeft += elem.offsetLeft;
            elem = elem.offsetParent;
        }
    } while (elem.offsetParent);
    return offsetLeft;
}

function getOffsetTop(elem) {
    let offsetTop = 0;
    do {
        if (!isNaN(elem.offsetTop)) {
            offsetTop += elem.offsetTop;
            elem = elem.offsetParent;
        }
    } while (elem.offsetParent);
    return offsetTop;
}

function removeAllChildNodes(element) {
  while (element.firstChild) {
    element.removeChild(element.lastChild);
  }
}

function getIndex(element) {
  let i = 0;
  while ((element = element.previousSibling) != null) {
    i++;
  }
  return i;
}

export {
    getOffsetLeft, getOffsetTop, removeAllChildNodes, getIndex
}