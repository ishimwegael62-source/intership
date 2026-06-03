<!-- src/views/Karongi.vue -->
<template>
  <div class="max-w-7xl mx-auto px-4 py-12 font-sans">
    <!-- Hero Banner -->
    <div class="relative h-[400px] rounded-3xl overflow-hidden mb-12 shadow-lg">
      <!-- High-res emerald hills and rolling tea plantations near Lake Kivu -->
      <img 
        src="../assets/images/karongi.jpg" 
        alt="Karongi Lake Vista and Tea Hills" 
        class="w-full h-full object-cover" 
      />
      <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex items-end p-8 md:p-12">
        <div>
          <span class="bg-[#00b050] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">Scenic Serenity</span>
          <h1 class="text-4xl md:text-6xl font-extrabold text-white mt-3">Discover Karongi</h1>
        </div>
      </div>
    </div>

    <!-- Content Split -->
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-12">
      <div class="lg:col-span-2 space-y-6">
        <h2 class="text-3xl font-bold text-gray-900 border-b pb-2 border-gray-100">The Ultimate Lakeside Escape</h2>
        <p class="text-gray-600 leading-relaxed text-lg">
          Karongi (historically Kibuye) is arguably one of the most majestic locations along Lake Kivu. The shoreline is framed by dramatic, pine-covered hillsides that plunge directly into bright emerald waters.
        </p>
        <p class="text-gray-600 leading-relaxed text-lg">
          It is famous for island-hopping boat tours. Visitors flock here to climb Napoleon Island (home to a massive colony of fruit bats) and Monkey Island, or simply sit back and watch the iconic local night fishermen paddle out in their three-hull wooden boats.
        </p>
      </div>
      <!-- Sidebar Quick Facts -->
      <div class="bg-gray-50 border border-gray-100 p-6 rounded-2xl h-fit shadow-sm">
        <h3 class="font-bold text-xl text-gray-800 mb-4">Quick Highlights</h3>
        <ul class="space-y-3 text-gray-600">
          <li class="flex items-center gap-2"><span class="text-[#00b050]">✔</span>Explore the famous Nyungwe National park</li>
          <li class="flex items-center gap-2"><span class="text-[#00b050]">✔</span>The </li>
          <li class="flex items-center gap-2"><span class="text-[#00b050]">✔</span> Traditional Night Fishing Trips</li>
        </ul>
      </div>
    </div>
  </div>
</template>