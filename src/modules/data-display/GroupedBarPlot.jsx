import { Bar } from '@ant-design/plots';

const GroupedBarPlot = () => {
    const data = [
        { label: 'Mon.', value: 2800 },
        { label: 'Tues.', value: 2260 },
        { label: 'Wed.', value: 1800 },
        { label: 'Thur.', value: 1300 },
        { label: 'Fri.', value: 950 },
        { label: 'Sat.', value: 950 },
        { label: 'Sun.', value: 950 },
    ];

    const config = {
        data,
        xField: 'value',
        yField: 'label',

        theme: 'classicDark',

        color: '#1677ff',

        maxBarWidth: 16,

        xAxis: {
            grid: null,
            line: null,
        },

        yAxis: {
            grid: null,
            line: null,
        },

        legend: false,
        label: false,
    };

    return <Bar {...config} />;
};

export default GroupedBarPlot;