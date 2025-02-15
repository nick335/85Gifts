// footer

export default function Footer() {
  return (
    <>
      <footer className="">
        <div className="footer-content footer flex flex-col md:flex-row md:border md:border-t-white md:border-b-white justify-center h-full  w-full md:h-[30vh]">
          <div className="footer-about">
            <ul>
              <h1>About</h1>
              <li>
                <a href="/about">Our Company</a>
              </li>
              <li>
                <a href="/services">Our Story</a>
              </li>
              <li>
                <a href="/contact">Shop</a>
              </li>
              <li>
                <a href="/contact">Blog</a>
              </li>
            </ul>
          </div>
          <div className="footer-information md:border-r-white md:border-l-white ">
            <ul>
              <h1>Information</h1>
              <li>
                <a href="/about">Delievery information</a>
              </li>
              <li>
                <a href="/services">privacy Policy</a>
              </li>
              <li>
                <a href="/contact">Terms & Coditions</a>
              </li>
              <li>
                <a href="/contact">Return Polices</a>
              </li>
            </ul>
          </div>
          <div className="footer-support">
            <ul>
              <h1>Support</h1>
              <li>
                <a href="/about">Conatct Us</a>
              </li>
              <li>
                <a href="/services">Help</a>
              </li>
              <li>
                <a href="/contact">FAQ</a>
              </li>
              <li>
                <a href="/contact">Check Outs</a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
}
