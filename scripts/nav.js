function navigationBar(){
    let nav = `       
      <header class="sticky top-0 z-50 bg-gray-50 shadow-md transition-all duration-300">
      <nav class="max-w-6xl mx-auto h-14 flex items-center justify-between px-4">
        <!-- Logo -->
        <h1 class="font-momo text-xl md:text-3xl font-bold tracking-wide">
          Wail <span class="text-blue-600">Abderrahim</span>
        </h1>

        <!-- Mobile Menu Button -->
        <button id="menu-btn" class="xl:hidden lg:hidden  w-10 h-10 flex items-center justify-center rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-gray-300">
          <svg class="w-6 h-6 text-gray-700" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
          </svg>
        </button>

        <!-- Desktop Menu -->
        <div class="hidden lg:block xl:block">
          <ul class="flex space-x-8">
            <li><a href="index.html" class="font-momo text-sm md:text-lg  font-light hover:text-blue-600 transition-colors">Home</a></li>
            <li><a href="skills.html" class="font-momo text-sm md:text-lg font-light hover:text-blue-600 transition-colors">Skills</a></li>
            <li><a href="projects.html" class="font-momo text-sm md:text-lg font-light hover:text-blue-600 transition-colors">Projects</a></li>
            <li><a href="about.html" class="font-momo text-sm md:text-lg font-light hover:text-blue-600 transition-colors">About me</a></li>
            <li><a href="contact.html" class="font-momo text-sm md:text-lg font-light hover:text-blue-600 transition-colors">Contact</a></li>
          </ul>
        </div>
      </nav>

      <!-- Mobile Dropdown -->
      <div id="navbar-default" class="hidden  xl:hidden lg:hidden bg-gray-100 border-t border-gray-200 shadow-sm">
        <ul class="flex flex-col text-center p-4 space-y-2">
          <li><a href="index.html" class="block py-2 text-gray-700 hover:text-blue-600 font-momo">Home</a></li>
          <li><a href="skills.html" class="block py-2 text-gray-700 hover:text-blue-600 font-momo">Skills</a></li>
          <li><a href="projects.html" class="block py-2 text-gray-700 hover:text-blue-600 font-momo">Projects</a></li>
          <li><a href="about.html" class="block py-2 text-gray-700 hover:text-blue-600 font-momo">About me</a></li>
          <li><a href="contact.html" class="block py-2 text-gray-700 hover:text-blue-600 font-momo">Contact</a></li>
        </ul>
      </div>
    </header>
  `;
    
    document.body.insertAdjacentHTML("afterbegin", nav);
}
navigationBar()

function toggleMenue(){
        let btn = document.getElementById('menu-btn');
    let menu = document.getElementById('navbar-default');
    btn.addEventListener('click', ()=>{
      menu.classList.toggle('hidden')
    });
}
toggleMenue()