import { NotebookPen, RotateCw, Star, X } from "lucide-react";

export default function OrderHistory() {
  return (
    <>
      <div className="w-[100%] h-[100%] pt-[15px] pl-[15px] pr-[10px] bg-gradient-to-br from-[#B5BCFF] via-[#E2E5FF] to-[#FFFFFF] ">
        <div className="flex flex-row text-center items-center gap-4 rounded-md bg-muted mx-auto p-1">
          <div className="flex flex-row gap-4 items-center text-center mx-auto">
            <div className="bg-white p-2 rounded-full">
              <NotebookPen className="" />
            </div>
            <h1>Order History</h1>
          </div>
        </div>
        {/* Your order history content goes here */}
        <div className="flex flex-row items-center justify-between gap-6 p-4">
          <div className="oderProcess flex flex-1 items-center justify-between gap-4 mx-8">
            <div className="flex flex-col border-2 border-muted-foreground mx-4">
              <span className="inline-block h-[250px] min-h-[1em] w-0.5 self-stretch border-2 border-muted"></span>
            </div>
            <div className="sideTrack flex flex-col justify-between gap-4 ">
              <span>Order placed</span>
              <span>Order processed</span>
              <span>Order shipped</span>
              <span>Order Delivered</span>
            </div>
            {/* Order history cards */}
            <div className="h-[250px] min-h-[2em] w-px self-stretch bg-gradient-to-tr from-transparent via-neutral-800 to-transparent opacity-25 dark:muted mx-8"></div>
          </div>
          <div>
            <div className="details flex flex-row justify-between items-center">
              <h2>Purchased items</h2>
              <div className="orderDetails flex flex-col">
                <span>Oder Id:#1233243445565 </span>
                <span>To Mr Jon Doe</span>
                <a href="#" className="text-primary">
                  Detail
                </a>
              </div>
            </div>
            {/*items card */}
            <div className="orderCards flex flex-col">
              <div className="card flex flex-row justify-between items-center gap-4">
                <div className="flex flex-col items-center gap-4">
                  <div className="flex flex-col gap-2  border rounded-xl">
                    <img
                      src="/src/assets/order-1.jpg"
                      alt="Product"
                      className="w-40 h-40 rounded-md"
                    />
                    <div>
                      <h2>Flowers</h2>
                      <p>Lilium Flowers</p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-center gap-4 mx-12">
                  <div className="flex flex-col gap-2  border rounded-xl">
                    <img
                      src="/src/assets/order-2.png"
                      alt="Product"
                      className="w-40 h-40 rounded-md"
                    />
                    <div className="">
                      <h2>Cakes</h2>
                      <p>Red wheat Cupcakes</p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-center">
                  <div className="flex flex-col gap-2 border rounded-xl">
                    <img
                      src="/src/assets/order-3.png"
                      alt="Product"
                      className="w-40 h-40 rounded-md"
                    />
                    <div className="my-2">
                      <h2>Wine</h2>
                      <p>Jacob's creek</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-row text-center justify-between gap-2 p-8 mt-4 w-72">
                {/* Review button */}
                <div className="items-center">
                  <a
                    href="#"
                    className="flex flex-row items-center gap-2 rounded-md border border-gray-500 p-2 mx-2"
                  >
                    <Star className="h-5 text-blue-500" />
                    <p>Review</p>
                  </a>
                </div>

                {/* buy again button */}
                <div className="">
                  <a
                    href="#"
                    className="flex flex-row items-center gap-2 rounded-md border border-gray-500 p-2 mx-2"
                  >
                    <RotateCw className="h-5" />
                    <p>Buy Again</p>
                  </a>
                </div>

                {/* cancel button */}
                <div className=" items-center">
                  <button className="flex flex-row items-center gap-2 rounded-xl border border-gray-500 p-2 mx-2">
                    <X className="text-rose-500 bg-rose-500 h-5" />
                    <p>Cancel</p>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* buttons */}
      </div>
    </>
  );
}
