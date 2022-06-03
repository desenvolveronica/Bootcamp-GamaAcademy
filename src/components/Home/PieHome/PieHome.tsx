import React from "react";
import { Chart } from "react-google-charts";
import "./PieHome.css"

export const data = [
  ["Pizza", "Client"],
  ["total de clientes", 37],
  ["", 63],

];
export const dataRetencao = [
  ["Pizza", "Client"],
  ["", 37],
  ["", 63],

];

export const options = {
  title: "Total de Clientes",
  sliceVisibilityThreshold: 0.2 // 20%,
};
export const optionsRetencao = {
  title: "Total de Clientes",
  sliceVisibilityThreshold: 0.2 // 20%,
};

export function PieHome() {
  return (
    <>
    <h4></h4>
    <div id='grafico'>
    
    <div id='chart'>
    <Chart
      chartType="PieChart"
      data={dataRetencao}
      options={optionsRetencao}
      width={"370px"}
      height={"354px"}
    />
    </div>
     
    <div id='chart'>
    <Chart
      chartType="PieChart"
      data={dataRetencao}
      options={optionsRetencao}
      width={"370px"}
      height={"354px"}
    />
    </div>
    </div>
    </>
  );
}
