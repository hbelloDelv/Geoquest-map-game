/////////////// DRAGMAP DISABLE FUNCTION ///////////////////
const dragMapTile = document.querySelector('#right-section')
const eachMapTile = dragMapTile.children

// let timeInterval = 1; 
let timeInterval; 




const disableDragMap = () => {
    Array.from(eachMapTile).forEach(item => {
       let dragMap = item.children; // Get the child elements of eachMapTile
    
       for (let index = 0; index < dragMap.length; index++) {
          const element = dragMap[index];
          element.addEventListener('dragstart', (e) => {
             e.preventDefault();
          });
       }
    });
  }



const enableDragMap = () => {
  Array.from(eachMapTile).forEach(item => {
     let dragMap = item.children; // Get the child elements of eachMapTile
  
     for (let index = 0; index < dragMap.length; index++) {
        const element = dragMap[index];
        element.addEventListener('dragstart', (e) => {
        //    e.preventDefault();
        });
     }
  });
}




function enable_disableDragTile(param) {
    if(param === undefined){
        disableDragMap()
    }else if(param > 0){
        enableDragMap()
    }
}




// enable_disableDragTile(timeInterval)


// export {enableDragMap, disableDragMap}
export {enable_disableDragTile}