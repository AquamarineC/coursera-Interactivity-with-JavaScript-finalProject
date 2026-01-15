/*Name this external file gallery.js*/

 
   


function upDate(previewPic){
 
  document.getElementById("image").innerText = previewPic.alt;
  document.getElementById("image").style.backgroundImage = `url(${previewPic.src})`;

  document.querySelectorAll('.preview').forEach(img => img.setAttribute('tabindex', '0'));

 

	}
  

  function unDo(){

    document.getElementById("image").innerText = "Hover over an image below to display here."

    document.getElementById("image").style.backgroundImage = "none"
  }           