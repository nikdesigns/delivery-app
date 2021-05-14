import React from 'react';
import { Pane, Heading, Link } from 'evergreen-ui';

const Navbar = () => {
  return (
    <div>
      <Pane display="flex" padding={16} background="tint2" borderRadius={3}>
        <Pane flex={1} alignItems="center" display="flex">
          <Heading size={600}>Food Delivery</Heading>
        </Pane>
        <Pane>
          {/* Below you can see the marginRight property on a Button. */}

          <div>
            <Link marginRight={16} href="#">
              Login
            </Link>
            <Link href="#" marginRight={12}>
              Cart
            </Link>
          </div>
        </Pane>
      </Pane>
    </div>
  );
};

export default Navbar;
