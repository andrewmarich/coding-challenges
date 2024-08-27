var maxDepth = function(root) {
    if(!root) return 0;

    //BFS (level order)

    let level = 0, queue = [];
    queue.push(root);
    
    while(queue.length > 0){
        let count = queue.length;
        
        for(let i = 0; i < count; i++){
            const node = queue.shift();
            if(node.right) queue.push(node.right);
            if(node.left) queue.push(node.left);
            
        }
        level++;
    }
    return level;
};