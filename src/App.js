import React from 'react'
import './index.scss'
import { useState } from 'react'



// function App() {
//   const [open, setOpen] = useState(false)

//   return (
//     <div className="App">
//       <button onClick={() => setOpen(true) } className="open-modal-btn">✨ Открыть окно</button>
//       {open &&  (
//           <div className="overlay">
//             <div className="modal">
//                 <svg onClick={() => setOpen(false) } height="200" viewBox="0 0 200 200"     width="200">
//                   <title />
//                   <path d="M114,100l49-49a9.9,9.9,0,0,0-14-14L100,86,51,37A9.9,9.9,0,0,0,37,51l49,49L37,149a9.9,9.9,0,0,0,14,14l49-49,49,49a9.9,9.9,0,0,0,14-14Z" />
//                 </svg>
//               <img src="https://media2.giphy.com/media/xT0xeJpnrWC4XWblEk/giphy.gif" alt='gif'/>
//             </div>
//         </div>
//       )}
//     </div>
//   )
// }

const Modal = ({ open, setOpen, children }) => (
  <div className={ `overlay animated ${open ? 'show' : ''}` }>
          <div className="modal">
            <svg onClick={() => setOpen(false) } height="200" viewBox="0 0 200 200"     width="200">
              <title />
              <path d="M114,100l49-49a9.9,9.9,0,0,0-14-14L100,86,51,37A9.9,9.9,0,0,0,37,51l49,49L37,149a9.9,9.9,0,0,0,14,14l49-49,49,49a9.9,9.9,0,0,0,14-14Z" />
            </svg>
            {children}
          </div>
        </div>
)

function App() {
  const [open, setOpen] = useState(false)

  return (
    <div className="App">
      <button 
        onClick={() => setOpen(true) } 
        className="open-modal-btn"
      >
        ✨ Ouvrir cette fenêtre
      </button> 
       <Modal open={open} setOpen={setOpen}>
        <img src="https://media2.giphy.com/media/xT0xeJpnrWC4XWblEk/giphy.gif" alt='gif'/>
        <h3>Coucou !</h3>
        {/* <button>coucou</button> */}
      </Modal>     
    </div>
  )
}
// Теперь делаем jsx разметку в ввиде отдельного компонента
// { open && <Modal open={open} setOpen={setOpen}/> }  - условный рендер
// { <Modal open={open} setOpen={setOpen}/> } -с анимацией
// если передаем динамический объект внутри картинки то доб children

export default App;

// два варианта: 1- условный render (по условию) - минус анимация не отображается
// сначала нужно сделать state (кот отображает или скрывает что-то) const [open, setOpen] = useState(false) - по умолдчанию false окно скрыто
// тодько если true мы рендерим мод окно open && (Оператор присваивания логического И)

// 2 вариант с анимацией
// по умолчанию окно скрыто:
// .overlay.animated {
//   opacity: 0;
//   visibility: hidden;

//   .modal {
//     opacity: 0;
//     visibility: hidden;
//     transform: translate(-50%, -30%);
//     transition-delay: 0.2s;
//   }

//   &.show {
//     opacity: 1;
//     visibility: visible;

//     .modal {
//       opacity: 1;
//       visibility: visible;
//       transform: translate(-50%, -50%);
//     }
//   }
// }
// Теперь делаем jsx разметку в ввиде отдельного компонента
