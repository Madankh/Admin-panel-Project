import React, { useCallback, useState, PureComponent } from "react";
import { PieChart, Pie, Sector } from "recharts";
import "./home.css"
import SalesLogo from "../../Icons/icons8-total-sales-24.png";
import CustomerLogo from "../../Icons/icons8-add-user-group-man-man-48.png";
import ProductsIcon from "../../Icons/icons8-grocery-shelf-30.png";
import RevenueLogo from "../../Icons/icons8-transaction-50.png"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

const data = [
          { name: "300k Sales ", value: 400 },
          { name: "20K Sales", value: 300 },
          { name: "328K Sales", value: 300 },
          { name: "98K Sales", value: 200 }
];

const data1 = [
          {
                    uv: 4000,
                    pv: 2400,
                    amt: 2400,
          },
          {
                    uv: 3000,
                    pv: 1398,
                    amt: 2210,
          },
          {
                    uv: 2000,
                    pv: 9800,
                    amt: 2290,
          },
          {
                    uv: 2780,
                    pv: 3908,
                    amt: 2000,
          },
          {
                    uv: 1890,
                    pv: 4800,
                    amt: 2181,
          },
          {
                    uv: 2390,
                    pv: 3800,
                    amt: 2500,
          },
          {
                    uv: 3490,
                    pv: 4300,
                    amt: 2100,
          },
];


const data2 = [
          {
                    uv: 1000,
                    pv: 2400,
                    amt: 2400,
          },
          {
                    uv: 9000,
                    pv: 1398,
                    amt: 2210,
          },
         
];


class CustomizedLabel extends PureComponent {
          render() {
                    const { x, y, stroke, value } = this.props;

                    return (
                              <text x={x} y={y} dy={-4} fill={stroke} fontSize={10} textAnchor="middle">
                                        {value}
                              </text>
                    );
          }
}

class CustomizedAxisTick extends PureComponent {
          render() {
                    const { x, y, stroke, payload } = this.props;

                    return (
                              <g transform={`translate(${x},${y})`}>
                                        <text x={0} y={0} dy={16} textAnchor="end" fill="#666" transform="rotate(-35)">
                                                  {payload.value}
                                        </text>
                              </g>
                    );
          }
}



const renderActiveShape = (suman) => {
          const RADIAN = Math.PI / 180;
          const {
                    cx,
                    cy,
                    midAngle,
                    innerRadius,
                    outerRadius,
                    startAngle,
                    endAngle,
                    fill,
                    payload
          } = suman;
        

          return (
                    <g>
                              <text x={cx} y={cy} dy={8} textAnchor="middle" fill={"#1AE0BF"} style={{ fontSize: 13 }}>
                                        {payload.name}
                              </text>
                              <Sector
                                        cx={cx}
                                        cy={cy}
                                        innerRadius={innerRadius}
                                        outerRadius={outerRadius}
                                        startAngle={startAngle}
                                        endAngle={endAngle}
                                        fill={fill}
                              />
                              <Sector
                                        cx={cx}
                                        cy={cy}
                                        startAngle={startAngle}
                                        endAngle={endAngle}
                                        innerRadius={outerRadius + 6}
                                        outerRadius={outerRadius + 10}
                                        fill={fill}
                              />




                    </g>
          );
};
export default function Home() {
          const [activeIndex, setActiveIndex] = useState(0);
          const onPieEnter = useCallback(
                    (_, index) => {
                              setActiveIndex(index);
                    },
                    [setActiveIndex]
          );
          return (
                    <div>
                              <div style={{ display: 'flex', marginLeft: "50px", marginTop: 13 }}>
                                        <div className='introContainer'>
                                                  <div style={{ width: '30%' }}>
                                                            <p style={{ textAlign: 'start', color: "white", marginLeft: 15 }}>Hy! Suman</p>
                                                            <p style={{ textAlign: 'start', color: "#1BDCA2", marginLeft: 15, marginTop: -12, fontSize: 12 }}>You get a crazy growth </p>
                                                            <p style={{ textAlign: 'start', color: "white", marginLeft: 15, fontSize: "13px", marginTop: 40 }}><span>$302k</span> Dollar</p>
                                                            <button style={{ paddingLeft: "25px", paddingRight: '25px', borderRadius: "10px", backgroundColor: "green", color: "white", marginRight: '29%', paddingTop: 4, paddingBottom: 4 }}>View</button>
                                                  </div>
                                                  <div style={{ width: "60%", marginTop: "-23%" }}>
                                                            <PieChart width={400} height={400}>
                                                                      <Pie
                                                                                activeIndex={activeIndex}
                                                                                activeShape={renderActiveShape}
                                                                                data={data}
                                                                                cx={200}
                                                                                cy={200}
                                                                                innerRadius={40}
                                                                                outerRadius={50}
                                                                                fill="#8884d8"
                                                                                dataKey="value"
                                                                                onMouseEnter={onPieEnter}
                                                                      />
                                                            </PieChart>
                                                  </div>

                                        </div>
                                        <div className='itemsContainer'>
                                                  <p style={{ textAlign: "start", marginLeft: "40px", color: "white" }}>Statistics</p>
                                                  <div style={{ display: "flex", marginLeft: "40px" }}>

                                                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                                                      <div style={{ width: "40px", height: '40px', backgroundColor: "black", borderRadius: "50%" }}>
                                                                                <img src={`${SalesLogo}`} style={{ width: "25px", height: "25px", marginTop: 5 }} alt="" />
                                                                      </div>
                                                                      <div>
                                                                                <p style={{ color: "#1BDCA2", marginLeft: "10px", fontSize: 13, marginTop: 20 }}>$400k</p>
                                                                                <p style={{ color: "#A5A1A1", marginLeft: "10px", marginTop: "-14px" }}>Sales</p>
                                                                      </div>
                                                            </div>
                                                            <div style={{ display: 'flex', alignItems: 'center', marginLeft: "50px" }}>
                                                                      <div style={{ width: "40px", height: '40px', backgroundColor: "black", borderRadius: "50%" }}>
                                                                                <img src={`${CustomerLogo}`} style={{ width: "25px", height: "25px", marginTop: 5 }} alt="" />
                                                                      </div>
                                                                      <div>
                                                                                <p style={{ color: "#1BDCA2", marginLeft: "10px", fontSize: 13, marginTop: 20, textAlign: 'start' }}>493K</p>
                                                                                <p style={{ color: "#A5A1A1", marginLeft: "10px", marginTop: "-14px" }}>Customer</p>
                                                                      </div>
                                                            </div>
                                                            <div style={{ display: "flex", alignItems: 'center', marginLeft: "50px" }}>
                                                                      <div style={{ width: "40px", height: '40px', backgroundColor: "black", borderRadius: "50%" }}>
                                                                                <img src={`${ProductsIcon}`} style={{ width: "25px", height: "25px", marginTop: 5 }} alt="" />
                                                                      </div>
                                                                      <div>
                                                                                <p style={{ color: "#1BDCA2", marginLeft: "10px", fontSize: 13, marginTop: 20, textAlign: 'start' }}>40K</p>
                                                                                <p style={{ color: "#A5A1A1", marginLeft: "10px", marginTop: "-14px" }}>Products</p>
                                                                      </div>
                                                            </div>
                                                            <div style={{ display: "flex", alignItems: 'center', marginLeft: "50px" }}>
                                                                      <div style={{ width: "40px", height: '40px', backgroundColor: "black", borderRadius: "50%" }}>
                                                                                <img src={`${RevenueLogo}`} style={{ width: "25px", height: "25px", marginTop: 7 }} alt="" />
                                                                      </div>
                                                                      <div>
                                                                                <p style={{ color: "#1BDCA2", marginLeft: "10px", fontSize: 13, marginTop: 20, textAlign: 'start' }}>$837K</p>
                                                                                <p style={{ color: "#A5A1A1", marginLeft: "10px", marginTop: "-14px" }}>Revenue</p>
                                                                      </div>
                                                            </div>
                                                  </div>
                                        </div>

                              </div>

                              <div style={{ display: 'flex' }}>
                                        <div style={{ width: "38%", marginLeft: "50px", marginTop: "20px" }}>
                                                  <div style={{ display: "flex" }}>
                                                            <div style={{ flex: 1.3, height: "24vh", backgroundColor: "#283046", borderRadius: "10px" }}>
                                                                      <p style={{ color: 'white'  , marginTop:"0px"}}>Orders</p>
                                                                      <p style={{ color: "#1BDCA2", fontSize: "11px", marginTop: "-15px" }}>This month total orders</p>
                                                                      <ResponsiveContainer width="100%" height="100%">
                                                                                <LineChart
                                                                                          width={500}
                                                                                          height={280}
                                                                                          data={data2}
                                                                                          margin={{
                                                                                                    top: 0,
                                                                                                    right: 0,
                                                                                                    left: 0,
                                                                                                    bottom: 50,
                                                                                          }}
                                                                                >
                                                                                          <CartesianGrid strokeDasharray="3 3" />
                                                                                          <XAxis dataKey="name" height={0} tick={<CustomizedAxisTick />} />
                                                                                          <Legend />
                                                                                          {/* <Line type="monotone" dataKey="pv" stroke="#8884d8" label={<CustomizedLabel />} /> */}
                                                                                          <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
                                                                                </LineChart>
                                                                      </ResponsiveContainer>

                                                            </div>
                                                            <div style={{ flex: 2, height: "24vh", backgroundColor: "#283046", marginLeft: "15px", marginRight: "20px", borderRadius: "10px" }}>
                                                                      <p style={{ color: "white" , marginTop:"0px" }}>Sales</p>
                                                                      <p style={{ color: "#1BDCA2", fontSize: "11px", marginTop: "-15px" }}>This month total sales</p>
                                                                      <ResponsiveContainer width="100%" height="100%">
                                                                                <LineChart
                                                                                          width={500}
                                                                                          height={280}
                                                                                          data={data1}
                                                                                          margin={{
                                                                                                    top: 0,
                                                                                                    right: 0,
                                                                                                    left: 0,
                                                                                                    bottom: 50,
                                                                                          }}
                                                                                >
                                                                                          <CartesianGrid strokeDasharray="3 3" />
                                                                                          <XAxis dataKey="name" height={0} tick={<CustomizedAxisTick />} />
                                                                                          <Legend />
                                                                                          {/* <Line type="monotone" dataKey="pv" stroke="#8884d8" label={<CustomizedLabel />} /> */}
                                                                                          <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
                                                                                </LineChart>
                                                                      </ResponsiveContainer>
                                                                      
                                                            </div>
                                                  </div>
                                                  <div style={{ width: "468px", height: "29vh", backgroundColor: "#283046", marginTop: "20px", borderRadius: "10px" , display:'flex' }}>
                                                  <div style={{ width: '34%' }}>
                                                            <p style={{ textAlign: 'start', color: "white", marginLeft: 15 }}>Earnings</p>
                                                            <p style={{ textAlign: 'start', color: "white", marginLeft: 15, marginTop: -12, fontSize: 13 , marginTop:40 }}>This month earnings </p>
                                                            <p style={{ textAlign: 'start', color: "white", marginLeft: 15, fontSize: "13px", marginTop: -10 }}><span>$302k</span> Dollar</p>
                                                            <p style={{ textAlign: 'start', color: "white", marginLeft: 15, fontSize: "11px", marginTop: 10 }}>622% more earning than previous month</p>
                                                            <button style={{ paddingLeft: "25px", paddingRight: '25px', borderRadius: "10px", backgroundColor: "green", color: "white", marginRight: '29%', paddingTop: 4, paddingBottom: 4 }}>View</button>
                                                  </div>
                                                  <div style={{ width: "60%", marginTop: "-23%" }}>
                                                            <PieChart width={400} height={400}>
                                                                      <Pie
                                                                                activeIndex={activeIndex}
                                                                                activeShape={renderActiveShape}
                                                                                data={data}
                                                                                cx={200}
                                                                                cy={200}
                                                                                innerRadius={40}
                                                                                outerRadius={50}
                                                                                fill="#8884d8"
                                                                                dataKey="value"
                                                                                onMouseEnter={onPieEnter}
                                                                      />
                                                            </PieChart>
                                                  </div>
                                                  </div>
                                        </div>
                                        <div style={{ width: "56%", height: "55vh", backgroundColor: "#283046", marginTop: "20px", borderRadius: '10px' }}>
                                                  <ResponsiveContainer width="100%" height="100%">
                                                            <LineChart
                                                                      width={500}
                                                                      height={300}
                                                                      data={data1}
                                                                      margin={{
                                                                                top: 20,
                                                                                right: 30,
                                                                                left: 20,
                                                                                bottom: 10,
                                                                      }}
                                                            >
                                                                      <CartesianGrid strokeDasharray="3 3" />
                                                                      <XAxis dataKey="name" height={60} tick={<CustomizedAxisTick />} />
                                                                      <YAxis />
                                                                      <Tooltip />
                                                                      <Legend />
                                                                      <Line type="monotone" dataKey="pv" stroke="#8884d8" label={<CustomizedLabel />} />
                                                                      <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
                                                            </LineChart>
                                                  </ResponsiveContainer>
                                        </div>
                              </div>
                    </div>
          )
}
