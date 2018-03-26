function drawDOWNLOADChart() {
    d3.csv("resources/download-usage.csv", function (data) {
        data.forEach(function (d) {
            data.USAGE = +data.USAGE;
            //console.log(data);
        })
        var dataUsed = data[59].USAGE;
        var dataUnused = 15000 - data[59].USAGE;
        var ctx = document.getElementById("downloadChart").getContext('2d');
        var downloadChart = new Chart(ctx, {
            type: 'pie',
            data: {
                datasets: [{
                    data: [
                        dataUsed,
                        dataUnused
                    ],
                    backgroundColor: [
                        "#007bff",
                        "#C0C0C0"
                    ]
                }],
                labels: [
                    "kb/s used",
                    "kb/s available"
                ]
            },
            options: {
                legend: {
                    display: false
                }
            }
        });
    })
}