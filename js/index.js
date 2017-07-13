

$(function() {
  $(window).on("load resize", function() {
    $(".fill-screen").css("height", window.innerHeight);
  });
  //add scrollspy via js
  /*
$("body").scrollspy({
  target: ".navbar"
  });
});
*/
 //smooth scrolling
  $("nav a, .down-button a").bind("click", function() {
    $("html, body").stop().animate(
      {
        scrollTop: $($(this).attr("href")).offset().top - 65
      },
      1500,
      "easeInOutExpo"
    );
    event.preventDefault();
  });
});

// Exp donut chart 
window.onload = function () {
	var chart = new CanvasJS.Chart("chartContainer",
	{    
                animationEnabled: true,     
		data: [
		{        
			type: "doughnut",
			startAngle: 60,                          
			toolTipContent: "{legendText}: <strong>#percent% </strong>", 					
			showInLegend: true,
			dataPoints: [
				{y: 10, indexLabel: "HTML5 #percent%", legendText: "HTML5" },
				{y: 10, indexLabel: "CSS #percent%", legendText: "CSS" },
				{y: 5,  indexLabel: "JavaScript #percent%", legendText: "JavaScript" },
        {y: 3, indexLabel: "ASP.NET Core #percent%", legendText: "ASP.NET Core" },
        {y: 4, indexLabel: "Bootstrap #percent%", legendText: "Bootstrap" },
			]
		}
		]
	});
	chart.render();
	}
