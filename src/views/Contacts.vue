<!-- src/views/Contacts.vue -->
<template>
  <div class="max-w-7xl mx-auto px-4 py-16 font-sans">
    <div class="grid grid-cols-1 lg:grid-cols-5 gap-12 bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
      
      <!-- Informational Column Info -->
      <div class="lg:col-span-2 bg-[#00b050] p-8 md:p-12 text-white flex flex-col justify-between">
        <div class="space-y-6">
          <h2 class="text-3xl font-extrabold tracking-tight">Let's Plan Your Journey</h2>
          <p class="text-green-50/80 leading-relaxed font-light">
            Have questions about tour permits, custom trip timelines, or lodging requirements? Send us a message and our adventure planners will answer right away.
          </p>
        </div>
        
        <div class="space-y-4 my-8 lg:my-0">
          <div class="flex items-center gap-4">
            <span class="text-xl">📍</span>
            <p class="text-sm font-medium">KN 4 Ave, Kigali City, Rwanda</p>
          </div>
          <div class="flex items-center gap-4">
            <span class="text-xl">📞</span>
            <p class="text-sm font-medium">+250 788 000 000</p>
          </div>
          <div class="flex items-center gap-4">
            <span class="text-xl">✉</span>
            <p class="text-sm font-medium">info@temberaurwanda.rw</p>
          </div>
        </div>
        
        <p class="text-xs text-green-100/60">© 2026 Tembera U Rwanda. All rights reserved.</p>
      </div>

      <!-- Live Messaging Input Form -->
      <form class="lg:col-span-3 p-8 md:p-12 space-y-6" @submit.prevent="handleSubmit">
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div class="flex flex-col gap-2">
            <label class="text-xs uppercase font-bold tracking-wide text-gray-500">Full Name</label>
            <input type="text" placeholder="John Doe" class="w-full bg-gray-50 border border-gray-200 rounded-xl p-3 text-sm focus:outline-none focus:border-[#00b050] transition-colors" required />
          </div>
          <div class="flex flex-col gap-2">
            <label class="text-xs uppercase font-bold tracking-wide text-gray-500">Email Address</label>
            <input type="email" placeholder="temberaurwanda@gmail.com" class="w-full bg-gray-50 border border-gray-200 rounded-xl p-3 text-sm focus:outline-none focus:border-[#00b050] transition-colors" required />
          </div>
        </div>
        
        <div class="flex flex-col gap-2">
          <label class="text-xs uppercase font-bold tracking-wide text-gray-500">What destination are you eyeing?</label>
          <select class="w-full bg-gray-50 border border-gray-200 rounded-xl p-3 text-sm focus:outline-none focus:border-[#00b050] transition-colors text-gray-600">
            <option>Kigali</option>
            <option>Musanze (Gorilla Trekking)</option>
            <option>Rubavu</option>
            <option>Karongi</option>
          </select>
        </div>

        <div class="flex flex-col gap-2">
          <label class="text-xs uppercase font-bold tracking-wide text-gray-500">Your Message</label>
          <textarea rows="4" placeholder="Tell us about your dream trip layout..." class="w-full bg-gray-50 border border-gray-200 rounded-xl p-3 text-sm focus:outline-none focus:border-[#00b050] transition-colors" required></textarea>
        </div>

        <button type="submit" class="w-full sm:w-fit bg-[#00b050] hover:bg-green-600 text-white font-semibold py-3 px-8 rounded-xl shadow-md transition-colors block text-center">
          Send Inquiry
        </button>
      </form>

    </div>
  </div>
</template>

<script setup>
const handleSubmit = () => {
  alert('Thank you for reaching out! Our travel team will contact you shortly.');
};
</script>