
import { useEffect, useRef } from "react";
import gsap from "gsap";

function App() {

  const carRef = useRef(null);

  useEffect(() => {

    gsap.to(carRef.current,{
      x:500,
      duration:3,
      ease:"power2.out"
    });

  },[])

  return (
    <div className="bg-slate-900 text-white">

      <section className="h-screen flex flex-col items-center justify-center">

        <h1 className="text-6xl tracking-[0.6em] mb-8">
          W E L C O M E
        </h1>

        <div className="flex gap-10 text-xl mb-20">
          <p>120K+ Users</p>
          <p>98% Satisfaction</p>
        </div>

        <img
          ref={carRef}
          src="/car.png"
          className="w-[500px]"
        />

      </section>

      <div className="h-[200vh]"></div>

    </div>
  );
}

export default App;