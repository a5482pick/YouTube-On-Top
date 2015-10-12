document.addEventListener('DOMContentLoaded', function () {

   var whenSubmit = document.getElementById('submitURL');
   whenSubmit.addEventListener('click', begin);  
  
   var whenReset = document.getElementById('reset');
   whenReset.addEventListener('click', beginAgain);
});

//Called when the 'new' button is pressed.  Allows for further videos to be selected.
function beginAgain() {
     
   document.getElementById("URLBox").value = "";         
   document.getElementById("theSelection").style.display = "initial";
}
  
//Called when the 'submit' button is pressed.  
function begin() {

   var theURL='';
   var videoId='';
   var newURL='';

   formatTheURL();
   arrangeWindow();

   //Allow for any URL, as long as it contains a valid YouTube ID.
   //Additonally, set the video to play on auto repeat.
   function formatTheURL() {

      theURL = document.getElementById("URLBox").value;
      
      var matchIndex = /(?:\?v=)|(?:&v=)/.exec(theURL).index;
      videoId = theURL.substr(matchIndex+3,11);
      
      newURL = 'https://www.youtube.com/embed/' + videoId + '?autoplay=1&loop=1&playlist=' + videoId + '&controls=1';
         
   }
   
   //Set the area for the video to play in.
   function arrangeWindow()  {
   
      document.getElementById("theSelection").style.display = "none";
      var view  = document.getElementById("wView");
      view.src = newURL;  
 
   }
}
