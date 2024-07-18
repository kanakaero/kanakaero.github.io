---
title: "Power Calculator in Linux using Bash Scripting"
layout: splash
permalink: /proj/sh
header:
  overlay_color: "#000080"
  overlay_filter: "0.2"
  actions:
    - label: "GitHub"
      url: "https://github.com/kanakaero/linux-proj-2024"
    - label: "Report"
      url: "/assets/files/linux.pdf"
intro:
  - excerpt2: "Course Project for Introduction to Linux and Shell Scripting (DSE 4313) at the Manipal Institute of Technology, Manipal, India"
---
{% include feature_row id="intro" type="center" %}
<h2>Problem Statement</h2>
Jack Nash wishes to create the Power calculator interface in Linux. He must implement a shell script to perform the following tasks
<h4>Task 1: Alpha Power</h4>
<ol>
<li>Create a shell script that begins with a banner "Unleash the Power Calculator" displayed and a menu with the options:</li>
<ul>
<li>Alpha Power (AP):</li>
<ul>
<li>Accept a word and number from the user. Ensure the entered word is between the range of 7 to 9 characters.</li>
<li>Choose middle letter and display the word with middle letter as many times as number indicates. (Hint: abcdefg, 3-> abcdddefg)</li>
<li>Store in file Alpha.txt with fields word, number, and modified word for every try.</li>
</ul>
<li>Expo Power (EP): Read Task 2</li>
<li>Exit (9): Check if user wishes to terminate or continue.</li>
</ul>
</ol>
<h4>Task 2: Expo Power Time</h4>
<ol>
<li>The script must prompt "Enter the base number:" (base). Only positive integers allowed with a range between 2 and 6.</li>
<li>Next prompt "Enter exponent:". (expo). Both positive and negative exponents allowed.</li>
<li>Next prompt "What's your guess for (base) to the power of (expo)?". Accept the guess.</li>
<li>Calculate the base (expo) and compare if guessed value and calculated value are the same. If found same, message "Congratulations, you are power player!" otherwise, the game terminates with appropriate message "Game Over, you lose, low on power, time to recharge!" and terminate.</li>
<li>Store valid data in a text file LiPowerFile.txt before terminating or choosing another option.</li>
</ol>
<b>Note:</b> LiPowerFile.txt must contain the following fields serial_no, basenumber, exponent, guess, matches. Each try must be recorded.
<br>
<br>
<hr>
<!--<h2>Report</h2>
<br>
<object width="200" height="215" type="application/pdf" data="/assets/files/linux.pdf"> </object>
<br>
<br>
<hr>-->