export default 'modules';

export function select(selector, scope = document) {
  return scope.querySelector(selector);
}

export function selectAll(selector, scope = document) {
  return [...scope.querySelectorAll(selector)];
}

export function listen(event, document, callback) {
  return document.addEventListener(event, callback);
}