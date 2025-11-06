// footer.js

const footer = `
<footer class="bg-gray-900 text-gray-300 py-10 mt-10">
  <div class="max-w-6xl mx-auto px-4 grid gap-10 md:grid-cols-3 sm:grid-cols-1">
    
    <!-- About -->
    <div>
      <h2 class="text-lg font-semibold text-white mb-4 font-momo">About Me</h2>
      <p class="text-sm leading-relaxed text-gray-400">
        Passionate front-end developer focused on building creative and user-friendly web apps.
        Always learning, always improving.
      </p>
    </div>

    <!-- Quick Links -->
    <div>
      <h2 class="text-lg font-semibold text-white mb-4 font-momo">Quick Links</h2>
      <ul class="space-y-2">
        <li><a href="index.html" class="hover:text-white transition">Home</a></li>
        <li><a href="skills.html" class="hover:text-white transition">Skills</a></li>
        <li><a href="projects.html" class="hover:text-white transition">Projects</a></li>
        <li><a href="contact.html" class="hover:text-white transition">Contact</a></li>
      </ul>
    </div>

    <!-- Social Media -->
    <div>
      <h2 class="text-lg font-semibold text-white mb-4 font-momo">Follow Me</h2>
      <div class="flex items-center gap-4">
        
        <!-- Instagram -->
        <a href="https://www.instagram.com/abderrahimwail/?hl=ar" target="_blank" aria-label="Instagram" class="hover:scale-110 transition-transform">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
               class="w-6 h-6 text-pink-500">
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
          </svg>
        </a>

        <!-- Facebook -->
        <a href="https://www.facebook.com/wail.abderrahim.2025/" target="_blank" aria-label="Facebook" class="hover:scale-110 transition-transform">
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"
               class="w-6 h-6 text-blue-600">
            <path d="M22 12.07C22 6.48 17.52 2 12 2S2 6.48 2 12.07c0 4.99 3.66 9.12 8.44 9.88v-6.99H8.1v-2.89h2.34V9.83c0-2.3 1.37-3.57 3.47-3.57.99 0 2.02.18 2.02.18v2.23h-1.14c-1.13 0-1.48.7-1.48 1.42v1.7h2.52l-.4 2.89h-2.12v6.99C18.34 21.19 22 17.06 22 12.07z"/>
          </svg>
        </a>

        <!-- GitHub -->
        <a href="https://github.com/wailAbderrahim" target="_blank" aria-label="GitHub" class="hover:scale-110 transition-transform">
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"
               class="w-6 h-6 text-gray-400">
            <path fill-rule="evenodd" 
                  d="M12 0C5.37 0 0 5.37 0 12a12 12 0 0 0 8.21 11.43c.6.11.82-.26.82-.58v-2.02c-3.34.73-4.04-1.61-4.04-1.61-.55-1.38-1.34-1.74-1.34-1.74-1.1-.75.08-.73.08-.73 1.21.08 1.85 1.24 1.85 1.24 1.08 1.85 2.83 1.32 3.52 1.01.11-.79.42-1.32.76-1.63-2.66-.3-5.46-1.33-5.46-5.91 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.17 0 0 1-.32 3.3 1.23a11.4 11.4 0 0 1 6 0c2.3-1.55 3.3-1.23 3.3-1.23.66 1.65.24 2.87.12 3.17.77.84 1.24 1.91 1.24 3.22 0 4.6-2.8 5.6-5.47 5.9.43.37.82 1.1.82 2.22v3.29c0 .32.22.7.83.58A12 12 0 0 0 24 12c0-6.63-5.37-12-12-12Z" 
                  clip-rule="evenodd"/>
          </svg>
        </a>
      </div>
    </div>
  </div>

  <div class="text-center text-sm text-gray-500 mt-10 border-t border-gray-800 pt-4">
    © 2025 <span class="text-white font-semibold">Wail Abderrahim</span>. All rights reserved.
  </div>
</footer>

`;

document.addEventListener("DOMContentLoaded", () => {
  document.body.insertAdjacentHTML("beforeend", footer);
});
