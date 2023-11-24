import useCreateGift from '~/hooks/useCreateGift';
import type { Gift } from '~/types/gifts';
import GiftFormModal from '../GiftFormModal';


interface AddGiftModalProps {
   closeModal: () => void
   randomGifts: Gift[]
}

export default function AddGiftModal({ closeModal, randomGifts }: AddGiftModalProps) {
   const { 
      error, 
      onChange, 
      onCreateGift, 
      onInsertRandomGift 
   } = useCreateGift({ closeModal, randomGifts })

   return(
      <>
         <GiftFormModal
            closeModal={closeModal}
            error={error}
            modalTitle='Agregar un regalo'
            onClickBtn={{ fn: onCreateGift, btnTitle: 'Agregar' }}
            onRandomGift={onInsertRandomGift}
            inputName={{ onChangeFn: onChange }}
            inputImage={{ onChangeFn: onChange }}
            inputquantity={{ onChangeFn: onChange }}
            inputPrice={{ onChangeFn: onChange }}
            inputRecipient={{ onChangeFn: onChange }}
         />
         {/*
      <AppModal 
         type='form'
         closeModal={closeModal}
      >
         <h2 className="mb-3 text-xl font-bold">
            Agregar un regalo
         </h2>
         
         <AddGiftTextInput 
            id='input-gift-name'
            name='name'
            placeholder="Inserta un regalo"
            onChange={onChange}
            error={error}
         />
         <AddGiftTextInput 
            id='input-gift-image'
            name="image"
            placeholder="Inserta una imagen"
            onChange={onChange}
            error={error}
         />
         <AddGiftTextInput 
            name="recipient"
            placeholder="Destinatario"
            onChange={onChange}
            error={error}
         />

         <AddGiftNumberInput
            id="add-gift-quantity"
            name='quantity'
            labelText="Cantidad: "
            onChange={onChange}
            error={error}
            max={99999}
         />
 
         <AddGiftNumberInput
            id="add-gift-price"
            name='price'
            labelText="Precio: $" 
            onChange={onChange}
            error={error}
         />

         <Button onClick={onInsertRandomGift}>
            Regalo aleatorio
         </Button>
         <Button 
            color='green'
            onClick={onCreateGift}
         >
            Agregar
         </Button>
      </AppModal>
   )
   
   */}
      </>
   )
}
