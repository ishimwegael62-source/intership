<template>
  <div class="max-w-7xl mx-auto px-4 py-8 font-sans">
    
    <header class="text-center mb-10">
      <h1 class="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Discover the Beauty of Rwanda</h1>
      <p class="text-gray-600 text-lg">A Visual Journey Through Our Gallery</p>
    </header>

    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      <div 
        v-for="(image, index) in paginatedImages" 
        :key="index" 
        class="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 cursor-pointer border border-gray-100"
        @click="openLightbox(index)"
      >
        <div class="aspect-[4/3] overflow-hidden">
          <img 
            :src="image.url" 
            :alt="image.title" 
            class="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500 ease-in-out"
          />
        </div>
        <div class="p-4 bg-white">
          <h3 class="font-semibold text-gray-800 text-lg">{{ image.title }}</h3>
        </div>
      </div>
    </div>

    <div class="flex justify-center items-center gap-6 mt-12" v-if="totalPages > 1">
      <button 
        :disabled="currentPage === 1" 
        @click="currentPage--"
        class="bg-[#00b050] hover:bg-green-600 disabled:bg-gray-300 text-white font-semibold py-2 px-4 rounded-lg transition-colors disabled:cursor-not-allowed"
      >
        « Previous
      </button>
      <span class="text-gray-700 font-medium">Showing Page {{ currentPage }} of {{ totalPages }}</span>
      <button 
        :disabled="currentPage === totalPages" 
        @click="currentPage++"
        class="bg-[#00b050] hover:bg-green-600 disabled:bg-gray-300 text-white font-semibold py-2 px-4 rounded-lg transition-colors disabled:cursor-not-allowed"
      >
        Next »
      </button>
    </div>

    <div 
      v-if="isLightboxOpen" 
      class="fixed inset-0 bg-black/90 flex justify-center items-center z-50 transition-opacity duration-300" 
      @click.self="closeLightbox"
    >
      <button 
        class="absolute top-5 right-6 text-white text-5xl hover:text-gray-300 font-light cursor-pointer" 
        @click="closeLightbox"
      >
        &times;
      </button>
      
      <button 
        class="absolute left-5 text-white bg-white/10 hover:bg-white/20 text-3xl w-14 h-14 rounded-full flex items-center justify-center transition-all cursor-pointer select-none" 
        @click="prevImage"
      >
        &#8249;
      </button>
      
      <div class="max-w-[85%] max-h-[80%] text-center">
        <img 
          :src="allImages[lightboxIndex].url" 
          :alt="allImages[lightboxIndex].title" 
          class="max-w-full max-h-[70vh] rounded shadow-2xl mx-auto object-contain"
        />
        <p class="text-white mt-4 text-xl font-medium tracking-wide">{{ allImages[lightboxIndex].title }}</p>
      </div>

      <button 
        class="absolute right-5 text-white bg-white/10 hover:bg-white/20 text-3xl w-14 h-14 rounded-full flex items-center justify-center transition-all cursor-pointer select-none" 
        @click="nextImage"
      >
        &#8250;
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';

// 1. Mock Data Setup (Swap out these placeholders with your actual asset links later!)

const allImages = ref([
  { url: 'https://images.unsplash.com/photo-1542856391-010fb87dcfed', title: 'Lush Hills of true beauty' },
  { url: 'https://images.unsplash.com/photo-1516426122078-c23e76319801', title: 'Traditional Culture' },
  { url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e', title: 'Beautiful Landscape' },
  { url: 'https://images.unsplash.com/photo-1513569771920-c9e1d31714af', title: 'Nyabihu Vibe' },
  { url: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05', title: 'Green Hills' },
  { url: 'https://images.unsplash.com/photo-1500485035595-cbe6f645feb1', title: 'Evening View' },
  { url: 'https://images.unsplash.com/photo-1447752875215-b2761acb3c5d', title: 'Nature Paths' }
]);

// 2. Pagination State & Logic
const currentPage = ref(1);
const itemsPerPage = 6; // Controls how many items display at a time

const totalPages = computed(() => Math.ceil(allImages.value.length / itemsPerPage));

const paginatedImages = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  return allImages.value.slice(start, end);
});

// 3. Lightbox State & Logic
const isLightboxOpen = ref(false);
const lightboxIndex = ref(0);

const openLightbox = (index) => {
  // Translate paginated layout index to our global array position
  const globalIndex = (currentPage.value - 1) * itemsPerPage + index;
  lightboxIndex.value = globalIndex;
  isLightboxOpen.value = true;
};

const closeLightbox = () => {
  isLightboxOpen.value = false;
};

const nextImage = () => {
  if (lightboxIndex.value < allImages.value.length - 1) {
    lightboxIndex.value++;
  } else {
    lightboxIndex.value = 0; // Infinite loop back to front
  }
};

const prevImage = () => {
  if (lightboxIndex.value > 0) {
    lightboxIndex.value--;
  } else {
    lightboxIndex.value = allImages.value.length - 1; // Infinite loop to back
  }
};
</script>