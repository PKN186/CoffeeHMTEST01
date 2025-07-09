import React from 'react'
import CounterInputSm from '@/components/shared/CounterInputSm'
import { CartItem } from '@/types'
import { priceWithSign } from '@/utils/helper'
import { useShoppingCart } from '@/hooks/useShoppingCart'

interface CartItemCardProps {
  cartItem: CartItem
}

const CartItemCard: React.FC<CartItemCardProps> = ({ cartItem }) => {
  const { updateQuantity, removeFromCart } = useShoppingCart()
  const { product, quantity } = cartItem
  const totalAmount = product.price * quantity

  const handleQuantityChange = (value: number) => {
    if (value >= 1) updateQuantity(product.id, value)
    else removeFromCart(product.id)
  }

  return (
    <div className="flex items-center bg-white rounded-card shadow-card-md p-4 mb-4">
      <img
        src={product.image}
        alt={product.displayName}
        className="w-16 h-16 object-cover rounded-xl mr-4"
      />
      <div className="flex-1">
        <h3 className="text-lg font-display text-primary-DEFAULT mb-1">
          {product.displayName}
        </h3>
        <p className="text-sm text-neutral-600">
          {priceWithSign(totalAmount)}
        </p>
        {quantity > 1 && (
          <p className="text-xs text-neutral-400">
            {priceWithSign(product.price)} each
          </p>
        )}
      </div>
      <div className="flex flex-col items-center ml-4">
        <CounterInputSm value={quantity} onChange={handleQuantityChange} />
      </div>
    </div>
  )
}

export default CartItemCard
