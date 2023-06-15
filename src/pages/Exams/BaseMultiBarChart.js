import React from 'react';
import Chart from 'react-apexcharts';

const MultiBarChartForExam = () => {
    const chartData = {
        series: [
            {
                name: '1. Sınav',
                data: [44, 55, 65],
            },
            {
                name: '2. Sınav',
                data: [70, 58, 64],
            },
            {
                name: '3. Sınav',
                data: [33, 67, 51],
            },
        ],
        options: {
            title: {
                text: 'Şubelere Göre Sınav Not Ortalamaları',
                style: {
                    fontSize: '18px',
                    fontWeight: 'strong',
                }
            },
            chart: {
                type: 'bar',
                height: 200,
                stacked: true,
            },
            plotOptions: {
                bar: {
                    horizontal: true,
                    borderRadius: 10,
                },
            },
            dataLabels: {
                enabled: true,
            },
            xaxis: {
                categories: [
                    '9/A',
                    '9/B',
                    '9/C',
                ],
            },
            legend: {
                position: 'bottom',
                offsetY: 10,
            },
        },
    };

    return (
        <div>
            <Chart
                options={chartData.options}
                series={chartData.series}
                type="bar"
                height={250}
            />
        </div>
    );
};

export default MultiBarChartForExam;
