document.addEventListener('DOMContentLoaded', function () {

   var whenSubmit = document.getElementById('submitURL');
   whenSubmit.addEventListener('click', begin);  
  
   var whenReset = document.getElementById('reset');
   whenReset.addEventListener('click', beginAgain);
});


function beginAgain() {
     
   document.getElementById("URLBox").value = "";         
   document.getElementById("theSelection").style.display = "initial";
}
  
               
function begin() {

   var theURL='';
   var videoId='';
   var newURL='';

   formatTheURL();
   arrangeWindow();


   function formatTheURL() {

      theURL = document.getElementById("URLBox").value;
      
        
      if (theURL.substr(0,4) == "http")  {
      
         videoId = theURL.substr(31,42);
      }
      
      if (theURL.substr(0,5) == "https")  {
      
         videoId = theURL.substr(32,43);
      }
      
      if (theURL.substr(0,3) == "www")  {
      
         videoId = theURL.substr(24,35);
      }
      
      if (theURL.substr(0,7) == "youtube")  {
      
         videoId = theURL.substr(20,31);
      }
      
      newURL = 'https://www.youtube.com/embed/' + videoId + '?autoplay=1&loop=1&playlist=' + videoId + '&controls=1';
         
   }
   
   
   function arrangeWindow()  {
   
      document.getElementById("theSelection").style.display = "none";
      var view  = document.getElementById("wView");
      view.src = newURL;  
 
   }
}
