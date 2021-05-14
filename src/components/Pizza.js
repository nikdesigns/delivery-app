import React, { useState } from 'react';
import { Select, Button, Heading, Pane, Dialog } from 'evergreen-ui';
import TextTruncate from 'react-text-truncate';

export default function Pizza({ pizza }) {
  const [quantity, setQuantity] = useState(1);
  const [varient, setVarient] = useState('small');
  const [isShown, setIsShown] = useState(false);
  return (
    <div className="card h-100">
      <img
        onClick={() => setIsShown(true)}
        className="card-img-top"
        src={pizza.image}
        alt={pizza.name}
      />
      <div className="card-body">
        <h5 className="card-title">{pizza.name}</h5>
        <p className="card-text">
          <TextTruncate
            line={2}
            element="p"
            truncateText="…"
            text={pizza.description}
            textTruncateChild={<a href="#">Read more</a>}
          />
        </p>
        <div className="d-flex justify-content-around pb-4">
          <div className="w-100">
            <p>Varient</p>
            <Select
              value={varient}
              onChange={(e) => {
                setVarient(e.target.value);
              }}
              className="w-100"
            >
              {pizza.varients.map((varient) => {
                return <option value={varient}>{varient}</option>;
              })}
            </Select>
          </div>
          <div className="w-100">
            <p>Quantity</p>
            <Select
              value={quantity}
              onChange={(e) => {
                setQuantity(e.target.value);
              }}
              className="w-100"
            >
              {[...Array(10).keys()].map((x, i) => {
                return <option value={i + 1}>{i + 1}</option>;
              })}
            </Select>
          </div>
        </div>
        <div className="d-flex justify-content-between">
          <div className="w-100">
            <Heading size={700} marginTop={16}>
              Price: {pizza.prices[0][varient] * quantity}
            </Heading>
          </div>
          <div className="w-100 ">
            <Button marginRight={16} intent="none" appearance="primary">
              Add to Cart
            </Button>
          </div>
        </div>
      </div>
      <Pane>
        <Dialog
          isShown={isShown}
          title={pizza.name}
          intent="info"
          onCloseComplete={() => setIsShown(false)}
          confirmLabel="Custom Label"
          hasFooter={false}
        >
          <img className="card-img-top" src={pizza.image} alt={pizza.name} />
          {pizza.description}
        </Dialog>
      </Pane>
    </div>
  );
}
