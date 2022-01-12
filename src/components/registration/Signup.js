import React from 'react';
import Button from '../button-component/Button';

const Signup = () => {
  return (
    <div>
      <div className='left'>
        <div>
          <img src='' alt='' />
        </div>
        <p>
          ShopRacks, as a business solution leverages on
          technology to facilitate the core aspect of your
          online store. We provides a platform for you to
          easily document, send and track invoices. You can
          also manage and track inventories, orders and
          deliveries seemlessly
        </p>
        <p>Shopracks, Nigeria</p>
        <p>OTHER FINANCE PRODUCTS</p>
        <div>
          <p>Shopracks Subscriptions</p>
          <p>Shopracks Expenses</p>
        </div>
      </div>
      <div className='right'>
        <img src='' alt='' />
        <form action=''>
          <input type='text' placeholder='Company Name' />
          <input type='text' placeholder='Email Address' />
          <input type='text' placeholder='Password' />
          <input type='text' placeholder='Phone Number' />
          <input type='checkbox' />
          <Button text='SIGN UP' background />
          <p>
            Already have a Shopracks account?
            <span>Sign In</span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;
