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
   e.dataTransfer.setDragImage(images.abia, 20, 30);
});

resizeImage.abuja.addEventListener('dragstart',(e)=>{
   e.dataTransfer.setDragImage(images.abuja, 60, 60);
});

resizeImage.adamawa.addEventListener('dragstart',(e)=>{
   e.dataTransfer.setDragImage(images.adamawa, 45, 90)
});

resizeImage.akwaibom.addEventListener('dragstart',(e)=>{
   e.dataTransfer.setDragImage(images.akwaibom,35, 50)
});

resizeImage.anambra.addEventListener('dragstart',(e)=>{
   e.dataTransfer.setDragImage(images.anambra, 33, 35)
});

resizeImage.bauchi.addEventListener('dragstart',(e)=>{
   e.dataTransfer.setDragImage(images.bauchi, 60, 110);
})

resizeImage.bayelsa.addEventListener('dragstart',(e)=>{
   e.dataTransfer.setDragImage(images.bayelsa, 68, 75);
})

resizeImage.benue.addEventListener('dragstart',(e)=>{
   e.dataTransfer.setDragImage(images.benue, 84, 60);
})

resizeImage.borno.addEventListener('dragstart',(e)=>{
   e.dataTransfer.setDragImage(images.borno, 125, 130);
})

resizeImage.crossriver.addEventListener('dragstart',(e)=>{
   e.dataTransfer.setDragImage(images.crossriver, 75, 80);
})

resizeImage.delta.addEventListener('dragstart',(e)=>{
   e.dataTransfer.setDragImage(images.delta, 80, 95);
})

resizeImage.ebonyi.addEventListener('dragstart',(e)=>{
   e.dataTransfer.setDragImage(images.ebonyi, 53, 46);
})

resizeImage.edo.addEventListener('dragstart',(e)=>{
   e.dataTransfer.setDragImage(images.edo, 93, 80);
})

resizeImage.ekiti.addEventListener('dragstart',(e)=>{
   e.dataTransfer.setDragImage(images.ekiti, 58, 44);
})

resizeImage.enugu.addEventListener('dragstart',(e)=>{
   e.dataTransfer.setDragImage(images.enugu, 48, 45);
})

resizeImage.gombe.addEventListener('dragstart',(e)=>{
   e.dataTransfer.setDragImage(images.gombe, 80, 82);
})

resizeImage.imo.addEventListener('dragstart',(e)=>{
   e.dataTransfer.setDragImage(images.imo, 57, 52);
})

resizeImage.jigawa.addEventListener('dragstart',(e)=>{
   e.dataTransfer.setDragImage(images.jigawa, 75, 50);
})

resizeImage.kaduna.addEventListener('dragstart',(e)=>{
   e.dataTransfer.setDragImage(images.kaduna, 90, 67);
})

resizeImage.kano.addEventListener('dragstart',(e)=>{
   e.dataTransfer.setDragImage(images.kano, 65, 50);
})

resizeImage.katsina.addEventListener('dragstart',(e)=>{
   e.dataTransfer.setDragImage(images.katsina, 47, 70);
})

resizeImage.kebbi.addEventListener('dragstart',(e)=>{
   e.dataTransfer.setDragImage(images.kebbi, 49, 74);
})

resizeImage.kogi.addEventListener('dragstart',(e)=>{
   e.dataTransfer.setDragImage(images.kogi, 75, 60);
})

resizeImage.kwara.addEventListener('dragstart',(e)=>{
   e.dataTransfer.setDragImage(images.kwara, 95, 62);
})

resizeImage.lagos.addEventListener('dragstart',(e)=>{
   e.dataTransfer.setDragImage(images.lagos, 60, 30);
})

resizeImage.nassarawa.addEventListener('dragstart',(e)=>{
   e.dataTransfer.setDragImage(images.nassarawa, 80, 50);
})

resizeImage.niger.addEventListener('dragstart',(e)=>{
   e.dataTransfer.setDragImage(images.niger, 110, 93);
})

resizeImage.ogun.addEventListener('dragstart',(e)=>{
   e.dataTransfer.setDragImage(images.ogun, 58, 70);
})

resizeImage.ondo.addEventListener('dragstart',(e)=>{
   e.dataTransfer.setDragImage(images.ondo, 48, 60);
})

resizeImage.osun.addEventListener('dragstart',(e)=>{
   e.dataTransfer.setDragImage(images.osun, 66, 65);
})

resizeImage.oyo.addEventListener('dragstart',(e)=>{
   e.dataTransfer.setDragImage(images.oyo, 78, 80);
})

resizeImage.plateau.addEventListener('dragstart',(e)=>{
   e.dataTransfer.setDragImage(images.plateau, 80, 80);
})

resizeImage.rivers.addEventListener('dragstart',(e)=>{
   e.dataTransfer.setDragImage(images.rivers, 59, 54);
})

resizeImage.sokoto.addEventListener('dragstart',(e)=>{
   e.dataTransfer.setDragImage(images.sokoto, 75, 58);
})

resizeImage.taraba.addEventListener('dragstart',(e)=>{
   e.dataTransfer.setDragImage(images.taraba, 80, 95);
})

resizeImage.yobe.addEventListener('dragstart',(e)=>{
   e.dataTransfer.setDragImage(images.yobe, 97, 65);
})

resizeImage.zamfara.addEventListener('dragstart',(e)=>{
   e.dataTransfer.setDragImage(images.zamfara, 78, 66);
})


