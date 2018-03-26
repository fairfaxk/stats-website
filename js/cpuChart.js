var dataUsed = null;
var dataUnused = null;
d3.csv("resources/cpu-usage.csv", function (data) {
    data.forEach(function (d) {
        data.USAGE = +data.USAGE;
        //console.log(data);
    })
    dataUsed = data[59].USAGE;
    console.log(dataUsed);
    dataUnused = 100 - data[59].USAGE;
    console.log(dataUnused);
})
var ctx = document.getElementById("cpuChart").getContext('2d');
var data = {
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
            "% Used",
            "% Available"
        ]
    },
    options: {
        legend: {
            display: false
        }
    }
}
var cpuChart = new Chart(ctx).Pie(data);