<!-- src/views/Services.vue -->
<template>
  <div class="max-w-7xl mx-auto px-4 py-16 font-sans">
    <div class="text-center max-w-3xl mx-auto mb-16">
      <span class="text-[#00b050] font-bold uppercase tracking-wider text-sm">Our Offerings</span>
      <h1 class="text-4xl font-extrabold text-gray-900 mt-2">Premium Travel Services Tailored For You</h1>
      <p class="text-gray-500 text-lg mt-3">We handle the intricate details so you can focus entirely on soaking up the beauty of Rwanda.</p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div v-for="service in services" :key="service.title" class="p-8 bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-xl transition-all group duration-300">
        <div class="w-14 h-14 bg-green-50 text-[#00b050] rounded-xl flex items-center justify-center text-2xl font-bold mb-6 group-hover:bg-[#00b050] group-hover:text-white transition-colors">
          {{ service.icon }}
        </div>
        <h3 class="text-xl font-bold text-gray-900 mb-3">{{ service.title }}</h3>
        <p class="text-gray-600 leading-relaxed text-sm">{{ service.desc }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
const services = [
  { icon: '🗺', title: 'Guided Safari Expeditions', desc: 'Expert local trackers and certified multi-lingual tour guides to lead your national park treks safely and knowledgeably.' },
  { icon: '🚗', title: 'Luxury 4x4 Transportation', desc: 'Dependable, heavily equipped fleet of off-road safari vehicles and airport shuttles optimized for mountainous terrains.' },
  { icon: '🏨', title: 'Boutique Lodge Booking', desc: 'Exclusive booking partnerships with premier luxury wilderness canopy lodges and scenic eco-resorts.' }
]
</script>