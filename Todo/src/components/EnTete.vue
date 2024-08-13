<template>
  <header class="bg-white">
    <div class="container mx-auto px-4 py-8 flex items-center">
      <!-- logo -->
      <div class="mr-auto md:w-48 flex-shrink-0">
        <img class="h-8 md:h-10" src="https://i.ibb.co/98pHdFq/2021-10-27-15h51-15.png" alt="logo">
      </div>

      <!-- navigation -->
      <div class="text-gray-500 order-3 w-full md:w-auto md:order-2" id="dashn">
        <ul class="flex font-semibold justify-between cursor-pointer" v-if="authStore.user">
          <li class="md:px-4 md:py-2 text-indigo-500"><a @click="dashBoard">Dashboard</a></li>
        </ul>
      </div>

      <!-- signup/signin or logout button -->
      <div class="order-2 md:order-3 flex" id="dashn">

        <div v-if="!authStore.user">
          <button @click="navigateToSignup" class="px-4 py-2 bg-green-500 hover:bg-green-600 text-gray-50 rounded-xl flex items-center gap-2">
              <span>Signup</span>
          </button>
        </div>

        <div v-if="!authStore.user">
          
          <button @click="navigateToLogin" class="ml-4 px-4 py-2 bg-indigo-500 hover:bg-indigo-600 text-gray-50 rounded-xl flex items-center gap-2">
            <span>Signin</span>
          </button>
        </div>
        <button v-if="authStore.user" @click="handleLogout" class="px-4 py-2 bg-red-500 hover:bg-red-600 text-gray-50 rounded-xl flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M4 3a1 1 0 011 1v12a1 1 0 11-2 0V4a1 1 0 011-1zm11 8a1 1 0 00-1 1v2.586L13.707 12.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414-1.414l-2.293-2.293H16a1 1 0 001-1v-1a1 1 0 00-1-1h-4V9a1 1 0 00-1-1H7a1 1 0 00-1 1v1H2a1 1 0 00-1 1v2.586L1.293 14.707a1 1 0 001.414 1.414l2.293-2.293V12a1 1 0 001-1h4v-2a1 1 0 001-1h4a1 1 0 001 1v2h4a1 1 0 001 1v1a1 1 0 00-1 1h-4v2h-2a1 1 0 00-1 1v2.586L9.707 16.293a1 1 0 01-1.414-1.414L12 13.586V14a1 1 0 001 1h4a1 1 0 001-1v-1a1 1 0 00-1-1h-4v-2a1 1 0 00-1-1H7a1 1 0 00-1 1v2h-2v-1.586L3.707 14.293a1 1 0 001.414 1.414L7 12.414V10h4a1 1 0 001-1V7a1 1 0 00-1-1H7a1 1 0 00-1 1v1H4a1 1 0 00-1 1v2a1 1 0 001 1h4v2h-2V10a1 1 0 00-1-1H2v1a1 1 0 001 1h2v2h4a1 1 0 001-1v-2h4a1 1 0 001-1V6a1 1 0 00-1-1h-4V4a1 1 0 00-1-1H4a1 1 0 00-1 1v2a1 1 0 001 1h2v2h2a1 1 0 001 1v2a1 1 0 001 1h4V6a1 1 0 00-1-1h-4V4z" clip-rule="evenodd" />
          </svg>
          <span>Logout</span>
        </button>
      </div>
    </div>
  </header>
</template>

<script>
import { useAuthStore } from '@/stores/auth';
import { useRouter } from 'vue-router';

export default {
  setup() {
    const authStore = useAuthStore();
    const router = useRouter();

    const navigateToSignup = () => {
      router.push('/signup');
    };

    const navigateToLogin = () => {
      router.push('/login');
    };

    const dashBoard = () => {
      router.push('/home');
    };

    const handleLogout = () => {
      authStore.logout();
      router.push('/login');
    };

    return {
      authStore,
      navigateToSignup,
      navigateToLogin,
      handleLogout,
      dashBoard,
    };
  },
};
</script>
