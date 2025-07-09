import React from 'react'
import { PlusIcon } from '@heroicons/react/24/solid'
import { useShoppingCart } from '@/hooks/useShoppingCart'
import { useModal } from '@/hooks/useModal'
import { priceWithSign } from '@/utils/helper'
import { ProductCardProps } from './type'

export default function ProductCardSmall({ coffee }: ProductCardProps) {
  const { items } = useShoppingCart()
  const inCart = items.find(i => i.product.id === coffee.id)
  const { showProductModal } = useModal()

  return (
    <div className="bg-white rounded-2xl shadow-card-md p-3 flex flex-col items-center">
      <img
        src={coffee.image}
        alt={coffee.displayName}
        className="w-full h-24 object-cover rounded-xl mb-3"
      />
      <h4 className="text-base font-display text-primary-DEFAULT mb-1">
        {coffee.displayName}
      </h4>
      <p className="text-sm font-semibold">{priceWithSign(coffee.price)}</p>
      <button
        onClick={() => showProductModal(coffee)}
        className="mt-3 flex items-center justify-center w-8 h-8 rounded-btn bg-primary-DEFAULT text-white"
      >
        <PlusIcon className="w-4 h-4" />
      </button>
      {inCart && (
        <span className="mt-2 text-xs text-neutral-600">
          {inCart.quantity} in cart
        </span>
      )}
    </div>
  )
}
