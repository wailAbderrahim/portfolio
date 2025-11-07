function navigationBar(){
    let nav = `       
      <header class="sticky top-0 z-50 bg-gray-50 shadow-md transition-all duration-300 dark:bg-gray-900">
      <nav class="max-w-6xl mx-auto h-14 flex items-center justify-between px-4 dark:bg-gray-900 dark:text-white">
        <!-- Logo -->
        <h1 class="font-momo text-xl md:text-3xl font-bold tracking-wide">
          Wail <span class="text-blue-600">Abderrahim</span>
        </h1>

        <button id="toggleDark" class="p-2 rounded-lg bg-gray-200 dark:bg-gray-700">
          <svg id="sun" class="w-5 h-5 hidden dark:block" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M12 3v1m0 16v1m8.66-9h-1M4.34 12h-1m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M12 8a4 4 0 100 8 4 4 0 000-8z" />
          </svg>
          <svg id="moon" class="w-5 h-5 block dark:hidden" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M21 12.79A9 9 0 1111.21 3a7 7 0 009.79 9.79z" />
          </svg>
        </button>


        <!-- Mobile Menu Button -->
        <button id="menu-btn" class="xl:hidden lg:hidden  w-10 h-10 flex items-center justify-center rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-gray-300 dark:focus:ring-gray-800">
          <svg class="w-6 h-6 text-gray-700" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
          </svg>
        </button>

        <!-- Desktop Menu -->
        <div class="hidden lg:block xl:block">
          <ul class="flex space-x-8">
            <li><a href="index.html" class="font-momo text-sm md:text-lg  font-light hover:text-blue-600 transition-colors dark:text-gray-300">Home</a></li>
            <li><a href="skills.html" class="font-momo text-sm md:text-lg font-light hover:text-blue-600 transition-colors dark:text-gray-300">Skills</a></li>
            <li><a href="projects.html" class="font-momo text-sm md:text-lg font-light hover:text-blue-600 transition-colors dark:text-gray-300">Projects</a></li>
            <li><a href="about.html" class="font-momo text-sm md:text-lg font-light hover:text-blue-600 transition-colors dark:text-gray-300">About me</a></li>
            <li><a href="contact.html" class="font-momo text-sm md:text-lg font-light hover:text-blue-600 transition-colors dark:text-gray-300">Contact</a></li>
          </ul>
        </div>
      </nav>

      <!-- Mobile Dropdown -->
      <div id="navbar-default" class="hidden  xl:hidden lg:hidden bg-gray-100 border-t border-gray-200 shadow-sm dark:bg-gray-900 dark:border-gray-900">
        <ul class="flex flex-col text-center p-4 space-y-2">
          <li><a href="index.html" class="block py-2 text-gray-700 hover:text-blue-600 font-momo dark:text-slate-300">Home</a></li>
          <li><a href="skills.html" class="block py-2 text-gray-700 hover:text-blue-600 font-momo dark:text-slate-300">Skills</a></li>
          <li><a href="projects.html" class="block py-2 text-gray-700 hover:text-blue-600 font-momo dark:text-slate-300">Projects</a></li>
          <li><a href="about.html" class="block py-2 text-gray-700 hover:text-blue-600 font-momo dark:text-slate-300">About me</a></li>
          <li><a href="contact.html" class="block py-2 text-gray-700 hover:text-blue-600 font-momo dark:text-slate-300">Contact</a></li>
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