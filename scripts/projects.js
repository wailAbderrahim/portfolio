import {projects} from "../data/data.js";

let container = document.querySelector('.card-container');
let html = '';

projects.forEach(project =>{
    html +=`     
    
    <div class="bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-2xl transition transform hover:-translate-y-2">
        <img src="${project.image}" class="h-40 w-full object-cover" alt="project">
        <div class="p-4">
          <h3 class="text-xl font-bold text-slate-900 mb-2">${project.name}</h3>
          <p class="text-sm text-slate-600 mb-4">${project.discription}.</p>
          
          <div class="flex justify-between">
            <a href="${project.view}" class="text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 py-1.5 px-3 rounded-md">View</a>
            <a href="${project.gitHub}" class="text-sm font-semibold text-blue-600 border border-blue-600 hover:bg-blue-600 hover:text-white py-1.5 px-3 rounded-md">Git hub</a>
          </div>
        </div>
      </div>`;

});
container.innerHTML = html;
