var ctx = document.getElementById("cpuChart").getContext('2d');
ctx.canvas.width = 300;
ctx.canvas.height = 300;
var myChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        datasets: [{
            data: [
                "66%",
                "34%"
            ],
            backgroundColor: [
                "#007bff",
                "#C0C0C0"
            ]
        }],
        labels: [
            "Used",
            "Unused"
        ]
    }
});