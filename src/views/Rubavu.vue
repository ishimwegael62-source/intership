<!-- src/views/Rubavu.vue -->
<template>
  <div class="max-w-7xl mx-auto px-4 py-12 font-sans">
    <!-- Hero Banner -->
    <div class="relative h-[400px] rounded-3xl overflow-hidden mb-12 shadow-lg">
      <!-- Authentic image of Lake Kivu waterfront -->
      <img 
        src="../assets/images/kivu.jpg" 
        alt="Lake Kivu Rubavu" 
        class="w-full h-full object-cover" 
      />
      <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex items-end p-8 md:p-12">
        <div>
          <span class="bg-[#00b050] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">Resort & Relaxation</span>
          <h1 class="text-4xl md:text-6xl font-extrabold text-white mt-3">Relax in Rubavu</h1>
        </div>
      </div>
    </div>

    <!-- Content Split -->
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-12">
      <div class="lg:col-span-2 space-y-6">
        <h2 class="text-3xl font-bold text-gray-900 border-b pb-2 border-gray-100">Where the Beach Meets the Hills</h2>
        <p class="text-gray-600 leading-relaxed text-lg">
          Formerly known as Gisenyi, Rubavu is a beautiful waterfront town hugging the shores of Lake Kivu. It offers a lively beachside vibe complete with sandy shores, red-roofed hotels, and tropical palm trees.
        </p>
        <p class="text-gray-600 leading-relaxed text-lg">
          It is the perfect place to unwind after gorilla trekking. You can enjoy kayaking, boat cruises, natural hot springs (Amashyuza), or start the epic multi-day hiking journey down the famous Congo Nile Trail.
        </p>
      </div>
      <!-- Sidebar Quick Facts -->
      <div class="bg-gray-50 border border-gray-100 p-6 rounded-2xl h-fit shadow-sm">
        <h3 class="font-bold text-xl text-gray-800 mb-4">Quick Highlights</h3>
        <ul class="space-y-3 text-gray-600">
          <li class="flex items-center gap-2"><span class="text-[#00b050]">✔</span> Lake Kivu Beach Boardwalk</li>
          <li class="flex items-center gap-2"><span class="text-[#00b050]">✔</span> Natural Hot Springs</li>
          <li class="flex items-center gap-2"><span class="text-[#00b050]">✔</span> Congo Nile Trail Starting Point</li>
        </ul>
      </div>
    </div>
  </div>
</template>