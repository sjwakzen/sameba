class CustomFooter extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        footer {
          background-color: #1B4D3E;
          color: white;
          padding: 3rem 2rem;
        }
        .footer-content {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
        }
        .footer-logo {
          font-size: 1.5rem;
          font-weight: bold;
          margin-bottom: 1rem;
        }
        .footer-logo span {
          color: #FFD700;
        }
        .footer-about {
          margin-bottom: 1.5rem;
          line-height: 1.6;
        }
        .footer-heading {
          font-size: 1.2rem;
          font-weight: bold;
          margin-bottom: 1.5rem;
          color: #FFD700;
        }
        .footer-links {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        .footer-links li {
          margin-bottom: 0.8rem;
        }
        .footer-links a {
          color: white;
          text-decoration: none;
          transition: color 0.3s;
        }
        .footer-links a:hover {
          color: #FFD700;
        }
        .social-links {
          display: flex;
          gap: 1rem;
          margin-top: 1rem;
        }
        .social-links a {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          background-color: rgba(255, 255, 255, 0.1);
          border-radius: 50%;
          color: white;
          transition: all 0.3s;
        }
        .social-links a:hover {
          background-color: #FFD700;
          color: #1B4D3E;
          transform: translateY(-3px);
        }
        .footer-bottom {
          text-align: center;
          padding-top: 2rem;
          margin-top: 2rem;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
        }
        @media (max-width: 768px) {
          .footer-content {
            grid-template-columns: 1fr;
          }
        }
      </style>
      <footer>
        <div class="footer-content">
          <div>
            <div class="footer-logo">SAME<span>BA</span></div>
            <p class="footer-about">
              The South African Movement for Economic Balance is committed to creating a fair and prosperous South Africa for all.
            </p>
            <div class="social-links">
              <a href="#" aria-label="Facebook"><i data-feather="facebook"></i></a>
              <a href="#" aria-label="Twitter"><i data-feather="twitter"></i></a>
              <a href="#" aria-label="Instagram"><i data-feather="instagram"></i></a>
              <a href="#" aria-label="Youtube"><i data-feather="youtube"></i></a>
            </div>
          </div>
          <div>
            <h3 class="footer-heading">Quick Links</h3>
            <ul class="footer-links">
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#members">Executive Members</a></li>
              <li><a href="#contact">Contact Us</a></li>
              <li><a href="#register">Register</a></li>
            </ul>
          </div>
          <div>
            <h3 class="footer-heading">Contact Info</h3>
            <ul class="footer-links">
              <li><i data-feather="map-pin"></i> 123 Party Street, Polokwane, 0700</li>
              <li><i data-feather="mail"></i> info@sameba.org.za</li>
              <li><i data-feather="phone"></i> +27 15 123 4567</li>
            </ul>
          </div>
        </div>
        <div class="footer-bottom">
          <p>&copy; ${new Date().getFullYear()} SAMEBA. All rights reserved.</p>
        </div>
      </footer>
    `;
  }
}
customElements.define('custom-footer', CustomFooter);