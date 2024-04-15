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


const images = {
   abia: new Image(),
   abuja: new Image(),
   adamawa: new Image(),
   akwaibom: new Image(),
   anambra: new Image(),
   bauchi: new Image(),
   bayelsa: new Image(),
   benue:  new Image(),
   borno: new Image(),
   crossriver: new Image(),
   delta: new Image(),
   ebonyi: new Image(),
   edo:  new Image(),
   ekiti: new Image(),
   enugu: new Image(),
   gombe: new Image(),
   imo:  new Image(),
   jigawa: new Image(),
   kaduna: new Image(),
   kano:  new Image(),
   katsina: new Image(),
   kebbi: new Image(),
   kogi:  new Image(),
   kwara:  new Image(),
   lagos:   new Image(),
   nassarawa:   new Image(),
   niger: new Image(),
   ogun:  new Image(),
   ondo: new Image(),
   osun:  new Image(),
   oyo:  new Image(),
   plateau: new Image(),
   rivers:  new Image(),
   sokoto: new Image(),
   taraba:   new Image(),
   yobe:    new Image(),
   zamfara: new Image(),
};



// the images are preloaded, so they appear immediately when dragged.
images.abia.src = "./resized-images/abia.png";
images.abuja.src = "./resized-images/abuja.png";
images.adamawa.src = "./resized-images/adamawa.png";
images.akwaibom.src = "./resized-images/akwa_ibom.png";
images.anambra.src = "./resized-images/anambra.png";
images.bauchi.src = "./resized-images/bauchi.png";
images.bayelsa.src = "./resized-images/bayelsa.png";
images.benue.src = "./resized-images/benue.png";
images.borno.src =  "./resized-images/borno.png";
images.crossriver.src = "./resized-images/cross_river.png";
images.delta.src =  "./resized-images/delta.png";
images.ebonyi.src = "./resized-images/ebonyi.png";
images.edo.src = "./resized-images/edo.png";
images.ekiti.src = "./resized-images/ekiti.png";
images.enugu.src = "./resized-images/enugu.png";
images.gombe.src =  "./resized-images/gombe.png";
images.imo.src =  "./resized-images/imo.png";
images.jigawa.src =  "./resized-images/jigawa.png";
images.kaduna.src = "./resized-images/kaduna.png";
images.kano.src = "./resized-images/kano.png";
images.katsina.src =  "./resized-images/katsina.png";
images.kebbi.src = "./resized-images/kebbi.png";
images.kogi.src = "./resized-images/kogi.png";
images.kwara.src = "./resized-images/kwara.png";
images.lagos.src =  "./resized-images/lagos.png";
images.nassarawa.src = "./resized-images/nassarawa.png";
images.niger.src =  "./resized-images/niger.png";
images.ogun.src = "./resized-images/ogun.png";
images.ondo.src = "./resized-images/ondo.png";
images.osun.src = "./resized-images/osun.png";
images.oyo.src = "./resized-images/oyo.png";
images.plateau.src = "./resized-images/plateau.png";
images.rivers.src = "./resized-images/rivers.png";
images.sokoto.src = "./resized-images/sokoto.png";
images.taraba.src = "./resized-images/taraba.png";
images.yobe.src = "./resized-images/yobe.png";
images.zamfara.src = "./resized-images/zamfara.png";




resizeImage.abia.addEventListener('dragstart',(e)=>{
   e.dataTransfer.setDragImage(images.abia, 50, 50);
});

resizeImage.abuja.addEventListener('dragstart',(e)=>{
   e.dataTransfer.setDragImage(images.abuja, 50, 50);
});

resizeImage.adamawa.addEventListener('dragstart',(e)=>{
   e.dataTransfer.setDragImage(images.adamawa, 50, 50)
});

resizeImage.akwaibom.addEventListener('dragstart',(e)=>{
   e.dataTransfer.setDragImage(images.akwaibom, 50, 50)
});

resizeImage.anambra.addEventListener('dragstart',(e)=>{
   e.dataTransfer.setDragImage(images.anambra, 50, 50)
});

resizeImage.bauchi.addEventListener('dragstart',(e)=>{
   e.dataTransfer.setDragImage(images.bauchi, 50, 50);
})

resizeImage.bayelsa.addEventListener('dragstart',(e)=>{
   e.dataTransfer.setDragImage(images.bayelsa, 50, 50);
})

resizeImage.benue.addEventListener('dragstart',(e)=>{
   e.dataTransfer.setDragImage(images.benue, 50, 50);
})

resizeImage.borno.addEventListener('dragstart',(e)=>{
   e.dataTransfer.setDragImage(images.borno, 50, 50);
})

resizeImage.crossriver.addEventListener('dragstart',(e)=>{
   e.dataTransfer.setDragImage(images.crossriver, 50, 50);
})

resizeImage.delta.addEventListener('dragstart',(e)=>{
   e.dataTransfer.setDragImage(images.delta, 50, 50);
})

resizeImage.ebonyi.addEventListener('dragstart',(e)=>{
   e.dataTransfer.setDragImage(images.ebonyi, 50, 50);
})

resizeImage.edo.addEventListener('dragstart',(e)=>{
   e.dataTransfer.setDragImage(images.edo, 50, 50);
})

resizeImage.ekiti.addEventListener('dragstart',(e)=>{
   e.dataTransfer.setDragImage(images.ekiti, 50, 50);
})

resizeImage.enugu.addEventListener('dragstart',(e)=>{
   e.dataTransfer.setDragImage(images.enugu, 50, 50);
})

resizeImage.gombe.addEventListener('dragstart',(e)=>{
   e.dataTransfer.setDragImage(images.gombe, 50, 50);
})

resizeImage.imo.addEventListener('dragstart',(e)=>{
   e.dataTransfer.setDragImage(images.imo, 50, 50);
})

resizeImage.jigawa.addEventListener('dragstart',(e)=>{
   e.dataTransfer.setDragImage(images.jigawa, 50, 50);
})

resizeImage.kaduna.addEventListener('dragstart',(e)=>{
   e.dataTransfer.setDragImage(images.kaduna, 50, 50);
})

resizeImage.kano.addEventListener('dragstart',(e)=>{
   e.dataTransfer.setDragImage(images.kano, 50, 50);
})

resizeImage.katsina.addEventListener('dragstart',(e)=>{
   e.dataTransfer.setDragImage(images.katsina, 50, 50);
})

resizeImage.kebbi.addEventListener('dragstart',(e)=>{
   e.dataTransfer.setDragImage(images.kebbi, 50, 50);
})

resizeImage.kogi.addEventListener('dragstart',(e)=>{
   e.dataTransfer.setDragImage(images.kogi, 50, 50);
})

resizeImage.kwara.addEventListener('dragstart',(e)=>{
   e.dataTransfer.setDragImage(images.kwara, 50, 50);
})

resizeImage.lagos.addEventListener('dragstart',(e)=>{
   e.dataTransfer.setDragImage(images.lagos, 50, 50);
})

resizeImage.nassarawa.addEventListener('dragstart',(e)=>{
   e.dataTransfer.setDragImage(images.nassarawa, 50, 50);
})

resizeImage.niger.addEventListener('dragstart',(e)=>{
   e.dataTransfer.setDragImage(images.niger, 50, 50);
})

resizeImage.ogun.addEventListener('dragstart',(e)=>{
   e.dataTransfer.setDragImage(images.ogun, 50, 50);
})

resizeImage.ondo.addEventListener('dragstart',(e)=>{
   e.dataTransfer.setDragImage(images.ondo, 50, 50);
})

resizeImage.osun.addEventListener('dragstart',(e)=>{
   e.dataTransfer.setDragImage(images.osun, 50, 50);
})

resizeImage.oyo.addEventListener('dragstart',(e)=>{
   e.dataTransfer.setDragImage(images.oyo, 50, 50);
})

resizeImage.plateau.addEventListener('dragstart',(e)=>{
   e.dataTransfer.setDragImage(images.plateau, 50, 50);
})

resizeImage.rivers.addEventListener('dragstart',(e)=>{
   e.dataTransfer.setDragImage(images.rivers, 50, 50);
})

resizeImage.sokoto.addEventListener('dragstart',(e)=>{
   e.dataTransfer.setDragImage(images.sokoto, 50, 50);
})

resizeImage.taraba.addEventListener('dragstart',(e)=>{
   e.dataTransfer.setDragImage(images.taraba, 50, 50);
})

resizeImage.yobe.addEventListener('dragstart',(e)=>{
   e.dataTransfer.setDragImage(images.yobe, 50, 50);
})

resizeImage.zamfara.addEventListener('dragstart',(e)=>{
   e.dataTransfer.setDragImage(images.zamfara, 50, 50);
})


