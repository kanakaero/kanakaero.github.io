---
title: "Flow over a Wedge and a Blunt Body at Mach 9"
layout: splash
permalink: /proj/hyp
header:
  overlay_color: "#000080"
  overlay_filter: "0.2"
intro:
  - excerpt2: Course Project for High Speed Aerodynamics (AAE 4083) at the Manipal Institute of Technology, Manipal, India 
---

{% include feature_row id="intro" type="center" %}

<h2>Problem Statement</h2>
Simulate the flow over a wedge and a blunt body flying at an altitude of 25 km and at Mach 9.
<br>
<br>
<hr>

<h2>Mesh</h2>
<div class="slideshow-container" id="slideshow-container1">
  <div class="mySlides fade">
    <img src="/assets/images/meshw.png" alt="Mesh of the Wedge">
    <div class="text">Mesh of the Wedge</div>
  </div>

  <div class="mySlides fade">
    <img src="/assets/images/meshb.jpeg" alt="Mesh of the Blunt Body">
    <div class="text">Mesh of the Blunt Body</div>
  </div>

  <!-- Navigation buttons -->
  <a class="prev" onclick="plusSlides(-1, 0)">&#10094;</a>
  <a class="next" onclick="plusSlides(1, 0)">&#10095;</a>
</div>
<br>
<hr>

<h2>Pressure Distribution</h2>
<div class="slideshow-container" id="slideshow-container2">
  <div class="mySlides fade">
    <img src="/assets/images/presw.jpeg" alt="Pressure Distribution Around the Wedge">
    <div class="text">Pressure Distribution about the Wedge</div>
  </div>

  <div class="mySlides fade">
    <img src="/assets/images/presb.jpeg" alt="Pressure Distribution Around the Blunt Body">
    <div class="text">Pressure Distribution about the Blunt Body</div>
  </div>

  <!-- Navigation buttons -->
  <a class="prev" onclick="plusSlides(-1, 1)">&#10094;</a>
  <a class="next" onclick="plusSlides(1, 1)">&#10095;</a>
</div>
<br>
<hr>

<h2>Temperature Distribution</h2>
<div class="slideshow-container" id="slideshow-container3">
  <div class="mySlides fade">
    <img src="/assets/images/tempw.jpeg" alt="Image 1">
    <div class="text">Static Temperature Distribution about the Wedge</div>
  </div>

  <div class="mySlides fade">
    <img src="/assets/images/tempb.jpeg" alt="Image 2">
    <div class="text">Static Temperature Distribution about the Blunt Body</div>
  </div>

  <!-- Navigation buttons -->
  <a class="prev" onclick="plusSlides(-1, 2)">&#10094;</a>
  <a class="next" onclick="plusSlides(1, 2)">&#10095;</a>
</div>
<br>
<hr>

<h2>Density Variation</h2>
<div class="slideshow-container" id="slideshow-container4">
  <div class="mySlides fade">
    <img src="/assets/images/densw.jpeg" alt="Image 1">
    <div class="text">Density Variation about the Wedge</div>
  </div>

  <div class="mySlides fade">
    <img src="/assets/images/densb.jpeg" alt="Image 2">
    <div class="text">Density Varation about the Blunt Body</div>
  </div>

  <!-- Navigation buttons -->
  <a class="prev" onclick="plusSlides(-1, 3)">&#10094;</a>
  <a class="next" onclick="plusSlides(1, 3)">&#10095;</a>
</div>
<br>
<hr>

<h2>Velocity Distribution</h2>
<div class="slideshow-container" id="slideshow-container5">
  <div class="mySlides fade">
    <img src="/assets/images/velw.jpeg" alt="Image 1">
    <div class="text">Velocity Distribution about the Wedge</div>
  </div>

  <div class="mySlides fade">
    <img src="/assets/images/velb.jpeg" alt="Image 2">
    <div class="text">Velocity Distribution About the Blunt Body</div>
  </div>

  <!-- Navigation buttons -->
  <a class="prev" onclick="plusSlides(-1, 4)">&#10094;</a>
  <a class="next" onclick="plusSlides(1, 4)">&#10095;</a>
</div>
<br>
<hr>

<!-- Include additional slideshows as needed -->


<script>
// JavaScript for slideshow functionality
let slideIndex = [1, 1, 1, 1, 1]; // Array for each slideshow

showSlides(slideIndex[0], 0);
showSlides(slideIndex[1], 1);
showSlides(slideIndex[2], 2);
showSlides(slideIndex[3], 3);
showSlides(slideIndex[4], 4);

function plusSlides(n, slideshowIndex) {
  showSlides(slideIndex[slideshowIndex] += n, slideshowIndex);
}

function showSlides(n, slideshowIndex) {
  let slides = document.getElementById(`slideshow-container${slideshowIndex + 1}`).getElementsByClassName("mySlides");
  
  if (n > slides.length) { slideIndex[slideshowIndex] = 1; }
  if (n < 1) { slideIndex[slideshowIndex] = slides.length; }
  
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  
  slides[slideIndex[slideshowIndex] - 1].style.display = "block";  
}
</script>
