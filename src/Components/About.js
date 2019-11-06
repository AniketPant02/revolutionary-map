import React, { Component } from 'react';
import { Link } from "react-router-dom";

import { Card, Icon, Avatar, Row, Col } from 'antd';
// image imports for team
import team_comp from './images/about_us/team_comp.JPG';
import aniket_solo from './images/about_us/aniket_solo.JPG';
import cole_solo from './images/about_us/cole_solo.JPG';
import viraj_solo from './images/about_us/viraj_solo.JPG';
import lonnie_solo from './images/about_us/lonnie_solo.JPG';
import "./About.css";

const { Meta } = Card;

export default function About() { // no state needed so functional component used
    return (
        <div className="About">
            <div className="header">
                <p>Meet the Team</p>
            </div>
            <Row>
                <Col span={12}
                    style={
                        {
                            padding: 10,
                            width: 400,
                            height: 800
                        }
                    }
                >
                    <Card
                        hoverable={true}
                        cover={
                            <img
                                alt="example"
                                src={team_comp}
                            />
                        }
                    >
                        <Meta
                            title="JCIB ForensX"
                            description="The JCIB ForensX team was founded in 2017 as a school team housed at the Jefferson County International Baccalaureate (JCIB) school.
                            After recognizing a lack of Computer Science-focused extracurricular activities at the JCIB program, the team formed with the directive of increasing Computer Science engagement within the student body.
                            The ForensX team looks to leverage emerging technology for the positive development of our community."
  />
                    </Card>
                </Col>
                <Col span={12}
                    style={
                        {
                            padding: 10,
                            width: 900,
                            height: 800
                        }
                    }>
                    <Row>
                        <Col span={6}>
                            <Card
                                style={
                                    {
                                        padding: 10
                                    }
                                }
                                hoverable={true}
                                cover={
                                    <img
                                        alt="Aniket Pant"
                                        src={aniket_solo}
                                    />
                                }
                                actions={[
                                    <Icon type="setting" key="setting" />,
                                    <Icon type="edit" key="edit" />,
                                ]}
                            >
                                <Meta
                                    avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                                    title="Aniket Pant"
                                    description="Data Analytics and Visualization"
                                />
                            </Card>
                        </Col>
                        <Col span={6}>
                            <Card
                                style={
                                    {
                                        padding: 10
                                    }
                                }
                                hoverable={true}
                                cover={
                                    <img
                                        alt="example"
                                        src={cole_solo}
                                    />
                                }
                                actions={[
                                    <Icon type="setting" key="setting" />,
                                    <Icon type="edit" key="edit" />,
                                ]}
                            >
                                <Meta
                                    avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                                    title="Cole McKee"
                                    description="UI/UX, Web Development"
                                />
                            </Card>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={6}>
                            <Card
                                style={
                                    {
                                        padding: 10
                                    }
                                }
                                hoverable={true}
                                cover={
                                    <img
                                        alt="example"
                                        src={viraj_solo}
                                    />
                                }
                                actions={[
                                    <Icon type="setting" key="setting" />,
                                    <Icon type="edit" key="edit" />,
                                ]}
                            >
                                <Meta
                                    avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                                    title="Viraj Kacker"
                                    description="Arizona Plane Ticket Owner"
                                />
                            </Card>
                        </Col>
                        <Col span={6}>
                            <Card
                                style={
                                    {
                                        padding: 10
                                    }
                                }
                                hoverable={true}
                                cover={
                                    <img
                                        alt="example"
                                        src={lonnie_solo}
                                    />
                                }
                                actions={[
                                    <Icon type="setting" key="setting" />,
                                    <Icon type="edit" key="edit" />,
                                ]}
                            >
                                <Meta
                                    avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                                    title="Lonnie Webb"
                                    description="Predictive Modeling"
                                />
                            </Card>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Link to={process.env.PUBLIC_URL + '/'}>
                <button className="homeButton">Back to home page</button>
            </Link>
        </div >
    )
}
