function drawCPUChart() {
    var reader = new FileReader();
    var content = reader.readAsText("resources/cpu-usage.csv");
    var data = csv2array(content);
    var dataUsed = data[60][1];
    var dataUnused = 100 - data[60][1];
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
}