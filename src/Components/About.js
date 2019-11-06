import React, { Component } from 'react';
import { Link } from "react-router-dom";

import { Card, Icon, Avatar } from 'antd';
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
            <div className="team">
                <div classNAme="teamComposite">
                    <Card
                        style={{ width: 300 }}
                        cover={
                            <img
                                alt="example"
                                src={team_comp}
                            />
                        }
                        actions={[
                            <Icon type="setting" key="setting" />,
                            <Icon type="edit" key="edit" />,
                            <Icon type="ellipsis" key="ellipsis" />,
                        ]}
                    >
                        <Meta
                            avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                            title="Card title"
                            description="This is the description"
                        />
                    </Card>
                </div>
                <div className="cardsContainer">
                    <div className="aniketCard">
                        <Card
                            style={{ width: 300 }}
                            cover={
                                <img
                                    alt="example"
                                    src={aniket_solo}
                                />
                            }
                            actions={[
                                <Icon type="setting" key="setting" />,
                                <Icon type="edit" key="edit" />,
                                <Icon type="ellipsis" key="ellipsis" />,
                            ]}
                        >
                            <Meta
                                avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                                title="Aniket Pant"
                                description="Data Analyst and Engineer"
                            />
                        </Card>
                    </div>
                    <div className="coleCard">
                        <Card
                            style={{ width: 300 }}
                            cover={
                                <img
                                    alt="example"
                                    src={cole_solo}
                                />
                            }
                            actions={[
                                <Icon type="setting" key="setting" />,
                                <Icon type="edit" key="edit" />,
                                <Icon type="ellipsis" key="ellipsis" />,
                            ]}
                        >
                            <Meta
                                avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                                title="Cole McKee"
                                description="UI/UX, Web Design"
                            />
                        </Card>
                    </div>
                    <div className="virajCard">
                        <Card
                            style={{ width: 300 }}
                            cover={
                                <img
                                    alt="example"
                                    src={viraj_solo}
                                />
                            }
                            actions={[
                                <Icon type="setting" key="setting" />,
                                <Icon type="edit" key="edit" />,
                                <Icon type="ellipsis" key="ellipsis" />,
                            ]}
                        >
                            <Meta
                                avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                                title="Viraj Kacker"
                                description="UI/UX, Web Design"
                            />
                        </Card>
                    </div>
                    <div className="lonnieCard">
                        <Card
                            style={{ width: 300 }}
                            cover={
                                <img
                                    alt="example"
                                    src={viraj_solo}
                                />
                            }
                            actions={[
                                <Icon type="setting" key="setting" />,
                                <Icon type="edit" key="edit" />,
                                <Icon type="ellipsis" key="ellipsis" />,
                            ]}
                        >
                            <Meta
                                avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                                title="Lonnie Webb"
                                description="Predictive Modeling"
                            />
                        </Card>
                    </div>
                </div>
            </div>
            <Link to={process.env.PUBLIC_URL + '/'}>
                <button>Back to home page</button>
            </Link>
        </div>
    )
}
