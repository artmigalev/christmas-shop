
export class Component {
  node = null;
  #childNode = [];
  constructor({ tag = "div", className = "", text = "", id = "" }, ...childNode) {
    const node = document.createElement(tag);
    node.className = className;
    node.textContent = text;
    if (id) {
      node.id = id;
    }
    this.node = node;

    if (childNode) {
      this.appendChildren(childNode);
    }
  }

  append(child) {
    this.#childNode.push(child);
    this.node.append(child.getNode());
  }
  appendChildren(childNode) {
    childNode.forEach((el) => {
      this.append(el);
    });
  }
  getNode() {
    return this.node;
  }
  getChild() {
    return this.#childNode;
  }
  setText(content) {
    this.node.textContent = content;
  }
  toggleClass(className) {
    this.node.classList.toggle(className);
  }
  setAttributes(attr, val) {
    this.node.setAttribute(attr, val);
  }
  removeChildren() {
    this.#childNode.forEach((child) => {
      child.destroy();
    });
    this.#childNode.length = 0;
  }
  remove() {
    this.removeChildren();
    this.node.remove();
  }
  addListener(event, listener, options = false) {
    this.node.addEventListener(event, listener, options);
  }
  removeListener(event, listener, options = false) {
    this.node.removeEventListener(event, listener, options);
  }
}