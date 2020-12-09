// Function: btnsort()
// Sort element by <div class="value">, and rewrite back into <div id="alpha-order">
function btnsort() {

  // Append value[i].innerHTML into templist
  var templist = [];
  value = document.getElementsByClassName('value');
  for(var i = 0; i < value.length; i++){
    templist.push(value[i].innerHTML);
  }

  // Sort templist
  templist.sort();

  // Rewrite templist back into <div id="alpha-order">
  document.getElementById('alpha-order').innerHTML = "";
  for(var i = 0; i < templist.length; i++){
    document.getElementById('alpha-order').innerHTML += '<div class="value">' + templist[i] + '</div>';
  }
}


// Function: btnshuffle()
// Shuffle element by <div class="value">, and rewrite back into <div id="alpha-order">
function btnshuffle() {
   // Append value[i].innerHTML into templist
   var templist = [];
   value = document.getElementsByClassName('value');
   for(var i = 0; i < value.length; i++){
     templist.push(value[i].innerHTML);
   }
 
   // Shuffle templist
   templist = shufflearray(templist);
 
   // Rewrite templist back into <div id="alpha-order">
   document.getElementById('alpha-order').innerHTML = "";
   for(var i = 0; i < templist.length; i++){
     document.getElementById('alpha-order').innerHTML += '<div class="value">' + templist[i] + '</div>';
   }              
}


// Function: shufflearray(array)
// Fisher yates algorithm from: https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
function shufflearray(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}


// Function: togglemenu()
// Toggle popup menu for mobile display
function togglemenu() {
  if(document.getElementById('myheader').style.display == 'block'){
    document.getElementById('myheader').style.display = 'none';
  }else{
    document.getElementById('myheader').style.display = 'block';
  }
}


// Function: resizecheck()
// Reset header display on resizing 
function resizecheck() {
  if (document.getElementsByTagName('body')[0].clientWidth > 640) {
    document.getElementById('myheader').style.display = 'block';
  }else{
    document.getElementById('myheader').style.display = 'none';
  }
}