interface CartItemInfoProps {
  produk: Record<string, any>;
}

const CartItemInfo: React.FC<CartItemInfoProps> = ({ produk }) => {
  return (
    <div>
      <div className="flex justify-between">
        <p className=" text-sm font-semibold text-black">{produk.name}</p>
      </div>

      <div className="mt-1 flex text-sm">
        <p className="text-gray-500">{produk.color}</p>
        <p className="ml-4 border-l border-gray-200 pl-4 text-gray-500">
          {produk.size}
        </p>
      </div>
      <p className="mt-1 text-sm font-medium text-gray-900">{produk.price}</p>
    </div>
  );
};

export default CartItemInfo;
