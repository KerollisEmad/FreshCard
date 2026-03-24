import { faHeadset, faRotateLeft, faShieldHalved, faTruck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function HomeFeatures() {
  return (
    <>
        <div>
            <div className="container grid sm:grid-cols-2 xl:grid-cols-4 gap-10 py-14">

                <div className="flex items-center gap-5 p-4 border-2 border-gray-300/20 rounded-lg">
                    <div className="size-14 flex-center rounded-full bg-primary-300/70 text-primary-600">
                        <FontAwesomeIcon icon={faTruck} className="text-lg" />
                    </div>
                    <div>
                        <h3 className="text-lg">Free Delivery</h3>
                        <p className="text-gray-400 text-sm">Orders $50 or More</p>
                    </div>
                </div>
                

                <div className="flex items-center gap-5 p-4 border-2 border-gray-300/20 rounded-lg">
                    <div className="size-14 flex-center rounded-full bg-primary-300/70 text-primary-600">
                        <FontAwesomeIcon icon={faRotateLeft} className="text-lg" />
                    </div>
                    <div>
                        <h3 className="text-lg">30 Days Return</h3>
                        <p className="text-gray-400 text-sm">Satisfaction guaranteed</p>
                    </div>
                </div>

                <div className="flex items-center gap-5 p-4 border-2 border-gray-300/20 rounded-lg">
                    <div className="size-14 flex-center rounded-full bg-primary-300/70 text-primary-600">
                        <FontAwesomeIcon icon={faShieldHalved} className="text-lg" />
                    </div>
                    <div>
                        <h3 className="text-lg">Secure Payment</h3>
                        <p className="text-gray-400 text-sm">100% Producted Checkout</p>
                    </div>
                </div>

                <div className="flex items-center gap-5 p-4 border-2 border-gray-300/20 rounded-lg">
                    <div className="size-14 flex-center rounded-full bg-primary-300/70 text-primary-600">
                        <FontAwesomeIcon icon={faHeadset} className="text-lg" />
                    </div>
                    <div>
                        <h3 className="text-lg">24/7 Support</h3>
                        <p className="text-gray-400 text-sm">Ready to help anytime</p>
                    </div>
                </div>

            </div>
        </div>
    </>
  )
}
