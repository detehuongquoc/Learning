// Trie Node
class TrieNode {
  constructor() {
    this.children = {};
    this.count = 0;
  }
}
// Trie funtion
class Trie {
  constructor() {
    this.root = new TrieNode();
  }
  add(word) {
    let node = this.root;
    for (let i = 0; i < word.length; i++) {
      node = node.children;
      let char = word[i];
      if (!node[char]) node[char] = new TrieNode();
      node = node[char];
      node.count++;
    }
  }
  getScore(word) {
    let node = this.root,
      score = 0;
    for (let i = 0; i < word.length; i++) {
      node = node.children;
      let char = word[i];
      if (!node[char]) return score;
      node = node[char];
      score += node.count;
    }
    return score;
  }
}
var sumPrefixScores = function (words) {
  let trie = new Trie();
  for (let word of words) {
    trie.add(word);
  }
  console.log(trie.root.children.a);
  let n = words.length,
    res = Array(n);
  for (let i = 0; i < words.length; i++) {
    res[i] = trie.getScore(words[i]);
  }
  return res;
};
console.log(sumPrefixScores(["abc", "ab", "bc", "b"]));
