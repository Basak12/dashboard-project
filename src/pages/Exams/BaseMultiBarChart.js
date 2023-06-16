import React from 'react';
import Chart from 'react-apexcharts';

const MultiBarChartForExam = () => {
    const chartData = {
        series: [
            {
                name: '1. Sınav',
                data: [44],
            },
            {
                name: '2. Sınav',
                data: [70],
            },
            {
                name: '3. Sınav',
                data: [33],
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
                height: 40,
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
