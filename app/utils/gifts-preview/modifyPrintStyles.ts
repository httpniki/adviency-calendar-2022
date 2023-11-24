export default function modifyPrintStyles(printEventType: 'afterprint' | 'beforeprint') {
   const $modalBG = document.getElementById('modal-bg') as HTMLDivElement
   const $modalPrintBtn = document.getElementById('modal-print-btn') as HTMLButtonElement
   const $closeModalBtn = document.getElementById('close-modal-btn') as HTMLButtonElement

   if(printEventType === 'beforeprint') {
      $modalPrintBtn.style.display = 'none'
      $closeModalBtn.style.display = 'none'
      $modalBG.style.backgroundColor = '#ffffff'
   }

   if(printEventType === 'afterprint') {
      $modalPrintBtn.style.display = 'block'
      $closeModalBtn.style.display = 'block'
      $modalBG.style.backgroundColor = '#00000030'
   }
}

