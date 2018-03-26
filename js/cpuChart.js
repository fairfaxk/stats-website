function drawCPUChart() {
    d3.csv("resources/cpu-usage.csv", function (data) {
        data.forEach(function (d) {
            data.USAGE = +data.USAGE;
            //console.log(data);
        })
        var dataUsed = data[60].USAGE;
        var dataUnused = 100 - data[60].USAGE;
        var ctx = document.getElementById("cpuChart").getContext('2d');
        var cpuChart = new Chart(ctx, {
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
                    "% used",
                    "% available"
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