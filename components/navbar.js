class CustomNavbar extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        nav {
          background: linear-gradient(to right, var(--sameba-dark), var(--sameba-green-dark));
	  background-color: rgb(22 101 52 / var(--tw-bg-opacity, 1));
          padding: 1rem 2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          position: fixed;
          width: 96%;
          top: 0;
          z-index: 1000;
          box-shadow: 0 4px 12px rgba(0,0,0,0.15);
          border-bottom: 2px solid var(--sameba-yellow);
border-bottom-color:rgb(255, 215, 0);
border-bottom-style:solid;
border-bottom-width:2px;
        }
.logo {
          color: white;
          font-weight: bold;
          font-size: 1.5rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        .logo img {
          height: 40px;
          width: auto;
        }
.logo span {
          color: #FFD700;
        }
        ul {
          display: flex;
          gap: 1.5rem;
          list-style: none;
          margin: 0;
          padding: 0;
          align-items: center;
        }
        a {
          color: white;
          text-decoration: none;
          font-weight: 500;
          padding: 0.5rem 0;
          position: relative;
        }
        a:hover {
          color: #FFD700;
        }
        a::after {
          content: '';
          position: absolute;
          width: 0;
          height: 2px;
          bottom: 0;
          left: 0;
          background-color: #FFD700;
          transition: width 0.3s;
        }
        a:hover::after {
          width: 100%;
        }
        .mobile-menu-btn {
          display: none;
          background: none;
          border: none;
          color: white;
          font-size: 1.5rem;
          cursor: pointer;
        }
        @media (max-width: 768px) {
          nav {
            padding: 1rem;
          }
          ul {
            position: fixed;
            top: 70px;
            left: -100%;
            width: 100%;
            height: calc(100vh - 70px);
            background-color: rgba(27, 77, 62, 0.98);
            backdrop-filter: blur(5px);
            flex-direction: column;
            align-items: center;
            justify-content: flex-start;
            gap: 1.5rem;
            transition: left 0.3s ease;
            padding-top: 2rem;
          }
          ul.active {
            left: 0;
          }
          ul li {
            width: 100%;
            text-align: center;
          }
          ul li a {
            display: block;
            padding: 1rem;
            font-size: 1.2rem;
          }
          ul li a::after {
            display: none;
          }
          .mobile-menu-btn {
            display: block;
            background: rgba(255, 255, 255, 0.1);
            border-radius: 5px;
            padding: 0.5rem;
            transition: all 0.3s;
          }
          .mobile-menu-btn:hover {
            background: rgba(255, 255, 255, 0.2);
          }
          .mobile-menu-btn.active i {
            transform: rotate(90deg);
          }
        }
</style>
      <nav>
        <a href="index.html" class="logo">
          <img src="logo.png" alt="SAMEBA Logo" class="h-10 mr-2">
        </a>
        <button class="mobile-menu-btn" aria-label="Toggle menu">
          <i data-feather="menu"></i>
        </button>
<ul>
          <li><a href="index.html">Home</a></li>
          <li><a href="about.html">About Us</a></li>
          <li><a href="members.html">Executive Members</a></li>
          <li><a href="events.html">Events</a></li>
          <li><a href="contact.html">Contact Us</a></li>
          <li><a href="register.html" class="bg-sameba-blue hover:bg-sameba-yellow text-white font-bold py-2 px-4 rounded-full transition duration-300">Join Us</a></li>
        </ul>
</nav>
    `;
    // Mobile menu toggle
    const mobileMenuBtn = this.shadowRoot.querySelector('.mobile-menu-btn');
    const menu = this.shadowRoot.querySelector('ul');
    const menuIcon = mobileMenuBtn.querySelector('i');

    mobileMenuBtn.addEventListener('click', () => {
      menu.classList.toggle('active');
      mobileMenuBtn.classList.toggle('active');
      feather.replace();
      
      // Toggle menu icon animation
      if (menu.classList.contains('active')) {
        menuIcon.setAttribute('data-feather', 'x');
      } else {
        menuIcon.setAttribute('data-feather', 'menu');
      }
      feather.replace();
    });
// Close menu when clicking on a link
    const menuLinks = this.shadowRoot.querySelectorAll('a');
    menuLinks.forEach(link => {
      link.addEventListener('click', () => {
        if (window.innerWidth <= 768) {
          menu.classList.remove('active');
        }
      });
    });
  }
}
customElements.define('custom-navbar', CustomNavbar);