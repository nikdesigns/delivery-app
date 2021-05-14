import React from 'react';
import pizzas from '../pizzasdata';
import Pizza from '../components/Pizza';

export default function Homescreen() {
  return (
    <div>
      <div className="container mt-3">
        <div className="row">
          {pizzas.map((pizza) => {
            return (
              <div className="col-md-4 my-4 px-4">
                <Pizza pizza={pizza} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
