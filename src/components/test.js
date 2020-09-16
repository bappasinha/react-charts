import {XYPlot, LineSeries, VerticalGridLines, HorizontalGridLines,
        XAxis, YAxis, VerticalBarSeries, MarkSeries} from 'react-vis';

export default function TestChart() {
  const data = [
    {x: 0, y: 8},
    {x: 1, y: 5},
    {x: 2, y: 4},
    {x: 3, y: 9},
    {x: 4, y: 1},
    {x: 5, y: 7},
    {x: 6, y: 6},
    {x: 7, y: 3},
    {x: 8, y: 2},
    {x: 9, y: 0}
  ];
  return (
    <div className="container flex mx-1/6">
      <XYPlot height={300} width={300}>
        <VerticalBarSeries data={data} />
      </XYPlot>
      <XYPlot height={300} width={300} stroke="red">
        <VerticalGridLines />
        <HorizontalGridLines />
        <XAxis />
        <YAxis />
        <LineSeries data={data} stroke="green" />
      </XYPlot>
      <XYPlot height={300} width={300}>
        <MarkSeries data={data} />
      </XYPlot>
    </div>
  );
}