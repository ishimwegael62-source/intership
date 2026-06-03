<!-- src/views/Home.vue -->
<template>
  <div class="font-sans text-gray-900 bg-gray-50/50">
    <!-- Hero Section -->
    <div class="relative h-[85vh] flex items-center justify-center bg-black overflow-hidden">
      <img 
        src="../assets/images/hilly.jpg" 
        alt="Rwanda Hills" 
        class="absolute inset-0 w-full h-full object-cover opacity-65 scale-105 animate-[pulse_8s_infinite]"
      />
      <div class="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/70"></div>
      
      <div class="relative text-center px-4 max-w-4xl z-10">
        <span class="text-[#00b050] font-bold uppercase tracking-widest text-sm md:text-base bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/20">
          Welcome to Tembera U Rwanda!
        </span>
        <h1 class="text-4xl sm:text-6xl font-black text-white mt-6 tracking-tight leading-tight">
          Discover the Beauty of the <br/>
          <span class="text-[#00b050]">Land of a Thousand Hills</span>
        </h1>
        <p class="text-lg sm:text-xl text-gray-200 mt-6 max-w-2xl mx-auto font-light leading-relaxed">
          From majestic mountain gorillas to sparkling volcanic lakes and vibrant urban culture, your ultimate Rwandan adventure begins here.
        </p>
        <div class="mt-10 flex flex-wrap justify-center gap-4">
          <router-link to="/gallery/images" class="bg-[#00b050] hover:bg-green-600 text-white font-semibold px-8 py-3.5 rounded-xl transition-all shadow-lg shadow-green-600/30 transform hover:-translate-y-0.5">
            View Gallery
          </router-link>
          <router-link to="/Contacts" class="bg-white/10 hover:bg-white/20 text-white font-semibold px-8 py-3.5 rounded-xl backdrop-blur-sm border border-white/30 transition-all transform hover:-translate-y-0.5">
            Book a Trip
          </router-link>
        </div>
      </div>
    </div>

    <!-- Featured Attractions Summary Teaser -->
    <div class="max-w-7xl mx-auto px-4 py-20">
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-4xl font-extrabold tracking-tight">Top Regions to Explore</h2>
        <p class="text-gray-500 mt-3 text-lg">Hand-picked bucket list destinations for your itinerary</p>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div v-for="spot in featuredSpots" :key="spot.name" class="group bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300">
          <div class="h-60 overflow-hidden relative">
            <img :src="spot.img" :alt="spot.name" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"/>
          </div>
          <div class="p-6">
            <h3 class="font-bold text-xl text-gray-900">{{ spot.name }}</h3>
            <p class="text-gray-500 text-sm mt-2 line-clamp-2">{{ spot.desc }}</p>
            <router-link :to="spot.link" class="inline-flex items-center text-[#00b050] font-semibold text-sm mt-4 group-hover:underline">
              Explore Guide <span class="ml-1 transition-transform group-hover:translate-x-1">→</span>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import kigaliImg from '../assets/images/kigali.jpg'
import musanzeImg from '../assets/images/musanze.jpg'
import kivuImg from '../assets/images/kivu.jpg'
import karongiImg from '../assets/images/karongi.jpg'

const featuredSpots = [
  { name: 'Kigali City', desc: 'Africa\'s cleanest and safest capital city boasting rich culinary art and vibrant market scenes.', img: kigaliImg, link: '/destinations/kigali' },
  { name: 'Musanze Region', desc: 'The magnificent mist-covered slopes housing the rarest mountain gorillas in the world.', img: musanzeImg, link: '/destinations/musanze' },
  { name: 'Lake Kivu (Rubavu)', desc: 'Beautiful tropical shorelines offering pristine water sports, hot springs, and sunset relaxation.', img: kivuImg, link: '/destinations/rubavu' },
  { name: 'Karongi', desc: 'Scenic lakeside location known for its dramatic mountain vistas and traditional fishing activities.', img: karongiImg, link: '/destinations/karongi' }
]
</script>