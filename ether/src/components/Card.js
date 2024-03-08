
import React from 'react';
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBBtn, MDBInput } from 'mdb-react-ui-kit';

export default function Card({ title, value, address, button, onClick, onChange }) {
  return (
    <MDBCard style={{ width: '18rem', margin: '1rem' }}>
      <MDBCardBody>
        <MDBCardTitle>{title}:</MDBCardTitle>
        {title === 'USDT Balance' && (
          <MDBInput
            type="text"
            label="Enter Ethereum Address"
            onChange={onChange}
            value={address}
          />
        )}
        <MDBCardText>{value}</MDBCardText>
        {button && <MDBBtn onClick={onClick}>{button}</MDBBtn>}
      </MDBCardBody>
    </MDBCard>
  );
}
