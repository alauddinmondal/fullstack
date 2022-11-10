import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import React, { Component } from "react";
import Plan from "./Plan";
import axios from "axios";

const ai = axios.create({
  baseURL : "http://127.0.0.1:8000/api"
})

export default class AlaForm extends Component {
  state = {
    items: [],
    text: "",
  };
  showPlanData = () => {
    ai.get("/list/").then((res) => {
      // console.log(res.data);
      this.setState({
        items: res.data,
      });
    });
  };
  handleChnage = (e) => {
    this.setState({ text: e.target.value });
  };

  collectInfo = (d) => {
    if (this.state.text !== "") {
      ai.post("/create/", d).then((res) => {
        this.setState({ text: " " });
        this.showPlanData();
      });
    }
  };

  handAddelement = (e) => {
    let dt = { itemname: this.state.text };
    this.collectInfo(dt);

    // if (this.state.text !== "") {
    //   const items = [...this.state.items, this.state.text];

    //   this.setState({ items: items, text: "" });
    // }
  };

  handDelete = (id) => {

    ai.delete(`/delete/${id}`).then((res)=>{

      this.showPlanData()
    })


    // const OldItems = [...this.state.items];

    // const NewItems = OldItems.filter((elements, i) => {
    //   return i !== id;
    // });

    // this.setState({ items: NewItems });
  };

  componentDidMount() {
    this.showPlanData();
  }

  render() {
    return (
      <Container>
        <Row>
          <Col>
            <input
              type="text"
              value={this.state.text}
              onChange={this.handleChnage}
            />

            <Button
              onClick={this.handAddelement}
              variant="primary"
              type="submit"
            >
              Submit
            </Button>

            <ul>
              {this.state.items.map((value, i) => {
              
                return (
                  <Plan
                    key={i}
                    id={value.id}
                    value={value.itemname}
                    sendData={this.handDelete}
                  />
                );
              })}
            </ul>

            {/* <ul>
              <Plan p={this.state.items} sendData={this.handDelete}/>
            </ul> */}
          </Col>
        </Row>
      </Container>
    );
  }
}
