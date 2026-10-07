var lengthOfLongestSubstring = function(s) {
    let letters = [];
    let total = 0;
    let increment = 0;

    for(let i = 0; i < s.length; i++) {
        letters = [];
        increment = i;

        while(increment < s.length && !letters.includes(s[increment])) {
            letters.push(s[increment]);
            increment++;
            if(total < letters.length) {
                total = letters.length;
            }
        }

    }
    
    return total;
};
lengthOfLongestSubstring('1R1T7');