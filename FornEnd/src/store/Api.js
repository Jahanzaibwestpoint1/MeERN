//ALL URLS
export const BASE_URL =  {
mainUrl:'http://localhost:3001/'
}

//Main Endpoints :)
export const endPoints = {
    addList:'list-entry',
    getLists:'list-data',
    deleteItem:'delete-listitem',
    updateItem:'update-list',
    updateItemStatus:'update-liststatus'
}


// EXTRA_CODE
// <h1>{word.split(' ').map((item) => {
//     if (item.startsWith('@')) {
//       return <span style={{color:'red'}}>{` ${item}` }</span>
//     }
//     else if(item.startsWith('#')){
//       return <span style={{color:'blue'}}>{` ${item}` }</span>
//     }
//     else if(item.startsWith('%')){
//       return <span style={{color:'olivedrab'}}>{` ${item}` }</span>
//     }
//     else{
//       return <span style={{color:'GrayText'}}>{` ${item}`}</span>
//     }
//   })}</h1>
  