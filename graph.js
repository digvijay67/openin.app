google.charts.load("current", {packages:["corechart"]});
      google.charts.setOnLoadCallback(drawChart);
      function drawChart() {
        var data = google.visualization.arrayToDataTable([
          ['Language', 'Speakers (in millions)'],
          ['Basic Tees',  4.345],
          ['Custom Short pants',  2.607],
          ['Super Hoodies', 1.106],
          
        ]);

      var options = {
       legend: 'none',
        pieSliceText: 'label',
        
        pieStartAngle: 100,
      };

       var chart = new google.visualization.PieChart(document.getElementById('piechart'));
      chart.draw(data, options);
      }
