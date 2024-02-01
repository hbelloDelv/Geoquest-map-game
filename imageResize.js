const resizeImage = {
    abia:      document.getElementById('abia'),
    adamawa:      document.getElementById(''),
    akwaibom:      document.getElementById(''),
    anambra:      document.getElementById(''),
    bauchi:      document.getElementById(''),
    bayelsa:      document.getElementById(''),
    benue:      document.getElementById('benue'),
    borno:      document.getElementById(''),
    crossriver:      document.getElementById(''),
    delta:      document.getElementById(''),
    ebonyi:      document.getElementById(''),
    edo:      document.getElementById(''),
    ekiti:      document.getElementById(''),
    enugu:      document.getElementById(''),
    gombe:      document.getElementById(''),
    imo:      document.getElementById(''),
    jigawa:      document.getElementById(''),
    kaduna:      document.getElementById(''),
    kano:      document.getElementById(''),
    katsina:      document.getElementById(''),
    kebbi:      document.getElementById(''),
    kogi:      document.getElementById(''),
    kwara:      document.getElementById(''),
    lagos:      document.getElementById(''),
    nasarawa:      document.getElementById(''),
    niger:      document.getElementById(''),
    ogun:      document.getElementById(''),
    ondo:      document.getElementById(''),
    osun:      document.getElementById(''),
    oyo:      document.getElementById(''),
    plateau:      document.getElementById(''),
    rivers:      document.getElementById(''),
    sokoto:      document.getElementById(''),
    taraba:      document.getElementById(''),
    yobe:      document.getElementById(''),
    zamfara:      document.getElementById(''),
    abuja:      document.getElementById(''),
    
    
    abiaImage: function () {
       abia.width = 100;
       abia.height = 100;
    },
    
    benueImage: function (e) {
      //  this.benue.width = 50;
      //  this.benue.height = 50;
       this.benue.width = 174;
       this.benue.height = 145;
    },


    bornoImage: function (e) {
      //  this.benue.width = 50;
      //  this.benue.height = 50;
       this.benue.width = 400;
       this.benue.height = 350;
    }
    
    }

    


    const abiaImageHandler = document.getElementById('abia')
    abiaImageHandler.addEventListener('dragstart', ()=>{
      resizeImage.abiaImage()
      
   })


  
    const beuneImageHandler = document.getElementById('benue')
    beuneImageHandler.addEventListener('dragstart', ()=>{
      resizeImage.benueImage()
      
   })


   // let mapDrag = 'dragstart';
   // let mapMousedown = 'mousedown';


    const bornoImageHandler = document.getElementById('borno')
    bornoImageHandler.addEventListener('durationchange', ()=>{
      resizeImage.bornoImage()
      
   })

//   console.log(beuneImageHandler)

// resizeImage.benueImage()