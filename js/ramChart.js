function drawRAMChart() {
    d3.csv("resources/ram-usage.csv", function (data) {
        data.forEach(function (d) {
            data.USAGE = +data.USAGE;
            data.TOTAL = +data.TOTAL;
            //console.log(data);
        })
        var dataUsed = data[59].USAGE;
        var dataUnused = data[59].TOTAL - data[59].USAGE;
        var ctx = document.getElementById("ramChart").getContext('2d');
        var ramChart = new Chart(ctx, {
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
                    "mb used",
                    "mb available"
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