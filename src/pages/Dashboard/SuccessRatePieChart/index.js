import React from "react";
import Chart from 'react-apexcharts';
import {Card, Typography, Grid, Box, List, ListItem, ListItemText, Divider} from "@mui/material";

const SuccessRatePieChart = () => {
    const chartData1 = {
        series: [70, 30],
        options: {
            chart: {
                type: 'pie',
            },
            labels: ['Kazanımları Tamamlamış', 'Kazanımları Tamamlamamış'],
            colors: ['#008FFB', '#FF4560'],
            title: {
                text: "9. Sınıflar",
                align: 'left',
                style: {
                    fontSize: '14px',
                    color: '#263238'
                },
            }
        }
    };
    const chartData2 = {
        series: [60, 40],
        options: {
            chart: {
                type: 'pie',
            },
            labels: ['Kazanımları Tamamlamış', 'Kazanımları Tamamlamamış'],
            colors: ['#008FFB', '#FF4560'],
            title: {
                text: "10. Sınıflar",
                align: 'left',
                style: {
                    fontSize: '14px',
                    color: '#263238'
                },
            }
        }
    };

    const chartData3 = {
        series: [67, 33],
        options: {
            chart: {
                type: 'pie',
            },
            labels: ['Kazanımları Tamamlamış', 'Kazanımları Tamamlamamış'],
            colors: ['#008FFB', '#FF4560'],
            title: {
                text: "11. Sınıflar",
                align: 'left',
                style: {
                    fontSize: '14px',
                    color: '#263238'
                },
            }
        }
    };
    const chartData4 = {
        series: [88, 12],
        options: {
            chart: {
                type: 'pie',
            },
            labels: ['Kazanımları Tamamlamış', 'Kazanımları Tamamlamamış'],
            colors: ['#008FFB', '#FF4560'],
            title: {
                text: "12. Sınıflar",
                align: 'left',
                style: {
                    fontSize: '14px',
                    color: '#263238'
                },
            }
        }
    };

    return(
        <>
            <Box px="10px" py="10px">
                <Typography variant = 'h5'>
                    Sınıfların Başarı Oranları
                </Typography>
                <Box display = "flex" justifyContent='space-between'>
                    <Card style = {{
                        marginTop: "20px",
                        marginRight: "5px"
                    }}>
                        <Box p = "5px" display = "flex">
                            <Chart
                                options={chartData1.options}
                                series={chartData1.series}
                                type="pie"
                                width="400"
                            />
                            <Divider orientation="vertical" flexItem />
                            <List style = {{
                                marginLeft: "5px",
                            }}>
                                <Typography>En Çok Hata Yapılan Kazanımlar</Typography>
                                <ListItem>
                                    <ListItemText secondary="Kazanım 1" />
                                </ListItem>
                                <ListItem>
                                    <ListItemText secondary="Kazanım 2" />
                                </ListItem>
                                <ListItem>
                                    <ListItemText secondary="Kazanım 3" />
                                </ListItem>
                            </List>
                        </Box>
                    </Card>
                    <Card style = {{
                        marginTop: "20px",
                    }}>
                        <Box p = "5px" display = "flex">
                            <Chart
                                options={chartData2.options}
                                series={chartData2.series}
                                type="pie"
                                width="400"
                            />
                            <Divider orientation="vertical" flexItem />
                            <List style = {{
                                marginLeft: "5px",
                            }}>
                                <Typography>En Çok Hata Yapılan Kazanımlar</Typography>
                                <ListItem>
                                    <ListItemText secondary="Kazanım 1" />
                                </ListItem>
                                <ListItem>
                                    <ListItemText secondary="Kazanım 2" />
                                </ListItem>
                                <ListItem>
                                    <ListItemText secondary="Kazanım 3" />
                                </ListItem>
                            </List>
                        </Box>
                    </Card>
                </Box>
                  <Box display = "flex" justifyContent = "space-evenly">
                      <Card style = {{
                          marginTop: "20px",
                          marginRight: "5px"
                      }}>
                          <Box p = "10px" display = "flex">
                              <Chart
                                  options={chartData3.options}
                                  series={chartData3.series}
                                  type="pie"
                                  width="400"
                              />
                              <Divider orientation="vertical" flexItem />
                              <List style = {{
                                  marginLeft: "5px",
                              }}>
                                  <Typography>En Çok Hata Yapılan Kazanımlar</Typography>
                                  <ListItem>
                                      <ListItemText secondary="Kazanım 1" />
                                  </ListItem>
                                  <ListItem>
                                      <ListItemText secondary="Kazanım 2" />
                                  </ListItem>
                                  <ListItem>
                                      <ListItemText secondary="Kazanım 3" />
                                  </ListItem>
                              </List>
                          </Box>
                      </Card>
                      <Card style = {{
                          marginTop: "20px",
                      }}>
                          <Box p = "10px" display = "flex">
                              <Chart
                                  options={chartData4.options}
                                  series={chartData4.series}
                                  type="pie"
                                  width="400"
                              />
                              <Divider orientation="vertical" flexItem />
                              <List style = {{
                                  marginLeft: "5px",
                              }}>
                                  <Typography>En Çok Hata Yapılan Kazanımlar</Typography>
                                  <ListItem>
                                      <ListItemText secondary="Kazanım 1" />
                                  </ListItem>
                                  <ListItem>
                                      <ListItemText secondary="Kazanım 2" />
                                  </ListItem>
                                  <ListItem>
                                      <ListItemText secondary="Kazanım 3" />
                                  </ListItem>
                              </List>
                          </Box>
                      </Card>
                  </Box>
            </Box>
        </>
    )
}

export default SuccessRatePieChart;