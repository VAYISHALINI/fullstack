import "../assets/css/payment.css"
import gif from "../assets/images/giphy4.jpg"
function Payment(){
   
    return(
        <>
        <img src={gif} style={{marginTop:"30px",marginLeft:"50px"}}/>
    <div className="mainscreen">
    {/* <img src="https://image.freepik.com/free-vector/purple-background-with-neon-frame_52683-34124.jpg"  class="bgimg " alt="">*/}
    <div className="cardd" style={{marginTop:"-600px"}}>
     
      <div className="rightside">
        <form action="">
          <br/>
          <h4 style={{textAlign:"center"}}>Make Payment</h4>
          <br/>
          {/* <h2>Payment Information</h2> */}
          <p>Cardholder Name</p>
          <input type="text" className="inputbox" name="name" required="" />
          <p>Card Number</p>
          <input
            type="number"
            className="inputbox"
            name="card_number"
            id="card_number"
            required=""
          />
          <p>Card Type</p>
          <select
            className="inputbox"
            name="card_type"
            id="card_type"
            required=""
          >
            <option value="">--Select a Card Type--</option>
            <option value="Visa">Visa</option>
            <option value="RuPay">RuPay</option>
            <option value="MasterCard">MasterCard</option>
          </select>
          <div className="expcvv">
            <p className="expcvv_text">Expiry</p>
            <input
              type="date"
              className="inputbox"
              name="exp_date"
              id="exp_date"
              required=""
            />
            <p className="expcvv_text2">CVV</p>
            <input
              type="password"
              className="inputbox"
              name="cvv"
              id="cvv"
              required=""
            />
          </div>
          <p />
          <button type="submit" className="butn" style={{marginLeft:"200px",marginTop:"50px"}}>
            Pay
          </button>
         
        </form>
         
      </div>
    </div>
  </div>
  </>
    );

}

export default Payment;