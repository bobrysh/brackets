module.exports = function check(str, bracketsConfig) {
bracketsConfig.forEach(element => {
  this.brackets = element.join("");
  if (str.includes(this.brackets)) {
      str = str.replace(this.brackets, "");
      element -= 1
  } 
});
  if (!str){
    return true;
  }else{
    return false;
  }
}
