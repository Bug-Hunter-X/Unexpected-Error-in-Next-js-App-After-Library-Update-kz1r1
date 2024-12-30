```javascript
// pages/index.js
import dynamic from 'next/dynamic';

const MyComponent = dynamic(() => import('./my-component'), {
  ssr: false, // Prevents SSR for this component
  loading: () => <p>Loading...</p>,
});

export default function Home() {
  return (
    <div>
      <h1>Welcome to my Next.js app!</h1>
      <MyComponent />
    </div>
  );
}

// my-component.js
export default function MyComponent() {
  // Your component code here
  return (
      <div>This is my component</div>
  )
}
```