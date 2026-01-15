/*Name this external file gallery.js*/


function accessibility(){
  for (let i = 0; i < document.querySelectorAll('.preview').length; i++) {
    document.querySelectorAll('.preview')[i].setAttribute('tabindex', '0');
  }

  console.log("loaded image" + i)

}
   


function upDate(previewPic){
 
  document.getElementById("image").innerText = previewPic.alt;
  document.getElementById("image").style.backgroundImage = `url(${previewPic.src})`;

  document.querySelectorAll('.preview').forEach(img => img.setAttribute('tabindex', '0'));

 

	}
  

  function unDo(){

    document.getElementById("image").innerText = "Hover over an image below to display here."

    document.getElementById("image").style.backgroundImage = "none"
  }           