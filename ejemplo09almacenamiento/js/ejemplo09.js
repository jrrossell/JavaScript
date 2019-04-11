function inicializar(){
     if(localStorage){
         if(localStorage.getItem("color")){
             alert("El color almacenado es : " 
                + localStorage.getItem("color"));
         }else{
             localStorage.setItem("color","Mi color");
         }
         if(localStorage.getItem("ovejas")){
            alert("La oveja almacenada es : " 
                + localStorage['ovejas']);
        }else{
            localStorage['ovejas'] = "merinas";
        }
        if(localStorage.getItem("coche")){
            alert("El coche que te mola es : " 
                + localStorage.coche);
        }else{
            localStorage.coche = "Aston Martin";
        }

     }else{
         localStorage = {}
     }
     if(sessionStorage){
        if(sessionStorage.getItem("color")){
            alert("El color almacenado es : " 
               + sessionStorage.getItem("color"));
        }else{
            sessionStorage.setItem("color","Mi color");
        }
        if(sessionStorage.getItem("ovejas")){
           alert("La oveja almacenada es : " 
               + sessionStorage['ovejas']);
       }else{
        sessionStorage['ovejas'] = "merinas";
       }
       if(sessionStorage.getItem("coche")){
           alert("El coche que te mola es : " 
               + sessionStorage.coche);
       }else{
        sessionStorage.coche = "Aston Martin";
       }
     }
}