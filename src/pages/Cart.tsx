export default function Cart() {    
    return (
      <>
      <div className="h-screen bg-gradient-to-r from-[#B5BCFF] via-[#E2E5FF] to-white">
        <div>
          <div className="bg-[#E8E5E5] flex justify-between">
              <div className="flex gap-2">
                <img src="src\assets\icons\mdi_cart.png" className="bg-white rounded-xl" />
                <h1>Cart</h1>
              </div>
              <div><h1> ⏩ </h1></div>
              <div className="flex gap-2">
                <img src="src\assets\icons\mdi_account-payment.png" />
                <h1>Checkout</h1>
              </div>
            </div>
        </div>
        <div className="font-medium text-sm text-center flex justify-center items-center">
        <p className="">Need help? Check our <a href="#"> help and support </a> or <a href="#"> contact us</a></p>
      </div>
      </div>
      </>
    );
    }   