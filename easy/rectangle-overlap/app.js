/**
 * @param {number[]} rec1
 * @param {number[]} rec2
 * @return {boolean}
 */
var isRectangleOverlap = function(rec1, rec2) {
    const [x1A, y1A, x2A, y2A] = rec1
    const [x1B, y1B, x2B, y2B] = rec2
    
    return x1A < x2B && x2A > x1B && y1A < y2B && y2A > y1B
};