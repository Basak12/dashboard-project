import React from 'react';
import Chart from 'react-apexcharts';

const MultiBarChart = () => {
    const options = {
        chart: {
            id: "multi-line-chart"
        },
        xaxis: {
            categories: ["Sınav Ortalamaları", "Tüm Ödevleri Yapan Kişi Sayısı", "Derse Aktif Katılım Sağlayan Kişi Sayısı"]
        },
        yaxis: {
            title: {
                text: "Notlara Genel Bakış"
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
            data: [79, 20, 24]
        },
    ];


    return (
        <div>
            <Chart
                options={options}
                series={series}
                type="bar"
                height={250}
            />
        </div>
    );
};

export default MultiBarChart;
