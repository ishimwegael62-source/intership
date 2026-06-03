<!-- src/Components/Navbar.vue -->
<template>
  <nav class="bg-gradient-to-r from-emerald-700 via-emerald-800 to-slate-900 text-white px-6 py-4 shadow-lg">
    <div class="max-w-7xl mx-auto flex items-center justify-between">
      
      <!-- Logo Brand Section (Left) -->
      <router-link to="/" class="flex items-center gap-3 shrink-0">
        <img 
          src="/temb.ico" 
          alt="Tembera U Rwanda Logo" 
          class="w-12 h-12 rounded-2xl border-2 border-white/20 object-cover shadow-xl"
        />
        <div class="flex flex-col leading-tight">
          <span class="font-black text-lg tracking-[0.24em] uppercase">Tembera</span>
          <span class="text-xs uppercase text-emerald-200 tracking-[0.2em]">U Rwanda</span>
        </div>
      </router-link>

      <!-- Navigation Links Menu (Right) -->
      <div class="flex items-center gap-8 font-medium">
        
        <router-link to="/" class="hover:text-yellow-300 transition-colors">
          Home
        </router-link>
        
        <router-link to="/About" class="hover:text-yellow-300 transition-colors">
          About
        </router-link>
        
        <router-link to="/Services" class="hover:text-yellow-300 transition-colors">
          Services
        </router-link>

        <!-- 1. GALLERY DROPDOWN -->
        <div class="relative group">
          <button class="hover:text-yellow-300 transition-colors flex items-center gap-1 py-2 focus:outline-none">
            Gallery <span class="text-xs">▼</span>
          </button>
          
          <div class="absolute left-0 mt-1 w-40 bg-white rounded-xl shadow-xl border border-gray-100 py-2 hidden group-hover:block z-50">
            <router-link to="/gallery/images" class="block px-4 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-[#00b050] font-medium transition-colors text-left">
              Images
            </router-link>
          </div>
        </div>

        <!-- 2. DESTINATIONS DROPDOWN -->
        <div class="relative group">
          <button class="hover:text-yellow-300 transition-colors flex items-center gap-1 py-2 focus:outline-none">
            Destinations <span class="text-xs">▼</span>
          </button>
          
          <div class="absolute left-0 mt-1 w-44 bg-white rounded-xl shadow-xl border border-gray-100 py-2 hidden group-hover:block z-50">
            <router-link to="/destinations/kigali" class="block px-4 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-[#00b050] font-medium transition-colors text-left">
              Kigali
            </router-link>
            <router-link to="/destinations/musanze" class="block px-4 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-[#00b050] font-medium transition-colors text-left">
              Musanze
            </router-link>
            <router-link to="/destinations/rubavu" class="block px-4 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-[#00b050] font-medium transition-colors text-left">
              Rubavu
            </router-link>
            <router-link to="/destinations/karongi" class="block px-4 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-[#00b050] font-medium transition-colors text-left">
              Karongi
            </router-link>
          </div>
        </div>

        <!-- 3. CONTACT LINK (Moved cleanly to the end) -->
        <router-link to="/Contacts" class="hover:text-yellow-300 transition-colors">
          Contact
        </router-link>

      </div>

    </div>
  </nav>
</template>