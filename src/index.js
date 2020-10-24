module.exports = function check(str, bracketsConfig) {
    let intermediate = '';
    let char_begin = '';
    let char_end = '';
    let count = 0;
    let error = 'e';
    if( str.length % 2 !== 0){
        return false
    }
    for (let i = 0; i < bracketsConfig.length; i++) {
        char_begin = bracketsConfig[i][0];
        char_end = bracketsConfig[i][1];
        console.log(char_begin);
        console.log(str[str.length - 1])
        if( char_end === str[0] || char_begin === str[str.length - 1]){
            return false;
        }
        for (let index_str = 0; index_str < str.length; index_str++) {
            if( str[index_str] === char_begin || str[index_str] == char_end){
              count++;
            }
        }
    }
    if( count % 2 === 0){
      return true;
    } else{
      return false;
    }  
}
