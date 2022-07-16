






const getTreeHeight = root => {
    let height = 0;
    while (!root.left) {
        height++;
        root = root.left;
    }
    return height;
}