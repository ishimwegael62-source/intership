<!-- src/views/About.vue -->
<template>
  <div class="max-w-7xl mx-auto px-4 py-16 font-sans">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      
      <!-- Text content side -->
      <div class="space-y-6">
        <span class="text-[#00b050] font-bold uppercase tracking-wider text-sm">Who We Are</span>
        <h1 class="text-4xl md:text-5xl font-black text-gray-900 leading-tight">Your Trusted Companion for Rwandan Expeditions</h1>
        <p class="text-gray-600 text-lg leading-relaxed">
          At <strong>Tembera U Rwanda</strong>, our passion is bridging the gap between global travelers and the hidden natural paradises tucked away inside our remarkable country. 
        </p>
        <p class="text-gray-600 text-lg leading-relaxed">
          We curate immersive travel designs focused on eco-tourism, rich heritage storytelling, and community-first hospitality. Whether you're climbing mist-cloaked volcanoes or experiencing deep country heritage, we map out memories that endure for a lifetime.
        </p>
        <div class="grid grid-cols-2 gap-6 pt-4">
          <div class="border-l-4 border-[#00b050] pl-4">
            <h4 class="text-2xl font-bold text-gray-900">100%</h4>
            <p class="text-gray-500 text-sm">Locally Curated Itineraries</p>
          </div>
          <div class="border-l-4 border-[#00b050] pl-4">
            <h4 class="text-2xl font-bold text-gray-900">24/7</h4>
            <p class="text-gray-500 text-sm">On-the-Ground Support</p>
          </div>
        </div>
      </div>
      
      <!-- Image side with the overlapping green frame layout -->
      <div class="relative">
        <div class="absolute -inset-2 bg-green-100 rounded-3xl transform rotate-2 -z-10"></div>
        <img 
          src="../assets/images/about.jpg" 
          alt="Rwanda landscape views" 
          class="rounded-3xl shadow-md w-full object-cover h-[450px]"
        />
      </div>

    </div>
  </div>
</template>