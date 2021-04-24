import axios from 'axios'

export function getCategories(){
    try{
let Categories=  axios.get('https://rn-skeleton-apis-from-git.herokuapp.com/crop-categories');
console.log(Categories.data)
return Categories.data
    }
    catch(error){
throw error;
    }
}
