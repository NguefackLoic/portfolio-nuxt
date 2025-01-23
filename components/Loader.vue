<template>
    <div class="flex justify-center items-center h-screen">
      <div class="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-32 w-32"></div>
    </div>
</template>
  
<style scoped>
  .loader {
    border-top-color: #581845; 
    animation: spin 1.5s infinite linear;
  }
  
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
</style>
  