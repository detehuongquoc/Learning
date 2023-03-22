function getHeight(tree) {
  let level = 0;
  const dfs = (tr, lv) => {
    if (!tr) {
      return;
    }
    if (tr.children) {
      level = Math.max(level, lv);
      const child = tr.children;
      for (let i = 0; i < child.length; i++) {
        dfs(child[i], lv++);
      }
    }
  };
  dfs(tree, 1);
  return level;
}
