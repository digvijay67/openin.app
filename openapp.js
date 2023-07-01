

      google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawChart);

      function drawChart() {
        var data = google.visualization.arrayToDataTable([
          ['month', 'Guest', 'User'],
          [''      ,  200,      100],
          ['Week 1',  400,      410],
          ['Week 2',  200,      160],
          ['Week 3',  230,       190],
          ['Week 4',  430,      240]
        ]);

        var options = {
          title: 'Activities',
          curveType: 'function',
          legend: { position: 'right'}
          
        };
        


        var chart = new google.visualization.LineChart(document.getElementById('curve_chart'));

        chart.draw(data, options);
      }