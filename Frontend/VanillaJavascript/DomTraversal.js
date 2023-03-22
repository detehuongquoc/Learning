const domTraversal = (dom) => {
  let count = 0;
  let queue = [dom];
  while (queue.length) {
    count++;
    let node = queue.shift();
    if (node.children) {
      const child = node.children;
      for (let i = 0; i < child.length; i++) {
        queue.push(child[i]);
      }
    }
  }
};
