export function Counter() {
  function increment() {
    console.log('increment')
  }

  return (
    <div>
      <h2>0</h2>
      <button type="button">Increment</button>
    </div>
  )
}
