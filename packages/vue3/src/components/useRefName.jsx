import { ref, onMounted, watch, reactive } from 'vue';

export default function useRefName() {
  const searchQuery = ref('searchQuery data');
  const count = ref(1);
  const logValue = reactive({
    newValue: 0,
    oldValue: 0,
  });

  // watch varible
  watch(count, (newValue, oldValue) => {
    console.log('newValue is ', newValue, ', oldValue is ', oldValue);
    logValue.newValue = newValue;
    logValue.oldValue = oldValue;
  });

  // set value when onMounted
  onMounted(() => {
    count.value = 10;
  });

  return {
    searchQuery,
    count,
    logValue,
  };
}