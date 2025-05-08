import React, { useState } from "react";
import axios from 'axios';
import styled from 'styled-components';

function Authentication() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [signupSuccess, setSignupSuccess] = useState(false);
    const [signupError, setSignupError] = useState('');
    const [signinSuccess, setSigninSuccess] = useState(false);
    const [signinError, setSigninError] = useState('');
    const [activeTab, setActiveTab] = useState('signup');
    const [signedUpUser, setSignedUpUser] = useState('');
    const [signedInUser, setSignedInUser] = useState('');

    const handleSignUp = async () => {
        try {
            const response = await axios.post('http://localhost:3000/signup', { name, email, password });
            console.log(response.data);
            setSignedUpUser(name);
            setSignupSuccess(true);
            setSignupError('');
            // Scroll to the top of the page
            window.scrollTo(0, 0);
        } catch (error) {
            console.error('Error signing up:', error.message);
            setSignupError('An error occurred while processing your request.');
            setSignupSuccess(false);
        }
    };

    const handleSignIn = async () => {
        try {
            const response = await axios.post('http://localhost:3000/signin', { email, password });
            console.log(response.data);
            setSignedInUser(email);
            setSigninSuccess(true);
            setSigninError('');
            window.location.href = '/truck';
        } catch (error) {
            console.error('Error signing in:', error.message);
            setSigninError('An error occurred while processing your request.');
            setSigninSuccess(false);
        }
    };

    const handleTabChange = (tab) => {
        setActiveTab(tab);
        setSignupSuccess(false);
        setSignupError('');
        setSigninSuccess(false);
        setSigninError('');
    };

    return (
        <Container>
            {signupSuccess && <SuccessMessage>{signedUpUser} signed up successfully!</SuccessMessage>}
            {signinSuccess && <SuccessMessage>{signedInUser} signed in successfully!</SuccessMessage>}
            <TabContainer>
                <TabButton active={activeTab === 'signup'} onClick={() => handleTabChange('signup')}>Sign Up</TabButton>
                <TabButton active={activeTab === 'signin'} onClick={() => handleTabChange('signin')}>Sign In</TabButton>
            </TabContainer>
            {activeTab === 'signup' && (
                <Form>
                    <Title>Create Account</Title>
                    <Input type='text' placeholder='Name' value={name} onChange={(e) => setName(e.target.value)} autoComplete="off" />
                    <Input type='email' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} autoComplete="off" />
                    <Input type='password' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} autoComplete="off" />
                    <Button onClick={handleSignUp}>Sign Up</Button>
                    {signupError && <ErrorMessage>Error: {signupError}</ErrorMessage>}
                </Form>
            )}
            {activeTab === 'signin' && (
                <Form>
                    <Title>Sign In</Title>
                    <Input type='email' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} autoComplete="off" />
                    <Input type='password' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} autoComplete="off" />
                    <Button onClick={handleSignIn}>Sign In</Button>
                    {signinError && <ErrorMessage>Error: {signinError}</ErrorMessage>}
                </Form>
            )}
        </Container>
    );
}

const Container = styled.div`
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  position: relative;
  overflow: hidden;
  width: 400px;
  margin: 20px auto;
  padding: 20px;
`;

const TabContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const TabButton = styled.button`
  padding: 10px;
  background-color: ${({ active }) => (active ? '#00008B' : '#ccc')};
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  flex: 1;

  &:hover {
    background-color: ${({ active }) => (active ? '#0056b3' : '#ccc')};
  }
`;

const Form = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.h2`
  text-align: center;
  margin-bottom: 20px;
`;

const Input = styled.input`
  margin-bottom: 10px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Button = styled.button`
  padding: 10px;
  background-color: #00008B;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const ErrorMessage = styled.p`
  color: red;
  margin-bottom: 10px;
`;

const SuccessMessage = styled.p`
  color: green;
  margin-bottom: 10px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: #00FF00;
  text-align: center;
  padding: 10px 0;
`;

export default Authentication;
