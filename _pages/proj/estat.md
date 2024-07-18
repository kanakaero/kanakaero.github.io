---
title: "E-Stationery Portal"
layout: splash
permalink: /proj/estat
header:
  overlay_color: "#000080"
  overlay_filter: "0.2"
  actions:
    - label: "GitHub"
      url: "https://github.com/kanakaero/E-Stationery"
    - label: "Report"
      url: "/assets/files/omega.pdf"
intro: 
  - excerpt2: 'Developed a command line-based e-shopping interface using Python and MySQL as a part of my class 12 final project.'
---
{% include feature_row id="intro" type="center" %}

<h2>Problem Statement</h2>
The e-Stationery example is a simple e-commerce application where users can select Stationery, view the Stationery Items catalog, and purchase Stationery Items. 
<ul>
<li>Implement a module for user registration. Collect the name, contact number, shipping and billing address from the user while registering and any additional fields if required.</li>
<li>Stationery Items should be organized into various categories. Display all these categories in the home page. Selecting a category should display all the Stationery Items under the category.</li>
<li>A guest (who is not yet logged in) should be able to query for any Stationery Items. To buy Stationery items the user should be logged in. Implementing a shopping cart is optional.</li>
</ul>
There should be a Buy Stationery button under each stationery. This should take the user to the buy Stationery page. Also, display the count of number of available stationery items. If zero, display appropriate message, otherwise, the customer information should be auto-populated in the buy page. However, the user should be able to edit any information. The user should be able to select the number of stationery items required. The total price should be displayed to the user. By clicking on 'Submit Order', display success message.
<ul>
<li>Two kinds of roles exist for the system: A regular user (end user) and an admin (or a super user). A regular user should only be able to buy stationery. However, an admin can additionally add stationery to the inventory and query all the orders placed in the website.</li>
<li>Maintain a log of all the stationery items sold including the details of the user who bought it. A user with the role of 'Admin'/'Superuser' should be able to query all the orders placed in the website. Display appropriate messages wherever applicable.</li>
</ul>
As a high-level table structure, the following tables will be required: Stationery items, User, Role, Inventory Tables, The Stationery entity should define at-least the following attributes:
<ul>
<li>Code Number</li>
<li>Stationery name</li>
<li>The price</li>
<li>Whether the stationery items are on sale</li>
<li>A description of the stationery items</li>
</ul>
<br>
<hr>
<!--<h2>Report</h2>
<br>
<object width="100" height="1000" type="application/pdf" data="/assets/files/omega.pdf"> </object>
<br>
<br>
<hr>-->

