 const resizeImage = {
   abia:      document.getElementById('abia'),
   abuja:      document.getElementById('abuja'),
   adamawa:      document.getElementById('adamawa'),
   akwaibom:      document.getElementById('akwa_ibom'),
   anambra:      document.getElementById('anambra'),
   bauchi:      document.getElementById('bauchi'),
   bayelsa:      document.getElementById('bayelsa'),
   benue:      document.getElementById('benue'),
   borno:      document.getElementById('borno'),
   crossriver:      document.getElementById('cross_river'),
   delta:      document.getElementById('delta'),
   ebonyi:      document.getElementById('ebonyi'),
   edo:      document.getElementById('edo'),
   ekiti:      document.getElementById('ekiti'),
   enugu:      document.getElementById('enugu'),
   gombe:      document.getElementById('gombe'),
   imo:      document.getElementById('imo'),
   jigawa:      document.getElementById('jigawa'),
   kaduna:      document.getElementById('kaduna'),
   kano:      document.getElementById('kano'),
   katsina:      document.getElementById('katsina'),
   kebbi:      document.getElementById('kebbi'),
   kogi:      document.getElementById('kogi'),
   kwara:      document.getElementById('kwara'),
   lagos:      document.getElementById('lagos'),
   nassarawa:      document.getElementById('nassarawa'),
   niger:      document.getElementById('niger'),
   ogun:      document.getElementById('ogun'),
   ondo:      document.getElementById('ondo'),
   osun:      document.getElementById('osun'),
   oyo:      document.getElementById('oyo'),
   plateau:      document.getElementById('plateau'),
   rivers:      document.getElementById('rivers'),
   sokoto:      document.getElementById('sokoto'),
   taraba:      document.getElementById('taraba'),
   yobe:      document.getElementById('yobe'),
   zamfara:      document.getElementById('zamfara'),
    
}


   


resizeImage.abia.addEventListener('dragstart',(e)=>{
   const img = new Image();
   img.src = "./resized-images/abia.png";
   e.dataTransfer.setDragImage(img, 28, 30);
   console.log(img)
})


// Abuja not working
resizeImage.abuja.addEventListener('dragstart',(e)=>{
   
   const img = new Image();
   img.src = "./resized-images/abuja.png";
   e.dataTransfer.setDragImage(img, 60, 60);
   console.log(img)
})



resizeImage.adamawa.addEventListener('dragstart',(e)=>{
   const img = new Image();
   img.src = "./resized-images/adamawa.png";
   e.dataTransfer.setDragImage(img, 60, 100);
   console.log(img)
})


resizeImage.akwaibom.addEventListener('dragstart',(e)=>{
   const img = new Image();
   img.src = "./resized-images/akwa_ibom.png";
   e.dataTransfer.setDragImage(img, 30, 50);
   console.log(img)
})



resizeImage.anambra.addEventListener('dragstart',(e)=>{
   const img = new Image();
   img.src = "./resized-images/anambra.png";
   e.dataTransfer.setDragImage(img, 30, 20);
   console.log(img)
})


resizeImage.bauchi.addEventListener('dragstart',(e)=>{
   const img = new Image();
   img.src = "./resized-images/bauchi.png";
   e.dataTransfer.setDragImage(img, 90, 110);
   console.log(img)
})



resizeImage.bayelsa.addEventListener('dragstart',(e)=>{
   const img = new Image();
   img.src = "./resized-images/bayelsa.png";
   e.dataTransfer.setDragImage(img, 60, 80);
   console.log(img)
})



resizeImage.benue.addEventListener('dragstart',(e)=>{
   
   const img = new Image();
   img.src = "./resized-images/benue.png";
   e.dataTransfer.setDragImage(img, 90, 70);
   console.log(img)
})


resizeImage.borno.addEventListener('dragstart',(e)=>{
   const img = new Image();
   img.src = "./resized-images/borno.png";
   e.dataTransfer.setDragImage(img, 110, 90);
   console.log(img)
})

// NOT AVAILABLE YET

resizeImage.crossriver.addEventListener('dragstart',(e)=>{
   const img = new Image();
   img.src = "./resized-images/cross_river.png";
   e.dataTransfer.setDragImage(img, 80, 80);
   console.log(img)
})


resizeImage.delta.addEventListener('dragstart',(e)=>{
   const img = new Image();
   img.src = "./resized-images/delta.png";
   e.dataTransfer.setDragImage(img, 90, 90);
   console.log(img)
})


resizeImage.ebonyi.addEventListener('dragstart',(e)=>{
   const img = new Image();
   img.src = "./resized-images/ebonyi.png";
   e.dataTransfer.setDragImage(img, 60, 40);
   console.log(img)
})


resizeImage.edo.addEventListener('dragstart',(e)=>{
   const img = new Image();
   img.src = "./resized-images/edo.png";
   e.dataTransfer.setDragImage(img, 80, 80);
   console.log(img)
})

resizeImage.ekiti.addEventListener('dragstart',(e)=>{
   const img = new Image();
   img.src = "./resized-images/ekiti.png";
   e.dataTransfer.setDragImage(img, 50, 50);
   console.log(img)
})



resizeImage.enugu.addEventListener('dragstart',(e)=>{
   const img = new Image();
   img.src = "./resized-images/enugu.png";
   e.dataTransfer.setDragImage(img, 50, 50);
   console.log(img)
})

resizeImage.gombe.addEventListener('dragstart',(e)=>{
   const img = new Image();
   img.src = "./resized-images/gombe.png";
   e.dataTransfer.setDragImage(img, 70, 70);
   console.log(img)
})


resizeImage.imo.addEventListener('dragstart',(e)=>{
   const img = new Image();
   img.src = "./resized-images/imo.png";
   e.dataTransfer.setDragImage(img, 70, 50);
   console.log(img)
})



resizeImage.jigawa.addEventListener('dragstart',(e)=>{
   const img = new Image();
   img.src = "./resized-images/jigawa.png";
   e.dataTransfer.setDragImage(img, 80, 60);
   console.log(img)
})


resizeImage.kaduna.addEventListener('dragstart',(e)=>{
   const img = new Image();
   img.src = "./resized-images/kaduna.png";
   e.dataTransfer.setDragImage(img, 80, 60);
   console.log(img)
})


resizeImage.kano.addEventListener('dragstart',(e)=>{
   const img = new Image();
   img.src = "./resized-images/kano.png";
   e.dataTransfer.setDragImage(img, 80, 60);
   console.log(img)
})

resizeImage.katsina.addEventListener('dragstart',(e)=>{
   const img = new Image();
   img.src = "./resized-images/katsina.png";
   e.dataTransfer.setDragImage(img, 50, 50);
   console.log(img)
})



resizeImage.kebbi.addEventListener('dragstart',(e)=>{
   const img = new Image();
   img.src = "./resized-images/kebbi.png";
   e.dataTransfer.setDragImage(img, 60, 60);
   console.log(img)
})


resizeImage.kogi.addEventListener('dragstart',(e)=>{
   const img = new Image();
   img.src = "./resized-images/kogi.png";
   e.dataTransfer.setDragImage(img, 50, 50);
   console.log(img)
})


resizeImage.kwara.addEventListener('dragstart',(e)=>{
   const img = new Image();
   img.src = "./resized-images/kwara.png";
   e.dataTransfer.setDragImage(img, 50, 50);
   console.log(img)
})


resizeImage.lagos.addEventListener('dragstart',(e)=>{
   const img = new Image();
   img.src = "./resized-images/lagos.png";
   e.dataTransfer.setDragImage(img, 60, 30);
   console.log(img)
})


resizeImage.nassarawa.addEventListener('dragstart',(e)=>{
   const img = new Image();
   img.src = "./resized-images/nassarawa.png";
   e.dataTransfer.setDragImage(img, 60, 60);
   console.log(img)
})




resizeImage.niger.addEventListener('dragstart',(e)=>{
   const img = new Image();
   img.src = "./resized-images/niger.png";
   e.dataTransfer.setDragImage(img, 100, 100);
   console.log(img)
})



resizeImage.ogun.addEventListener('dragstart',(e)=>{
   const img = new Image();
   img.src = "./resized-images/ogun.png";
   e.dataTransfer.setDragImage(img, 60, 70);
   console.log(img)
})


resizeImage.ondo.addEventListener('dragstart',(e)=>{
   const img = new Image();
   img.src = "./resized-images/ondo.png";
   e.dataTransfer.setDragImage(img, 60, 60);
   console.log(img)
})

resizeImage.osun.addEventListener('dragstart',(e)=>{
   const img = new Image();
   img.src = "./resized-images/osun.png";
   e.dataTransfer.setDragImage(img, 60, 60);
   console.log(img)
})


resizeImage.oyo.addEventListener('dragstart',(e)=>{
   const img = new Image();
   img.src = "./resized-images/oyo.png";
   e.dataTransfer.setDragImage(img, 80, 80);
   console.log(img)
})


resizeImage.plateau.addEventListener('dragstart',(e)=>{
   const img = new Image();
   img.src = "./resized-images/plateau.png";
   e.dataTransfer.setDragImage(img, 80, 80);
   console.log(img)
})

resizeImage.rivers.addEventListener('dragstart',(e)=>{
   const img = new Image();
   img.src = "./resized-images/rivers.png";
   e.dataTransfer.setDragImage(img, 60, 60);
   console.log(img)
})



resizeImage.sokoto.addEventListener('dragstart',(e)=>{
   const img = new Image();
   img.src = "./resized-images/sokoto.png";
   e.dataTransfer.setDragImage(img, 80, 80);
   console.log(img)
})


resizeImage.taraba.addEventListener('dragstart',(e)=>{
   const img = new Image();
   img.src = "./resized-images/taraba.png";
   e.dataTransfer.setDragImage(img, 80, 80);
   console.log(img)
})


resizeImage.yobe.addEventListener('dragstart',(e)=>{
   const img = new Image();
   img.src = "./resized-images/yobe.png";
   e.dataTransfer.setDragImage(img, 90, 90);
   console.log(img)
})



resizeImage.zamfara.addEventListener('dragstart',(e)=>{
   const img = new Image();
   img.src = "./resized-images/zamfara.png";
   e.dataTransfer.setDragImage(img, 90, 90);
   console.log(img)
})



