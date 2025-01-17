---
title: "SAROD 2024"
layout: splash
permalink: /conf/sarod
header:
  overlay_color: "#808000"
  overlay_filter: "0.4"
  actions:
    - label: "Paper"
      url: "/assets/files/sarod.pdf"
    - label: "Proceedings"
      url: "https://drive.google.com/file/d/1aQrsxrAw9MNazx1BNMcqENYuUBQ73WK_/view?usp=sharing"
intro: 
  - excerpt2: 'Symposium on Applied Aerodynamics and Design of Aerospace Vehicles <br> Thiruvananthapuram, India - December 2024'
---
{% include feature_row id="intro" type="center" %}

<h2>Abstract - MATLAB-Enhanced Wing Design and Aerodynamic Modeling</h2>
<p align="justify"> This study presents an innovative MATLAB-based methodology for the efficient design of intricate
wing surfaces, offering an alternative to the cumbersome and skill-intensive CAD software process.
This method facilitates the automated creation of '.stl' files for wings of various dimensions, allowing
for the integration of customizable geometrical features such as twist, sweep, and taper. It uniquely
enables the incorporation of both geometric and aerodynamic twists, with the capability to produce
varied root and tip airfoils internally. The software is compatible with multiple NACA airfoil series,
extending support to CST and PARSEC parameterization methods. Furthermore, this research
integrates the horizontal wind model (HWM) routine from the U.S. Naval Research Laboratory into
MATLAB, enabling the computation of wind speed using location- and time-specific data. This data
is utilized in conjunction with the XFOIL solver embedded in our framework to conduct initial
aerodynamic assessments employing the vortex panel method. The generated wing surface '.stl' files
are designed to be seamlessly integrated with CFD software for comprehensive aerodynamic analysis.</p>
<hr>

<h2>Gallery</h2>
<div class="grid-container2">
  <div class="item2">
    <img src="/assets/images/sarod1.jpg" style="width: 100%; height: auto; display: block; margin-bottom: 10px;">
  </div>
  <div class="item2">
    <img src="/assets/images/sarod2.jpg" style="width: 74.7%; height: auto; display: block; margin-bottom: 10px;">
  </div>
</div>

<h2>Certificate</h2>
<img src="/assets/images/sarod_cert.jpeg" style="width: 65%; height: auto;">
<br>
<br>
<hr>

<style>
  
  .grid-container2 {
    display: grid;
    grid-template-columns: 70% 30%; /* Three columns in the grid */
    gap: 10px; /* Adjust the gap between grid items */
  }
  
  .item2 {
    padding: 0; /* Remove padding inside grid items */
    justify-content: center; /* Center align items horizontally */
    box-sizing: border-box; /* Ensure padding is included in the width calculation */
  }

  .item2 img {
    width: 50%; /* Ensure images and videos fill their containers */
    height: auto; /* Maintain aspect ratio */
    display: block; /* Ensure images and videos are displayed as blocks */
    margin-bottom: 0px; /* Adjust vertical spacing between images and videos */
    margin-left: 0px; /* Add left offset */
  }
  
</style>

