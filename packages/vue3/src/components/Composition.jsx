import { defineComponent, provide, inject } from 'vue';
import useRefName from './useRefName';

// Child Component
const Children = defineComponent({
  setup() {
    const { searchQuery, count, logValue } = useRefName();
    // define global varible from parent varible
    const location = inject('location');
    return {
      sq: searchQuery,
      c: count,
      l: location,
      lv: logValue,
    };
  },
  render() {
    return (
      <Parent>
        <div>{this.l}</div>
        <div>值变化：新值为 {this.lv.newValue}，旧值为 {this.lv.oldValue}</div>
        <button onClick={() => this.c++}>增加</button>
      </Parent>
    );
  }
});

// Parent Component
export default defineComponent({
  setup() {
    // define global varible
    provide('location', 'North Pole');
  },
  render() {
    return (
      <div>
        Parent Text
        <Children />
      </div>
    );
  }
});
