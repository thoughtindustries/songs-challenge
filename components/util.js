//a util function which checks the ' and replaces it with ASCII value
const searchString = (string)=>{
  if(string.includes("'")){
    const newString = string.replace("'","%27");
   return newString
  }
  
    return string;
  
}

export default searchString;