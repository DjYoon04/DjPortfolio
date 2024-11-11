<template>
    <section id="contact" class="py-20 bg-[#2B124C]">
      <div class="container mx-auto px-6">
        <h2 class="text-5xl font-bold mb-12 text-center text-[#FFFFFF]">Get in Touch</h2>
        <div class="max-w-3xl mx-auto">
          <form @submit.prevent="submitForm" class="space-y-6">
            <div>
              <label for="name" class="block text-sm font-medium mb-1">Name</label>
              <input
                type="text"
                id="name"
                v-model="form.name"
                required
                class="w-full px-4 py-2 bg-[#190019] border border-[#522B5B] rounded-md focus:outline-none focus:ring-2 focus:ring-[#854F6C] text-[#FBE4D8]"
              >
            </div>
            <div>
              <label for="email" class="block text-sm font-medium mb-1">Email</label>
              <input
                type="email"
                id="email"
                v-model="form.email"
                required
                class="w-full px-4 py-2 bg-[#190019] border border-[#522B5B] rounded-md focus:outline-none focus:ring-2 focus:ring-[#854F6C] text-[#FBE4D8]"
              >
            </div>
            <div>
              <label for="message" class="block text-sm font-medium mb-1">Message</label>
              <textarea
                id="message"
                v-model="form.message"
                rows="4"
                required
                class="w-full px-4 py-2 bg-[#190019] border border-[#522B5B] rounded-md focus:outline-none focus:ring-2 focus:ring-[#854F6C] text-[#FBE4D8]"
              ></textarea>
            </div>
            <button
              type="submit"
              class="w-full bg-[#522B5B] text-[#FBE4D8] hover:bg-[#854F6C] px-6 py-3 rounded-md font-semibold transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  import { defineProps } from 'vue'
  
  const props = defineProps({
    form: Object,
    submitForm: Function,
  })
  </script>
  