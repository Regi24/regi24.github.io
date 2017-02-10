document.addEventListener('DOMContentLoaded', function () {
  particleground(document.getElementById('particles'), {
    //dotColor: '#5cbdaa',
    //lineColor: '#5cbdaa'
	    dotColor: '#377486',
        lineColor: '#377486',
        particleRadius: 3,
        parallaxMultiplier: 20,
        proximity: 170,
        //density: 15000
		density: 5000

	
  });
  var intro = document.getElementById('intro');
  intro.style.marginTop = - intro.offsetHeight / 2 + 'px';
}, false);