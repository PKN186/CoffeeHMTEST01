import React from 'react'
import { priceWithSign } from '@/utils/helper'
import { useModal } from '@/hooks/useModal'
import { ProductCardProps } from './type'

export default function ProductCardBgImage({ coffee }: ProductCardProps) {
  const { showProductModal } = useModal()

  return (
    <div
      onClick={() => showProductModal(coffee)}
      className="relative w-full h-48 rounded-2xl overflow-hidden shadow-card-md cursor-pointer bg-hero-gradient"
    >
      <img
        src={coffee.image}
        alt={coffee.displayName}
        className="absolute inset-0 w-full h-full object-cover opacity-20"
      />
      <div className="absolute bottom-4 left-4 text-white">
        <h3 className="text-xl font-display">{coffee.displayName}</h3>
        <p className="mt-1 text-lg font-bold">
          {priceWithSign(coffee.price)}
        </p>
      </div>
    </div>
  )
}
