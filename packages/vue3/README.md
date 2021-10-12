# Vue 3

- 新特性
  - 性能
  - function component，全部支持 tree shaking
  - 组合式 API
  - Fragment, Teleport, Suspense
  - TS 支持
  - 自定义 render API
- 执行 setup 时，组件实例尚未被创建。因此，你只能访问以下 property `props`, `attrs`, `slots`, `emit`, 不能访问 `data`, `computed`, `methods`, `ref`
- `provide` 可在父组件中定义变量，`inject` 可在子组件中获取，避免层层传递
- `defineAsyncComponent` 可定义异步组件
- `Suspense` 一般用于异步组件进行过渡态转换