import React from "react";
import {
  SparklineComponent,
  Inject,
  SparklineTooltip,
} from "@syncfusion/ej2-react-charts";
function SparkLine({ id, height, width, color, data, type, currentColor }) {
  return (
    <SparklineComponent
      id={id}
      height={height}
      width={width}
      lineWidth={1}
      fill={color}
      border={{ color: currentColor, width: 2 }}
      valueType="Numeric"
      dataSource={data}
      xName="x"
      yName="y"
      // type={type}
    >
      <Inject services={[SparklineTooltip]} />
    </SparklineComponent>
  );
}

export default SparkLine;
