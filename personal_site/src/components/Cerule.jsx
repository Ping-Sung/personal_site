import { api_path } from '../api_path'
import React from 'react'
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../css/cerule.css";

function Cerule(prop) {
    const [isAuthenticated, setIsAuthenticated] = React.useState(null);
    const loggedInUser = localStorage.getItem("authenticated");
    const endpoint = api_path + "/api/cerule/"

    React.useEffect(() => {
        if (loggedInUser) {
            setIsAuthenticated(loggedInUser);
        }
    }, []);

    const [data, setData] = React.useState({
        name: "",
        sex: "男",
        email: "",
        line: "",
        phone: "",
        age: "30以下",
        address: "",
        note: ""
    });

    const handleChange = ({ currentTarget: input }) => {
        let newData = { ...data };
        newData[input.name] = input.value;
        setData(newData);
        console.log(data);
    };


    const handleSubmit = async (e) => {
        e.preventDefault();
        // console.log(data);

        // console.log(isAuthenticated);

        const formData = new FormData();
        formData.append('name', data.name);
        formData.append('sex', data.sex);
        formData.append('email', data.email);
        formData.append('line', data.line);
        formData.append('phone', data.phone);
        formData.append('age', data.age);
        formData.append('address', data.address);
        formData.append('note', data.note);


        const requestOptions = {
            method: 'POST',
            headers: {
                'Authorization': 'Bearer ' + isAuthenticated
            },
            body: formData
        };
        try {
            const response = await fetch(endpoint, requestOptions);
            const data = await response.json(); // 解析响应的 JSON 数据

            if (response.ok) {
                console.log(data.name); // 访问 name 字段
            } else {
                console.log('请求不成功');
            }

        } catch (error) {
            console.log(error);
        }
    };
    return (
        <Form className='cerule'>
            <Row>
                <Col>
                    <Form.Group className="mb-1" controlId="nameInput">
                        <Form.Label>名字</Form.Label>
                        <Form.Control
                            type="text"
                            name="name"
                            value={data.name}
                            onChange={(e) => {
                                handleChange(e);
                            }}
                            maxLength={80}
                        />
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group className="mb-1" controlId="sexInput">
                        <Form.Label>性别</Form.Label>
                        <Form.Control
                            as="select"
                            name="sex"
                            onChange={(e) => {
                                handleChange(e);
                            }}
                            defaultValue={data.sex}
                        >
                            <option value="男">男</option>
                            <option value="女">女</option>
                            <option value="其他">其他</option>
                        </Form.Control>
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group className="mb-1" controlId="ageInput">
                        <Form.Label>年齡</Form.Label>
                        <Form.Control
                            as="select"
                            name="age"
                            onChange={(e) => {
                                handleChange(e);
                            }}
                            defaultValue={data.age}
                        >
                            <option value="30以下">30以下</option>
                            <option value="30-39">30-39</option>
                            <option value="40-49">40-49</option>
                            <option value="50-59">50-59</option>
                            <option value="60-69">60-69</option>
                            <option value="70-79">70-79</option>
                            <option value="80以上">80以上</option>
                        </Form.Control>
                    </Form.Group>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Form.Group className="mb-2" controlId="emailInput">
                        <Form.Label>email</Form.Label>
                        <Form.Control
                            type="text"
                            name="email"
                            value={data.email}
                            onChange={(e) => {
                                handleChange(e);
                            }}
                        />
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group className="mb-1" controlId="lineInput">
                        <Form.Label>line</Form.Label>
                        <Form.Control
                            type="text"
                            name="line"
                            value={data.line}
                            onChange={(e) => {
                                handleChange(e);
                            }}
                        />
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group className="mb-1" controlId="phoneInput">
                        <Form.Label>手機/電話</Form.Label>
                        <Form.Control
                            type="text"
                            name="phone"
                            value={data.phone}
                            onChange={(e) => {
                                handleChange(e);
                            }}
                        />
                    </Form.Group>
                </Col>
            </Row>

            <Row>
                <Form.Group className="mb-1" controlId="addressInput">
                    <Form.Label>地址</Form.Label>
                    <Form.Control
                        type="text"
                        name="address"
                        value={data.address}
                        onChange={(e) => {
                            handleChange(e);
                        }}
                    />
                </Form.Group>
            </Row>
            <Row>
                <Form.Group className="mb-1" controlId="noteInput">
                    <Form.Label>備註</Form.Label>
                    <Form.Control
                        as="textarea"
                        name="note"
                        value={data.note}
                        onChange={(e) => {
                            handleChange(e);
                        }}
                        rows={5}
                    />
                </Form.Group>
            </Row>
            <br />
            <Button
                variant="primary"
                type="submit"
                onClick={(e) => handleSubmit(e)}
            >
                輸出
            </Button>
        </Form>



    )
}

export default Cerule  