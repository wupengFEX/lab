import { defineComponent, ref, Teleport } from 'vue';

export default defineComponent({
  setup() {
    const status = ref(true);

    return {
      status,
    };
  },
  render() {
    return (
      <div>
        <button onClick={() => this.status = true}>展示</button>
        <button onClick={() => this.status = false}>隐藏</button>
        <div>
          {
            this.status ? (
              <div style={{ background: 'red', position: 'absolute', width: '100px', height: '100px' }}>内容</div>
            ) : (
              <Teleport to='body'>
                <div style={{ background: 'red', position: 'absolute', width: '100px', height: '100px' }}>内容</div>
              </Teleport>
            )
          }
        </div>
      </div>
    );
  }
});
