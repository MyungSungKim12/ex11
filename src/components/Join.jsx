
import React, { useState } from 'react'
import { Button, Card, Form, Row } from 'react-bootstrap'
import { app } from '../firebaseInit'
import {getAuth, createUserWithEmailAndPassword} from 'firebase/auth'
import {getFirestore, setDoc, doc} from 'firebase/firestore'


const Join = ({history}) => {
  const db = getFirestore(app);
  const auth = getAuth(app);
  const [form, setForm] = useState({
    email:'user01@email.com',
    password: '12341234'
  })
  const {email, password} = form;
  const onChange = (e) =>{
    setForm({
      ...form,
      [e.target.name]:e.target.value
    })
  }
  const onSubmit = (e) =>{
    e.preventDefault();
    // console.log(form)
    if(!window.confirm("입력하신 정보로 회원가입 하시겠습니까?")) return;
    createUserWithEmailAndPassword(auth, email, password)
    .then((success)=>{
      //유저정보저장
      setDoc(doc(db, 'users', email),{
        email:email, name:'', address:'', photo:''
      })
      alert("회원가입 성공");
      history.push('/login');
    })
    .catch((error)=>{
      alert("회원가입 실패" + error.message);
    })
    
    
  }
  return (
    <Row className='justify-content-center'>
    <Card style={{ width: '18rem' }}>
      <Card.Title className='p-3 text-center'>
        <h3 style={{ margin: '0px 10px 0px 0px', fontStyle: 'bold' }}>회원가입</h3>
      </Card.Title>
      <Card.Body>
        <Form className='mb-2' onSubmit={onSubmit}>
          <Form.Control placeholder='Email' className='mb-2' value={email} name="email" onChange={onChange}/>
          <Form.Control placeholder='Password' className='mb-2' type='password' value={password} name='password' 
          onChange={onChange}/>
          <Button style={{ width: '100%' }} type="submit">회원가입</Button>
        </Form>
      </Card.Body>
    </Card>
  </Row>
  )
}

export default Join