import "./App.css";
import image_earthbar from "./assets/image.png";
import card_image1 from "./assets/card_image1.png";
import card_image2 from "./assets/card_image2.png";
import card_image3 from "./assets/card_image3.png";
import side_image from "./assets/Side Image.png";
import hand1_image from "./assets/hand1.png";
import hand2_image from "./assets/hand2.png";
import hand3_image from "./assets/hand3.png";
import hand4_image from "./assets/hand4.png";
import hand5_image from "./assets/hand5.png";
import hand6_image from "./assets/hand6.png";

function App() {
  return (
    <div>
      {/* ilk sayfa */}
      <div id="header" className="bg-yellow-400 h-screen flex flex-col justify-center items-center">
        <div className="text-center">
          <h1 className="text-6xl font-bold mb-4 manrope-heading">
            Let’s create something{" "}
            <span className="block">great together.</span>
          </h1>
          <div id="header-content"  className="flex space-x-4 justify-center items-center">
            <div className="w-244.75 h-388 flex  justify-center">
              <img src={hand1_image} alt="hand1" />
            </div>
            <div className="w-244.75 h-388 flex items-center  justify-center">
              <img src={hand2_image} alt="hand1" />
            </div>
            <div className="w-244.75 h-388 flex items-center ">
              <img src={hand3_image} alt="hand1" />
            </div>
            <div className="w-244.75 h-388 l flex items-center justify-center">
              <img src={hand4_image} alt="hand1" />
            </div>
            <div className="w-244.75 h-388 flex items-center justify-center">
              <img src={hand5_image} alt="hand1" />
            </div>
            <div className="w-244.75 h-388 flex items-center justify-center">
              <img src={hand6_image} alt="hand1" />
            </div>
          </div>
        </div>
      </div>
      {/* birinci  sayfa */}

      <div className="bg-white h-200 flex justify-center">
        {/* ikinci  sayfa */}
        <div className="bg-white flex justify-start items-start">
          <div className="max-w-4xl mx-auto px-100 py-8 text-left">
            <h2 className="text-3xl font-bold mt-15 mb-8 ">Who We Are</h2>
            <p className="text-lg mt-8">
              We love what we do and create partnerships with our clients to
              ensure their digital transformation is positioned for long-term
              success.We believe that the human dimensions essential to start
              any successful project and that this is where splendid emotional
              relationships between the company and people are born.
            </p>

            <img src={image_earthbar} alt="Placeholder" className="mt-20" />
          </div>
        </div>
      </div>
      {/* ikinci  sayfa bitiş*/}
      {/* Kartlar Bölümü */}
      <div className="bg-white h-screen flex justify-center items-center">
        <div className="max-w-5xl mx-auto px-4 py-8">
          <h2 className="text-3xl font-bold mb-20 text-center">
            Meet the heroes behind the magic
          </h2>
          <div className="grid grid-cols-3 gap-4">
            {/* Kart 1 */}
            <img
              src={card_image1}
              alt="Kart Resmi"
              className="w-full mb-4 rounded-md"
            />

            {/* Kart 2 */}
            <img
              src={card_image2}
              alt="Kart Resmi"
              className="w-full mb-4 rounded-md"
            />

            {/* Kart 3 */}
            <img
              src={card_image3}
              alt="Kart Resmi"
              className="w-full mb-4 rounded-md"
            />
          </div>
        </div>
      </div>
      {/*dashboard bölümü*/}
      <section className="py-20 bg-black">
        <div className="container mx-auto text-center ">
          <div className="flex justify-center space-x-20 font-manrope-bold">
            <div className="text-left">
              <p className="text-3xl  text-yellow-400">350 +</p>
              <p className="text-white  mt-3">Clients Worldwide</p>
            </div>
            <div className="text-left">
              <p className="text-3xl text-white text-yellow-400">20 +</p>
              <p className="text-white  mt-3">Team Members</p>
            </div>
            <div className="text-left">
              <p className="text-3xl text-white text-yellow-400">100 +</p>
              <p className="text-white  mt-3">Projects Completed</p>
            </div>
            <div className="text-left">
              <p className="text-3xl text-white text-yellow-400">85M +</p>
              <p className="text-white mt-3">Revenue Generated</p>
            </div>
          </div>
        </div>
      </section>

      {/* son sayfa */}
      <div className="flex h-screen mt-20">
        <div className="flex-1 p-4">
          <img
            src={side_image}
            alt="Finish Proposal"
            className="w-full max-w-sm mx-auto"
          />
        </div>
        <div className="flex-1 p-4">
          <form className="flex flex-col">
            <h2 className="text-2xl font-semibold mb-4 ">
              We'd love to hear from you
            </h2>
            <div className="mb-4">
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Name*"
                className="border px-3 py-2 w-full max-w-xs sm:max-w-md lg:max-w-lg font-semibold text-gray-800 border-black"
              />
            </div>
            <div className="mb-4">
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email*"
                className="border px-3 py-2 w-full max-w-xs sm:max-w-md lg:max-w-lg font-semibold text-gray-800 border-black"
              />
            </div>

            <div className="mb-4">
              <input
                id="web-url"
                name="web-url"
                placeholder="Website URL*"
                className="border px-3 py-2 w-full max-w-xs sm:max-w-md lg:max-w-lg font-semibold text-gray-800 border-black"
              />
            </div>
            <div className="mb-4">
              <textarea
                id="message"
                name="message"
                placeholder="Project Details**"
                rows="4"
                className="border px-3 py-2 w-full max-w-xs sm:max-w-md lg:max-w-lg font-semibold text-gray-800 border-black"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-black text-white py-2 px-4 rounded w-full max-w-xs sm:max-w-md lg:max-w-lg"
            >
              Send Proposal
            </button>
          </form>
        </div>
      </div>
      {/*son sayfa bitiş */}
    </div>
  );
}

export default App;
