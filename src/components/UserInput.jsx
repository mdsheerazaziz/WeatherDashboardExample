import React, { useState } from "react";
import { Row, Input, Button } from "antd";
const UserInput = ({ handleAddCity }) => {
  const [newCity, setNewCity] = useState();
  return (
    <Row>
      <div style={{ width: "30%" }}>
        <Input
          placeholder="Enter the city"
          onChange={(e) => {
            setNewCity(e.target.value);
          }}
          onPressEnter={() => handleAddCity(newCity)}
        />
      </div>
      <Button type="primary" onClick={() => handleAddCity(newCity)}>
        Add
      </Button>
    </Row>
  );
};

export default UserInput;
