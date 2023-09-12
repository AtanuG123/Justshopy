import "../Pages_css/checkout.css";
export default function Checkout() {
	// console.log(document.getElementById("selecttag").innerText)
	const changepayment=(e)=>{
		console.log(e.target.value)
		if (e.target.value ==="CARD"){
			document.getElementById("upi").style.display="none"
			document.getElementById("card").style.display="block"
		}
		 else{
			document.getElementById("upi").style.display="block"
			document.getElementById("card").style.display="none"

		 }
	}
	return (
		<div id="checkouthead">
			<div id="address">


				<div>
					<div><h4>Shipping Details</h4></div>
					<hr></hr>
					<form>
						<p style={{fontWeight:"600"}}>CONTACT DETAILS</p>
						<input placeholder="Name"></input>
						<input placeholder="Email"></input>
						<input placeholder="Mobile no"></input>
						<p style={{fontWeight:"600"}}>ADDRESS</p>
						<input placeholder="Address"></input>

						<input placeholder="Pincode"></input>
						<input placeholder="Locality"></input>

					</form>
				</div>
			</div>





			<div className="right">

				<h4>PAYMENT</h4>
				<div class="form-container">
					<form action="#" onsubmit="return false">
						<select title="paymode" id="selecttag" onChange={changepayment}>
							<option selected >CARD</option>
							<option >UPI</option>
						</select>
						<div id="card">

						<div class="input-items flex">
							<div class="marginright">
								<input type="text" placeholder="Card Holder Name" name="Name" id="firstName" />
							</div>
						</div>
						<div class="input-items">
							<input type="number" size={16} placeholder="Card Number" name="cardNumber" id="cardNumber" />
						</div>
						<div class="input-items flex">
							<div>
								<input type="" placeholder="Expiration Date" name="cardNumber" id="cardNumber" />
							</div>
							<div>
								<input type="text" placeholder="CVV" name="cardNumber" id="cardNumber" />
							</div>
						</div>
						</div>
						<div id="upi">
							<img id="qrcode"src={"https://media.istockphoto.com/id/1095468748/vector/qr-code-abstract-vector-modern-bar-code-sample-for-smartphone-scanning-isolated-on-white.jpg?s=612x612&w=0&k=20&c=Jnh2TAkAFm7QpaBgCyCuGbCA6nomDfk4-XiTsBhbHFk="}></img>
							<p>Scan & pay</p>
						</div>




						<div className="payamount">
							<p>Payable Amount:</p>
							<p>10000</p>
						</div>
						<div className="orderplace">
							<button>PROCESED</button>
						</div>

					</form>
				</div>
			</div>
		</div>

	);
}