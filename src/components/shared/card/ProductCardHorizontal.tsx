import React from 'react'
import { PlusIcon } from '@heroicons/react/24/solid'
import { useShoppingCart } from '@/hooks/useShoppingCart'
import { useModal } from '@/hooks/useModal'
import { classNames, priceWithSign } from '@/utils/helper'
import { ProductCardProps } from './type'

export default function ProductCardHorizontal({ coffee }: ProductCardProps) {
  const { items } = useShoppingCart()
  const { showProductModal } = useModal()
  const inCart = items.find(i => i.product.id === coffee.id)

  return (
    <div className="flex items-center bg-white rounded-2xl shadow-card-md p-4">
      <img
        src={coffee.image}
        alt={coffee.displayName}
        className="w-20 h-20 object-cover rounded-xl mr-4"
      />
      <div className="flex-1">
        <h3 className="text-lg font-display text-primary-DEFAULT">
          {coffee.displayName}
        </h3>
        <p className="text-sm text-neutral-500">{coffee.description}</p>
        <p className="mt-2 text-lg font-semibold">
          {priceWithSign(coffee.price)}
        </p>
      </div>
      <button
        onClick={() => inCart ? showProductModal(coffee) : showProductModal(coffee)}
        className={classNames(
          'ml-4 flex items-center justify-center w-10 h-10 rounded-btn bg-primary-DEFAULT text-white',
          inCart && 'bg-primary-700'
        )}
      >
        <PlusIcon className="w-5 h-5" />
      </button>
    </div>
  )
}
