function render(template, node) {
  if (!node) return;
  node.innerHTML = template;
}

export { render };
