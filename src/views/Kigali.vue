<template>
  <div class="max-w-7xl mx-auto px-4 py-12 font-sans animate-fade-in">
<!-- Inside src/views/Kigali.vue -->
  <div class="max-w-7xl mx-auto px-4 py-12 font-sans">
    <!-- Hero Banner -->
    <div class="relative h-[400px] rounded-3xl overflow-hidden mb-12 shadow-lg">
      <!-- FIXED LINK: Reliable, high-res direct image of Kigali -->
      <img 
        src="../assets/images/kigali.jpg" 
        alt="Kigali Skyline" 
        class="w-full h-full object-cover" 
      />
      <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex items-end p-8 md:p-12">
        <div>
          <span class="bg-[#00b050] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">Capital City</span>
          <h1 class="text-4xl md:text-6xl font-extrabold text-white mt-3">Explore Kigali</h1>
        </div>
      </div>
    </div>
    
    <!-- Rest of your content section remains unchanged... -->
  </div>

    <!-- Content Split -->
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-12">
      <div class="lg:col-span-2 space-y-6">
        <h2 class="text-3xl font-bold text-gray-900 border-b pb-2 border-gray-100">About the Vibrant Heart of Rwanda</h2>
        <p class="text-gray-600 leading-relaxed text-lg">
          Kigali is celebrated as one of the cleanest, safest, and fastest-growing cities in Africa. Spanning across lush rolling hills, the city perfectly blends traditional Rwandan warmth with modern urban development.
        </p>
        <p class="text-gray-600 leading-relaxed text-lg">
          From bustling local markets like Kimironko to top-tier culinary scenes and historical milestones like the Kigali Genocide Memorial, the capital offers a deeply moving and culturally rich introduction to the Land of a Thousand Hills.
        </p>
      </div>
      <!-- Sidebar Quick Facts -->
      <div class="bg-gray-50 border border-gray-100 p-6 rounded-2xl h-fit shadow-sm">
        <h3 class="font-bold text-xl text-gray-800 mb-4">Quick Highlights</h3>
        <ul class="space-y-3 text-gray-600">
          <li class="flex items-center gap-2"><span class="text-[#00b050]">✔</span> Cleanest City in Africa</li>
          <li class="flex items-center gap-2"><span class="text-[#00b050]">✔</span> Kimironko Market Shopping</li>
          <li class="flex items-center gap-2"><span class="text-[#00b050]">✔</span> Rich Arts & Coffee Culture</li>
        </ul>
      </div>
    </div>
  </div>
</template>