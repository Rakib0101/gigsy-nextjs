import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTruck, faBox, faGift, faHeadset } from "@fortawesome/free-solid-svg-icons";

const ValueProps = () => {
  return (
    <section className="py-12 bg-[#3a3a3e] text-white">
      <div className="container mx-auto max-w-7xl">
        {/* Value Props */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12 text-center">
          <div>
            <FontAwesomeIcon icon={faTruck} className="text-4xl text-white mb-3" />
            <h6 className="font-bold mb-2">SAME DAY DELIVERY IN NYC</h6>
            <p className="text-gray-100 text-sm">Get your balloons delivered the same day you order them.</p>
          </div>
          <div>
            <FontAwesomeIcon icon={faBox} className="text-4xl text-white mb-3" />
            <h6 className="font-bold mb-2">PICK UP AVAILABLE</h6>
            <p className="text-gray-100 text-sm">Visit our showroom and pick up your order at your convenience.</p>
          </div>
          <div>
            <FontAwesomeIcon icon={faGift} className="text-4xl text-white mb-3" />
            <h6 className="font-bold mb-2">CURATED ASSORTMENTS</h6>
            <p className="text-gray-100 text-sm">Our team selects the perfect balloons for every occasion.</p>
          </div>
          <div>
            <FontAwesomeIcon icon={faHeadset} className="text-4xl text-white mb-3" />
            <h6 className="font-bold mb-2">WORLD-CLASS SUPPORT</h6>
            <p className="text-gray-100 text-sm">Our friendly team is here to help with every order.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValueProps;