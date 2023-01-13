import React,{ useState } from 'react'
import { PaystackButton } from 'react-paystack'
import styled from 'styled-components'

const Container = styled.div `
  
  .item {
  width: 50%;
  position: relative;
}

.item-image {
  height: 430px;
  width: 100%;
  object-fit: cover;
}

.overlay-effect {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  opacity: 0.2;
  background-color: #303030;
  overflow: hidden;
  z-index: 1;
}

.item-details {
  position: absolute;
  bottom: 0;
  margin-bottom: 5px;
  margin-left: 20px;
  color: #84a17d;
  text-align: left;
}

.item-details__title {
  font-size: 22px;
}

.item-details__amount {
  font-weight: bolder;
}

.checkout {
  background: #84a17d; /* fallback for old browsers */

  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 430px;
  width: 50%;
}

.checkout-form {
  padding: 20px 20px;
}

.checkout-field {
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
}

.checkout-field label {
  text-align: left;
  color: #e0eafc;
  font-size: 10px;
  margin-bottom: 5px;
  text-transform: uppercase;
  letter-spacing: 0.1rem;
}

.checkout-field input {
  background-color: transparent;
  border: 1px solid #cecece;
  border-radius: 5px;
  color: #e0eafc;
  height: 35px;
}

.paystack-button {
  cursor: pointer;
  text-align: center;
  font-size: 10px;
  letter-spacing: 0.1rem;
  text-transform: uppercase;
  background-color: #bfbfbf;
  font-weight: bold;
  color: #e0eafc;
  border: none;
  border-radius: 5px;
  width: 100%;
  height: 45px;
  margin-top: 40px;
}


`

const Donate = () => {

  const publicKey = "pk_test_737fa7bb9320c6765d83f621722dc3f38418c0af"
  const [amount, setAmount] = useState()
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [name, setName] = useState('')

  const handleClear = (e) =>{
    e.preventDefault()
     setEmail("")
     setName("")
     setPhone("")
   }
   

  const componentProps = {
    email,
    amount,
    metadata: {
      name,
      phone,
    },
    publicKey,
    text: "Donate Now",
    onSuccess: () =>{
      alert("Thanks for Donating to a genuine cause!!")
    },
    handleClear, 
    onClose: () => alert("Wait! please support the vioceless and the needy!"),
  }

  const payWithPayStack = (e) => {
    e.preventDefault()
    const paystack = new  PaystackButton()
    paystack.newTransaction({
      key: "",
      amount: amount * 100,
      email,
      name,
      phone,

      onSuccess (){
        alert("Thanks for Donating to a genuine cause!!")
      },
      onClose () {alert("Wait! please support the vioceless and the needy!")},

    })

  }

 

  return (
    <Container>
      
      <div className="checkout-form">
  <div className="checkout-field">
    <label>Name</label>
    <input
      type="text"
      id="name"
      onChange={(e) => setName(e.target.value)}
      value={name}
    />
  </div>
  <div className="checkout-field">
    <label>Email</label>
    <input
      type="text"
      id="email"
      onChange={(e) => setEmail(e.target.value)}
      value={email}
    />
  </div>
  <div className="checkout-field">
    <label>Phone</label>
    <input
      type="text"
      id="phone"
      onChange={(e) => setPhone(e.target.value)}
      onSubmit={handleClear}
    />
  </div>
  <div className="checkout-field">
    <label>Amount</label>
    <input
      type="text"
      id="amount"
      onChange={(e) => setPhone(e.target.value)}
      value={amount}
    />
  </div>
  
  <PaystackButton className="paystack-button" {...componentProps} />
  </div>
    </Container>
  )
}

export default Donate