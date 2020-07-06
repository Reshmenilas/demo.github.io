// for side menu
function openNav() {
	document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
	document.getElementById("mySidenav").style.width = "0";
}

$(document).ready(function () {
	
	$('.html').rProgressbar({
		percentage: 95,
	  fillBackgroundColor: '#fff',
	  backgroundColor: '#000',
	  borderRadius: '10px',
	  height: '5px',
	  width: '100%'
	 });
	 $('.css').rProgressbar({
		percentage: 85,
	  fillBackgroundColor: '#fff',
	  backgroundColor: '#000',
	  borderRadius: '10px',
	  height: '5px',
	  width: '100%'
	 });
	 $('.java').rProgressbar({
		percentage: 90,
	  fillBackgroundColor: '#fff',
	  backgroundColor: '#000',
	  borderRadius: '10px',
	  height: '5px',
	  width: '100%'
	 });
	 $('.mar').rProgressbar({
		percentage: 80,
	  fillBackgroundColor: '#fff',
	  backgroundColor: '#000',
	  borderRadius: '10px',
	  height: '5px',
	  width: '100%'
	 });
	// mixitup js
	 var mixer = mixitup('.grid');
	// magnific popup js
	 $('.pop_up').magnificPopup({
      
		type: 'image',
		gallery: {
			 enabled: true
		},
		
  	});
});