import React from 'react';
import Chart from 'react-apexcharts';

const MultiBarChart = () => {
    const options = {
        chart: {
            id: "multi-line-chart"
        },
        xaxis: {
            categories: ["1. Ödev", "2. Ödev", "3. Ödev"]
        },
        yaxis: {
            title: {
                text: "Ödev Yapan Kişi Sayısı"
            }
        },
        stroke: {
            width: [3, 3, 3],
            curve: "smooth"
        },
        legend: {
            labels: {
                useSeriesColors: true
            }
        }
    };

    const series = [
        {
            name: "9/B",
            data: [24, 8, 23]
        }
    ];


    return (
        <div>
            <Chart
                options={options}
                series={series}
                type="line"
                height={250}
            />
        </div>
    );
};

export default MultiBarChart;
