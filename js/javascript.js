// https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_toggle_hide_show
// https://www.w3schools.com/howto/howto_js_filter_elements.asp
// https://codepen.io/RajRajeshDn/pen/zYGGvmJ

window.onload = () => {
  filterBtn();
  filterSelection("all");
};

function setup() {}

// Main Filter Content button
function filterBtn() {
  // Filter content container hides
  var filter = document.getElementById("filter");
  if (filter.style.display === "none") {
    filter.style.display = "block";
  } else {
    filter.style.display = "none";
  }
}

var selectedItem = "all";

// This function checks to see if the tab is selected and adds the class "selected"
function highlightItem() {
  var tag = document.getElementsByClassName("button");
  var i;
  for (i = 0; i < tag.length; i++) {
    if (tag[i].id.indexOf(selectedItem) === -1) removeClass(tag[i], "selected");
    if (tag[i].id.indexOf(selectedItem) > -1) addClass(tag[i], "selected");
  }
}

// JS code that when tag is clicked, relevant content to the tag will show in the body
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("#"); //removed 
  if (c == "all") c = "";
  // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
  for (i = 0; i < x.length; i++) {
    removeClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) addClass(x[i], "show");
  }
  highlightItem();
}

// Show filtered elements
function addClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

// Hide elements that are not selected
function removeClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}

/* Add active class to the current control button (highlight it)
  var btnContainer = document.getElementById("filter");
  var btns = btnContainer.getElementsByClassName("button");
  for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function() {
      var current = document.getElementsByClassName("active");
      current[0].className = current[0].className.replace(" active", "");
      this.className += " active";
    });
  } */

  

  