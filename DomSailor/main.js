<script>
var link = document.querySelector("a");
link.textContent = "I can't change the direction of the wind, . . . ";
link.href =
  "https://kidadl.com/articles/best-sailing-quotes-to-get-you-out-on-the-water";
var sect = document.querySelector("section");
var para = document.createElement("p");
para.textContent =
  '"The cure for anything is saltwater – sweat, tears, or the sea."';
sect.appendChild(para);
var text = document.createTextNode(
  " but I can adjust my sails to always reach my destination."
);
var linkPara = document.querySelector("p");
linkPara.appendChild(text);
sect.appendChild(linkPara);
//linkPara.remove()
para.setAttribute("class", "highlight");
</script>