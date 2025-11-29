class CustomTestimonials extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        .testimonial-card {
          transition: all 0.3s ease;
        }
        .testimonial-card:hover {
          transform: translateY(-5px);
        }
        .testimonial-text::before {
          content: '"';
          font-size: 4rem;
          line-height: 0;
          color: #5eead4;
          position: absolute;
          top: 2rem;
          left: 1rem;
          opacity: 0.3;
        }
      </style>
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div class="testimonial-card bg-white p-6 rounded-xl shadow-md">
          <div class="flex items-center mb-4">
            <img src="https://static.photos/people/200x200/4" alt="Sarah M." class="w-12 h-12 rounded-full object-cover mr-4">
            <div>
              <h4 class="font-semibold">Sarah M.</h4>
              <div class="flex text-yellow-400">
                <i data-feather="star" class="w-4 h-4 fill-current"></i>
                <i data-feather="star" class="w-4 h-4 fill-current"></i>
                <i data-feather="star" class="w-4 h-4 fill-current"></i>
                <i data-feather="star" class="w-4 h-4 fill-current"></i>
                <i data-feather="star" class="w-4 h-4 fill-current"></i>
              </div>
            </div>
          </div>
          <div class="relative testimonial-text pl-8">
            <p class="text-gray-600 italic">"Coming to Serene Soul has been transformative. The instructors are knowledgeable and create such a welcoming environment. My flexibility and mental clarity have improved tremendously."</p>
          </div>
        </div>
        
        <div class="testimonial-card bg-white p-6 rounded-xl shadow-md">
          <div class="flex items-center mb-4">
            <img src="https://static.photos/people/200x200/5" alt="James T." class="w-12 h-12 rounded-full object-cover mr-4">
            <div>
              <h4 class="font-semibold">James T.</h4>
              <div class="flex text-yellow-400">
                <i data-feather="star" class="w-4 h-4 fill-current"></i>
                <i data-feather="star" class="w-4 h-4 fill-current"></i>
                <i data-feather="star" class="w-4 h-4 fill-current"></i>
                <i data-feather="star" class="w-4 h-4 fill-current"></i>
                <i data-feather="star" class="w-4 h-4 fill-current"></i>
              </div>
            </div>
          </div>
          <div class="relative testimonial-text pl-8">
            <p class="text-gray-600 italic">"As someone who was new to yoga, I was nervous to start. The beginner classes at Serene Soul made me feel comfortable and supported. Now I'm hooked and attend 3 times a week!"</p>
          </div>
        </div>
        
        <div class="testimonial-card bg-white p-6 rounded-xl shadow-md">
          <div class="flex items-center mb-4">
            <img src="https://static.photos/people/200x200/6" alt="Priya K." class="w-12 h-12 rounded-full object-cover mr-4">
            <div>
              <h4 class="font-semibold">Priya K.</h4>
              <div class="flex text-yellow-400">
                <i data-feather="star" class="w-4 h-4 fill-current"></i>
                <i data-feather="star" class="w-4 h-4 fill-current"></i>
                <i data-feather="star" class="w-4 h-4 fill-current"></i>
                <i data-feather="star" class="w-4 h-4 fill-current"></i>
                <i data-feather="star" class="w-4 h-4 fill-current"></i>
              </div>
            </div>
          </div>
          <div class="relative testimonial-text pl-8">
            <p class="text-gray-600 italic">"The restorative yoga classes have been a game-changer for my stress levels. The studio is so peaceful and the teachers have a deep understanding of anatomy and mindfulness."</p>
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define('custom-testimonials', CustomTestimonials);