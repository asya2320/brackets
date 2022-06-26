module.exports = function check(str, bracketsConfig) {
  let arr = [];
  let k=0;
  str=str.split('');
  for(let i=0; i<str.length; i++){
    while(bracketsConfig.length>k){
      if(str[i]===bracketsConfig[k][1] ||str[i]===bracketsConfig[k][0]){
        if(str[i]===bracketsConfig[k][1]&&arr[arr.length-1]===bracketsConfig[k][0]){
          arr.pop();
        }else{
          arr.push(str[i]);
        }
      }
      k++;
    }
    k=0;
  }
  return !arr.length;
}
