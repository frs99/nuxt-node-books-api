<template>
  <div v-if="data">
    <div class="book-list">
      <div class="book-item" v-for="book in data" :key="book.id">
        <h3 class="book-title">{{ book.title }}</h3>
        <p class="book-author">By: {{ book.author }}</p>
        <p class="book-year">Published: {{ book.year }}</p>
      </div>
    </div>
  </div>

  <div v-else-if="error">
    <p class="error-message">Error: {{ error.message }}</p>
  </div>
  
  <div v-else>
    <p>Loading...</p>
  </div>
</template>

<script setup>
const { data, error } = await useAsyncData('uniqueKey', () =>
  $fetch('http://localhost:5000/api/books')
)
</script>

<style scoped>
.book-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
  padding: 20px;
}

.book-item {
  background-color: #f4f4f4;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  padding: 15px;
  transition: transform 0.2s;
}

.book-item:hover {
  transform: scale(1.05);
}

.book-title {
  font-size: 1.5rem;
  font-weight: bold;
  color: #333;
}

.book-author, .book-year {
  font-size: 1rem;
  color: #555;
}

.error-message {
  color: red;
  font-size: 1.2rem;
}
</style>