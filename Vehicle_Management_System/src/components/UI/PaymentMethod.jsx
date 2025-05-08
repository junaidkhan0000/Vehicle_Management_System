import React, { useState } from 'react';

const PaymentMethod = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const openScanner = () => {
    const scannerContainer = document.getElementById('scannerContainer');
    const originalContent = scannerContainer.innerHTML;
    const scannerImage = document.createElement('img');
    scannerImage.src = '/Scanner.png';
    scannerImage.alt = 'Scanner';
    scannerImage.width = 200;
    scannerImage.height = 200;
    scannerContainer.innerHTML = '';
    scannerContainer.appendChild(scannerImage);

    scannerImage.addEventListener('click', function () {
      scannerContainer.innerHTML = originalContent;
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (isSubmitting) {
      return;
    }

    setIsSubmitting(true);

    const amount = document.getElementById('amount').value;
    const upiID = document.getElementById('upiID').value;

    if (isValidUPI(upiID)) {
      try {
        const response = await fetch('http://localhost:3000/process-payment', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ amount, upiID }),
        });

        const data = await response.json();

        if (data.status === 'success') {
          alert(data.message);
          // Clear the input fields
          document.getElementById('amount').value = '';
          document.getElementById('upiID').value = '';
        } else {
          alert(data.message);
        }
      } catch (error) {
        console.error('Error processing payment:', error);
        alert('Error processing payment. Please try again.');
      } finally {
        setIsSubmitting(false);
      }
    } else {
      alert('Invalid UPI ID format. Please enter a valid UPI ID.');
      setIsSubmitting(false);
    }
  };

  const isValidUPI = (upiID) => {
    return /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+$/.test(upiID);
  };

  return (
    <div style={{
      maxWidth: '400px',
      margin: '50px auto',
      padding: '20px',
      border: '1px solid #ccc',
      borderRadius: '8px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    }}>
      <h1 style={{ textAlign: 'center', marginBottom: '20px', color: '#333' }}>UPI Payment</h1>
      <div style={{ marginBottom: '20px' }}>
        <button id="scanButton" onClick={openScanner} style={{
          width: '100%',
          padding: '12px',
          backgroundColor: '#00008B',
          color: '#fff',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          fontSize: '16px',
        }}>
          Scan QR Code
        </button>
      </div>
      <div id="scannerContainer"></div>
      <form id="paymentForm" onSubmit={handleSubmit} style={{ width: '100%' }}>
        <div style={{ marginBottom: '15px', width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <label htmlFor="amount" style={{ marginBottom: '5px', fontSize: '16px' }}>Amount</label>
          <input type="number" id="amount" name="amount" min="1" max="25000" required style={{
            padding: '10px',
            borderRadius: '5px',
            border: '1px solid #ccc',
            fontSize: '16px',
            width: '100%',
          }} />
        </div>
        <div style={{ marginBottom: '15px', width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <label htmlFor="upiID" style={{ marginBottom: '5px', fontSize: '16px' }}>UPI ID</label>
          <input type="text" id="upiID" name="upiID" required style={{
            padding: '10px',
            borderRadius: '5px',
            border: '1px solid #ccc',
            fontSize: '16px',
            width: '100%',
          }} />
        </div>
        <button type="submit" disabled={isSubmitting} style={{
          padding: '12px',
          backgroundColor: '#00008B',
          color: '#fff',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          fontSize: '16px',
          width: '100%',
        }}>
          Pay
        </button>
      </form>
      <div id="result"></div>
    </div>
  );
};

export default PaymentMethod;
