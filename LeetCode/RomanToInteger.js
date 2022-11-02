var romanToInt = function(s) {
    let objItem = {I:1, V:5, X:10, L:50, C:100, D:500, M:1000}
for(let i=0;i<s.length;i++){
    if (s[i]==Object.keys(objItem) ){
        return s[i]
    }
}
};

console.log(romanToInt(I))