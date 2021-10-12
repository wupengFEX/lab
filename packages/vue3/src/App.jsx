import { defineComponent, ref } from 'vue';
import Composition from './components/Composition';
import Teleport from './components/Teleport';

const STATUS = {
  COMPOSITION: 'Composition',
  TELEPORT: 'Teleport',
};

export default defineComponent({
  setup() {
    const status = ref(STATUS.COMPOSITION);
    return {
      status,
    };
  },
  render() {
    return (
      <div>
        <button onClick={() => this.status = STATUS.COMPOSITION}>Composition API</button>
        <button style={{ marginLeft: '10px' }} onClick={() =>this.status = STATUS.TELEPORT}>Teleport</button>
        <div style={{padding: '10px', margin: '10px 0', border: '1px solid red'}}>
          {
            this.status === STATUS.COMPOSITION ? <Composition /> : null
          }
          {
            this.status === STATUS.TELEPORT ? <Teleport /> : null
          }
        </div>
      </div>
    );
  }
});