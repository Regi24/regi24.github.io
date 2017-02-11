document.addEventListener('DOMContentLoaded', function () {
  particleground(document.getElementById('particles'), {
    //dotColor: '#5cbdaa',
    //lineColor: '#5cbdaa'
	    dotColor: '#ffffff',
        lineColor: '#ffffff',
        particleRadius: 3,
        parallaxMultiplier: 20,
        proximity: 170,
        density: 15000


	
  });
  var intro = document.getElementById('intro');
  intro.style.marginTop = - intro.offsetHeight / 2 + 'px';
}, false);