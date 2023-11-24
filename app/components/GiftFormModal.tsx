import type { GiftError } from '~/types/gifts'
import AddGiftNumberInput from './add-gift/AddGiftNumberInput'
import AddGiftTextInput from './add-gift/AddGiftTextInput'
import AppModal from './AppModal'
import Button from './Button'

type InputOnChangeFn = (event: React.ChangeEvent<Element>) => void

interface InputProps<T = string | number> {
   onChangeFn: InputOnChangeFn
   defaultValue?: T
}

interface GiftFormModalProps {
   closeModal: () => void
   error: GiftError
   modalTitle: string
   onClickBtn: {
      fn: () => void
      btnTitle: string
   }
   onRandomGift?: (event: React.MouseEvent<HTMLButtonElement>) => void
   inputName: InputProps<string>
   inputImage: InputProps<string>
   inputRecipient: InputProps<string>
   inputquantity: InputProps<number>
   inputPrice: InputProps<number>
}

export default function GiftFormModal({
   modalTitle,
   closeModal,
   error,
   onClickBtn,
   onRandomGift,
   inputquantity,
   inputImage,
   inputName,
   inputPrice,
   inputRecipient
}: GiftFormModalProps) {

   return (
      <AppModal
         type='form'
         closeModal={closeModal}
      >
         <h2 className="mb-3 text-xl font-bold">
            {modalTitle}
         </h2>

         <AddGiftTextInput
            id='input-gift-name'
            name='name'
            placeholder="Inserta un regalo"
            onChange={inputName.onChangeFn}
            defaultValue={inputName.defaultValue}
            error={error}
         />
         <AddGiftTextInput
            id='input-gift-image'
            name="image"
            placeholder="Inserta una imagen"
            onChange={inputImage.onChangeFn}
            defaultValue={inputImage.defaultValue}
            error={error}
         />
         <AddGiftTextInput
            name="recipient"
            placeholder="Destinatario"
            onChange={inputRecipient.onChangeFn}
            defaultValue={inputRecipient.defaultValue}
            error={error}
         />

         <AddGiftNumberInput
            id="add-gift-quantity"
            name='quantity'
            labelText="Cantidad: "
            onChange={inputquantity.onChangeFn}
            defaultValue={inputquantity.defaultValue}
            error={error}
            max={99999}
         />

         <AddGiftNumberInput
            id="add-gift-price"
            name='price'
            labelText="Precio: $"
            onChange={inputPrice.onChangeFn}
            defaultValue={inputPrice.defaultValue}
            error={error}
         />
         
         {(onRandomGift)
            ?  <Button onClick={onRandomGift}>
                  Regalo aleatorio
            </Button>
            : null
         }

         <Button
            color='green'
            onClick={onClickBtn.fn}
         >
            {onClickBtn.btnTitle}
         </Button>
      </AppModal>

   )
}
