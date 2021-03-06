import React, {Component} from 'react';
import {
    Modal,
    Button,
    Row,
    Col,
    Form
} from 'react-bootstrap';

export class EditEmployee extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        fetch(process.env.REACT_APP_API + 'employee', {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(
                {EmployeeID: event.target.EmployeeID.value, EmoployeeName: event.target.EmoployeeName.value}
            )
        }).then(res => res.json()).then((result) => { // alert(result);
            this.props.onHide()
        }, (error) => {
            alert('Failed');
        })
    }
    render() {
        return (
            <div className="container">

                <Modal {...this.props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
                    <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title-vcenter">
                            Edit Department
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>

                        <Row>
                            <Col sm={6}>
                                <Form onSubmit={
                                    this.handleSubmit
                                }>
                                    <Form.Group controlId="EmployeeID" className="mb-2">
                                        <Form.Label>EmployeeID</Form.Label>
                                        <Form.Control type="text" name="EmployeeID" required disabled
                                            defaultValue={
                                                this.props.empid
                                            }
                                            placeholder="EmployeeID"/>
                                    </Form.Group>

                                    <Form.Group controlId="EmoployeeName" className="mb-3">
                                        <Form.Label>EmoployeeName</Form.Label>
                                        <Form.Control type="text" name="EmoployeeName" required
                                            defaultValue={
                                                this.props.empname
                                            }
                                            placeholder="EmoployeeName"/>
                                    </Form.Group>

                                    <Form.Group>
                                        <Button variant="primary" type="submit">
                                            Update Employee
                                        </Button>
                                    </Form.Group>
                                </Form>
                            </Col>
                        </Row>
                    </Modal.Body>

                    <Modal.Footer>
                        <Button variant="danger"
                            onClick={
                                this.props.onHide
                        }>Close</Button>
                    </Modal.Footer>

                </Modal>

            </div>
        )
    }

}
