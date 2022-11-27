import * as React from 'react';
import { Chart, registerables } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import zoomPlugin from 'chartjs-plugin-zoom';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import SourceIcon from '@mui/icons-material/Source';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import Paper from '@mui/material/Paper';
import { Bar, Line, Doughnut } from 'react-chartjs-2';
import { faker } from '@faker-js/faker';

Chart.register(ChartDataLabels, zoomPlugin, ...registerables);

type ChartsComponentsProps = {
    name?: string;
};

const ChartComponents = (props: ChartsComponentsProps) => {
    const labels = [
        '2021 January',
        '2021 February',
        '2021 March',
        '2021 April',
        '2021 May',
        '2021June',
        '2021 July',
        '2021 August',
        '2021 September',
        '2021 October',
        '2021 November',
        '2021 December',
        '2022 January',
        '2022 February',
        '2022 March',
        '2022 April',
        '2022 May',
        '2022June',
        '2022 July',
        '2022 August',
        '2022 September',
        '2022 October',
        '2022 November',
        '2022 December',
    ];
    const barData = {
        labels,
        datasets: [
            {
                label: 'Dataset 1',
                data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
                borderColor: 'rgba(255, 99, 132, 0.5)',
            },
            {
                label: 'Dataset 2',
                data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
                backgroundColor: 'rgba(53, 162, 235, 0.5)',
                borderColor: 'rgba(53, 162, 235, 0.5)',
            },
        ],
    };
    const doughnutData = {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [
            {
                label: '# of Votes',
                data: [12, 19, 3, 5, 2, 3],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                ],
                borderWidth: 1,
            },
        ],
    };
    return (
        <Box>
            <Box display="flex" alignItems="center">
                <SourceIcon sx={{ marginRight: 1 }} fontSize={'large'} />
                <Typography variant="h4" sx={{ fontWeight: 600, verticalAlign: 'middle' }}>
                    Chart Components
                </Typography>
            </Box>
            <Divider sx={{ marginTop: 1, marginBottom: 2 }} />
            <Typography variant="h5" sx={{ fontWeight: 600, marginBottom: 1 }}>
                <LocalOfferIcon fontSize={'small'} sx={{ marginRight: 1.5, fontSize: '16px' }} />
                Bar Chart
            </Typography>
            <Paper sx={{ padding: 2, width: '100%', maxWidth: '1280px' }}>
                <div
                    style={{
                        position: 'relative',
                        width: '90vw',
                        height: '100vw',
                        maxWidth: 'calc(1280px - 2rem)',
                        maxHeight: '500px',
                        margin: 'auto',
                    }}
                >
                    <Bar
                        options={{
                            responsive: true,
                            maintainAspectRatio: false,
                            scales: {
                                x: {
                                    position: 'bottom',
                                    title: {
                                        display: true,
                                        text: 'Monthly Data',
                                    },
                                },
                                y: {
                                    position: 'right',
                                    ticks: {
                                        callback: (val, index, ticks) =>
                                            index === 0 || index === ticks.length - 1 ? null : val,
                                    },
                                    title: {
                                        display: true,
                                        text: 'The number of people',
                                    },
                                },
                            },
                            plugins: {
                                tooltip: {
                                    callbacks: {
                                        title: (context) => {
                                            const title = context[0].label;
                                            return title;
                                        },
                                    },
                                },
                                legend: {
                                    position: 'top' as const,
                                },
                                title: {
                                    display: true,
                                    text: 'Bar Chart',
                                },
                                zoom: {
                                    pan: {
                                        enabled: true,
                                        mode: 'x',
                                    },
                                    limits: {
                                        x: { min: 0, max: 24, minRange: 6 },
                                        y: { min: 0, max: 1200, minRange: 200 },
                                    },
                                    zoom: {
                                        wheel: {
                                            enabled: true,
                                        },
                                        pinch: {
                                            enabled: true,
                                        },
                                        mode: 'x',
                                    },
                                },
                            },
                        }}
                        data={barData}
                    />
                </div>
            </Paper>
            <Typography variant="h5" sx={{ fontWeight: 600, marginBottom: 1, marginTop: 2 }}>
                <LocalOfferIcon fontSize={'small'} sx={{ marginRight: 1.5, fontSize: '16px' }} />
                Line Chart
            </Typography>
            <Paper sx={{ padding: 2, width: '100%', maxWidth: '1280px' }}>
                <div
                    style={{
                        position: 'relative',
                        width: '90vw',
                        height: '100vw',
                        maxWidth: 'calc(1280px - 2rem)',
                        maxHeight: '500px',
                        margin: 'auto',
                    }}
                >
                    <Line
                        options={{
                            responsive: true,
                            maintainAspectRatio: false,
                            elements: {
                                line: {
                                    tension: 0.2,
                                },
                            },
                            interaction: {
                                mode: 'index',
                                intersect: false,
                            },
                            plugins: {
                                legend: {
                                    position: 'left' as const,
                                },
                                title: {
                                    display: true,
                                    text: 'Line Chart',
                                },
                            },
                        }}
                        data={barData}
                    />
                </div>
            </Paper>
            <Typography variant="h5" sx={{ fontWeight: 600, marginBottom: 1, marginTop: 2 }}>
                <LocalOfferIcon fontSize={'small'} sx={{ marginRight: 1.5, fontSize: '16px' }} />
                Doughnut Chart
            </Typography>
            <Paper sx={{ padding: 2, width: '100%', maxWidth: '1280px' }}>
                <Box sx={{ width: 400, margin: 'auto' }}>
                    <Doughnut
                        data={doughnutData}
                        options={{
                            responsive: true,
                            plugins: {
                                legend: {
                                    position: 'right' as const,
                                },
                                title: {
                                    display: true,
                                    text: 'Doughnut Chart',
                                },
                                datalabels: {
                                    formatter: (value) => {
                                        return value + '%';
                                    },
                                },
                            },
                        }}
                    />
                </Box>
            </Paper>
        </Box>
    );
};

export default ChartComponents;
