document.getElementById("btn").addEventListener("click", changecolor)

// for generating Random colors
function getRndColor() {
    return 'hsl(' + (360 * Math.random()) + ',50%,50%)'; // H,S,L
}
function changecolor () { 
// alert('d')

    document.body.style.backgroundColor=getRndColor()
    console.log('color changed');
}




function con() {console.log('Body Loaded');
    
}



 