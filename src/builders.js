/**
 * Appends child to parent container
 * @param { HTMLElement | String } container - container to which child node will be appended
 * @param { HTMLElement } node - child node
 * @returns { HTMLElement } - container with child appended to it
 */
export const appendTo = (container, node) => {
  if (!container) {
    throw `Container not found - ${container}`;
  }
  if (!node) {
    throw `Child node not found - ${node}`;
  }
  const wrapper =
    typeof container === "string"
      ? document.querySelector(container)
      : container;
  wrapper.appendChild(node);
  return wrapper;
};

/**
 * Simple shorthand implementation of jQuery's $ function
 * @param { String } node - selector name
 * @param { Boolean } isClone - indicates if selected node needs to be cloned
 * @returns { HTMLElement } - selected DOM node
 */
export const $$ = (node, isClone) => {
  return isClone
    ? document.querySelector(node).cloneNode(isClone)
    : document.querySelector(node);
};

/**
 * Creates dom element and adds children to it
 * @param { String } type - tag name
 * @param { HTMLElement[] } children - array of children which will be appended to tag
 * @returns { HTMLElement } - newly created tag with its children
 */
export const createElement = (type, children) => {
  const newElement = document.createElement(type);
  children.forEach(function (child) {
    newElement.appendChild(child);
  });
  return newElement;
};

/**
 * Adds classes to element
 * @param { HTMLElement } element - element to which classes will be added
 * @param { String[] } klasses - array of classnames
 * @returns { HTMLElement } - element to which classes were added
 */
export function addClass(element, klasses) {
  klasses.forEach((klass) => element.classList.add(klass));
  return element;
}

export const arrayFrom = (argument) => {
  return [].slice.call(argument);
};
