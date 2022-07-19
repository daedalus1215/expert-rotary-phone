class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }

    insert(values) {
        const queue = [this];
        let i = 0;
        while (queue.length > 0) {
            let current = queue.shift();
            for (let side of ["left", "right"]) {
                if (!current[side]) {
                    if (values[i] !== null) {
                        current[side] = new TreeNode(values[i]);
                    }
                    i++
                    if (i >= values.length) return this;
                }
                if (current[side]) queue.push(current[side]);
            }
        }
        return this;
    }
}
const getLeft = idx => (idx * 2) + 1;
const getRight = idx => (idx * 2) + 2;
const getParent = idx => Math.floor((idx - 1) / 2);

const swapper = (array, left, right) => {
    const temp = array[left];
    array[left] = array[right];
    array[right] = temp;
}

module.exports = {
    TreeNode,
    getLeft,
    getRight,
    getParent,
    swapper
};