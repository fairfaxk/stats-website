var ctx = document.getElementById("cpuChart").getContext('2d');
var myChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        datasets: [{
            data: [
                66,
                34
            ],
            backgroundColor: [
                "#007bff",
                "#C0C0C0"
            ]
        }],
        labels: [
            "% Used",
            "% Un-Used"
        ]
    },
    options: {
        legend: {
            display: false
        }
    }
});