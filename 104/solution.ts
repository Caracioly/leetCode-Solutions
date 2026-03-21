class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

function maxDepth(root: TreeNode | null): number {
  let count: number = 0;
  let max: number = 0;

  function move(node: TreeNode | null) {
    if (!node) return;

    count++;

    if (max < count) {
      max = count;
    }

    move(node?.left);
    move(node?.right);
    count--;
  }

  move(root);
  console.log(`Result: ${max}`);
  return max;
}

const root1 = new TreeNode(
  3,
  new TreeNode(9),
  new TreeNode(20, new TreeNode(15), new TreeNode(7)),
);

const root2 = new TreeNode(1, null, new TreeNode(2));

maxDepth(root1);
