import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

export const options = {
    responsive: true,
};

const labels = ["2016", "2017", "2018", "2019", "2020", "2021", "2022"];

export const data = {
    labels,
    datasets: [{
        label: "USA",
        data: [15, 30, 55, 65, 60, 80, 95],
        backgroundColor: "rgba(0, 156, 255, .7)"
    },
    {
        label: "UK",
        data: [8, 35, 40, 60, 70, 55, 75],
        backgroundColor: "rgba(0, 156, 255, .5)"
    },
    {
        label: "AU",
        data: [12, 25, 45, 55, 65, 70, 60],
        backgroundColor: "rgba(0, 156, 255, .3)"
    }
    ]
};

export default function WorldwideSales() {
    return <Bar options={options} data={data} />;
}
