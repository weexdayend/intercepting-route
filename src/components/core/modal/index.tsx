'use client';

import { useRouter } from 'next/navigation';
import { MouseEventHandler, useRef, ReactNode } from 'react'; 
 
export default function Modal( {children} : { children : ReactNode}){

  const overlay = useRef(null);
  const router = useRouter();

  const close: MouseEventHandler =(e) =>{

    if(e.target === overlay.current){

      router.back();
    }
  }

  return <dialog
  ref={overlay} 
  className="border p-4 rounded backdrop:bg-slate-300/50"
>
  <button
    className="absolute top-2 right-4 border-none"
    onClick={close} // Close modal when button is clicked
  >
    X
  </button>
  <div>
    {/* Your Modal Content Goes Here */}
    <h2>Modal Content</h2>
    {children}
  </div>
</dialog>

}