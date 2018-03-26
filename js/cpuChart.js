function drawCPUChart() {
    d3.csv("resources/cpu-usage.csv", function (data) {
        data.forEach(function (d) {
            data.USAGE = +data.USAGE;
            //console.log(data);
        })
        var dataUsed = data[59].USAGE;
        var dataUnused = 100 - data[59].USAGE;
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
                },
                animation: {
                    duration: 0
                }
            }
        });
    })
}
function drawCPUDetail() {
    if (document.getElementById("cpuDetail")) {
        d3.csv("resources/cpu-usage.csv", function (data) {
            data.forEach(function (d) {
                data.USAGE = +data.USAGE;
                //console.log(data);
            })
            var ctx = document.getElementById("cpuDetail").getContext('2d');
            var cpuDetail = new Chart(ctx, {
                type: 'line',
                data: {
                    labels: [
                        data[0].DATE,
                        data[1].DATE,
                        data[2].DATE,
                        data[3].DATE,
                        data[4].DATE,
                        data[5].DATE,
                        data[6].DATE,
                        data[7].DATE,
                        data[8].DATE,
                        data[9].DATE,
                        data[10].DATE,
                        data[11].DATE,
                        data[12].DATE,
                        data[13].DATE,
                        data[14].DATE,
                        data[15].DATE,
                        data[16].DATE,
                        data[17].DATE,
                        data[18].DATE,
                        data[19].DATE,
                        data[20].DATE,
                        data[21].DATE,
                        data[22].DATE,
                        data[23].DATE,
                        data[24].DATE,
                        data[25].DATE,
                        data[26].DATE,
                        data[27].DATE,
                        data[28].DATE,
                        data[29].DATE,
                        data[30].DATE,
                        data[31].DATE,
                        data[32].DATE,
                        data[33].DATE,
                        data[34].DATE,
                        data[35].DATE,
                        data[36].DATE,
                        data[37].DATE,
                        data[38].DATE,
                        data[39].DATE,
                        data[40].DATE,
                        data[41].DATE,
                        data[42].DATE,
                        data[43].DATE,
                        data[44].DATE,
                        data[45].DATE,
                        data[46].DATE,
                        data[47].DATE,
                        data[48].DATE,
                        data[49].DATE,
                        data[50].DATE,
                        data[51].DATE,
                        data[52].DATE,
                        data[53].DATE,
                        data[54].DATE,
                        data[55].DATE,
                        data[56].DATE,
                        data[57].DATE,
                        data[58].DATE,
                        data[59].DATE
                    ],
                    datasets: [{
                        data: [
                            data[0].USAGE,
                            data[1].USAGE,
                            data[2].USAGE,
                            data[3].USAGE,
                            data[4].USAGE,
                            data[5].USAGE,
                            data[6].USAGE,
                            data[7].USAGE,
                            data[8].USAGE,
                            data[9].USAGE,
                            data[10].USAGE,
                            data[11].USAGE,
                            data[12].USAGE,
                            data[13].USAGE,
                            data[14].USAGE,
                            data[15].USAGE,
                            data[16].USAGE,
                            data[17].USAGE,
                            data[18].USAGE,
                            data[19].USAGE,
                            data[20].USAGE,
                            data[21].USAGE,
                            data[22].USAGE,
                            data[23].USAGE,
                            data[24].USAGE,
                            data[25].USAGE,
                            data[26].USAGE,
                            data[27].USAGE,
                            data[28].USAGE,
                            data[29].USAGE,
                            data[30].USAGE,
                            data[31].USAGE,
                            data[32].USAGE,
                            data[33].USAGE,
                            data[34].USAGE,
                            data[35].USAGE,
                            data[36].USAGE,
                            data[37].USAGE,
                            data[38].USAGE,
                            data[39].USAGE,
                            data[40].USAGE,
                            data[41].USAGE,
                            data[42].USAGE,
                            data[43].USAGE,
                            data[44].USAGE,
                            data[45].USAGE,
                            data[46].USAGE,
                            data[47].USAGE,
                            data[48].USAGE,
                            data[49].USAGE,
                            data[50].USAGE,
                            data[51].USAGE,
                            data[52].USAGE,
                            data[53].USAGE,
                            data[54].USAGE,
                            data[55].USAGE,
                            data[56].USAGE,
                            data[57].USAGE,
                            data[58].USAGE,
                            data[59].USAGE
                        ],
                        label: "CPU Usage (%)",
                        borderColor: "#007bff",
                        fill: true
                    }]
                },
                options: {
                    animation: {
                        duration: 0
                    }
                }
            });
        })
    }
}