<template>
  <div class="custom-container">
  </div>
</template>


<script setup>
import { useRoute, useRouter } from "vue-router";
import { onMounted, ref } from "vue";

const route = useRoute();
const router = useRouter();

// Function to escape special characters in a string for use in a regular expression
function escapeRegExp(string) {
  return string.replace(/[.*+\-?^${}()|[\]\\]/g, '\\$&');
}

const getRecursiveLevelPath = (child, rootPath) => {
  let haveSolution = false;

  if (haveSolution) return;

  if(child.children?.length > 0) {
    for (let h of child.children) {
      const path = rootPath + "/" + h.link

      if (path.search(route.path) !== -1) {
        router.push(path)
        haveSolution = true
        return;
      }

      if (child.children.length > 0) {
        getRecursiveLevelPath(h, rootPath)
      }
    }
  }
};

onMounted(async () => {
  // check of the current path starts with /shared/ replace it with /legacy/ without losing the rest of the path or query
  if (route.path.startsWith('/shared')) {
    const newPath = route.path.replace('/shared', '/legacy');
    // go to the new path and update the url in the browser
    router.replace(newPath);
  } else {
    window.location.href = '/not-found.html';
  }
});
</script>
