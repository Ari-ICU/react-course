"use client";

import { useState } from "react";
import { ShoppingBag, Plus, Minus, Trash2, Database } from "lucide-react";

interface CartItem {
  id: string;
  name: string;
  price: number;
  qty: number;
}

export function ZustandDemo() {
  const [cart, setCart] = useState<CartItem[]>([
    { id: "c1", name: "React 19 Complete Guide", price: 49, qty: 1 },
    { id: "c2", name: "Enterprise Architecture PDF", price: 19, qty: 2 },
  ]);

  const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);
  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  const increment = (id: string) => {
    setCart((prev) =>
      prev.map((item) => (item.id === id ? { ...item, qty: item.qty + 1 } : item))
    );
  };

  const decrement = (id: string) => {
    setCart((prev) =>
      prev
        .map((item) => (item.id === id ? { ...item, qty: Math.max(0, item.qty - 1) } : item))
        .filter((item) => item.qty > 0)
    );
  };

  const addItem = (name: string, price: number) => {
    const id = `c${Date.now()}`;
    setCart((prev) => [...prev, { id, name, price, qty: 1 }]);
  };

  const clearCart = () => setCart([]);

  return (
    <div className="p-5 bg-white border border-slate-200 rounded-xl space-y-4 text-slate-800 shadow-xs">
      <div className="flex items-center justify-between border-b border-slate-200 pb-3">
        <div className="flex items-center gap-2">
          <Database className="w-5 h-5 text-indigo-600" />
          <h4 className="font-semibold text-slate-900">Live Zustand Store & Selectors Simulator</h4>
        </div>
        <span className="text-xs bg-indigo-50 text-indigo-700 border border-indigo-200 px-2.5 py-0.5 rounded-full font-mono font-medium">
          useCartStore()
        </span>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <div className="bg-slate-50 p-3 rounded-lg border border-slate-200">
          <span className="text-[10px] text-slate-500 uppercase tracking-wider font-semibold">Selector 1: Total Items</span>
          <div className="text-2xl font-bold text-slate-900 flex items-center gap-2 mt-1">
            <ShoppingBag className="w-5 h-5 text-indigo-600" /> {totalItems} items
          </div>
        </div>
        <div className="bg-slate-50 p-3 rounded-lg border border-slate-200">
          <span className="text-[10px] text-slate-500 uppercase tracking-wider font-semibold">Selector 2: Subtotal</span>
          <div className="text-2xl font-bold text-emerald-600 mt-1">
            ${totalPrice.toFixed(2)}
          </div>
        </div>
      </div>

      <div className="space-y-2">
        <span className="text-xs font-semibold text-slate-600 uppercase tracking-wider">Cart Store Items</span>
        {cart.length === 0 ? (
          <div className="text-center py-6 border border-dashed border-slate-300 rounded-lg text-slate-400 text-xs">
            Store is empty. Click "+ Quick Add Item" below!
          </div>
        ) : (
          <div className="divide-y divide-slate-100 bg-white rounded-lg border border-slate-200">
            {cart.map((item) => (
              <div key={item.id} className="p-3 flex items-center justify-between text-xs">
                <div>
                  <p className="font-semibold text-slate-900">{item.name}</p>
                  <p className="text-slate-500">${item.price} each</p>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => decrement(item.id)}
                    className="p-1 rounded bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-200 cursor-pointer"
                    title="Decrement qty"
                  >
                    <Minus className="w-3.5 h-3.5" />
                  </button>
                  <span className="font-mono text-slate-900 font-bold w-5 text-center">{item.qty}</span>
                  <button
                    onClick={() => increment(item.id)}
                    className="p-1 rounded bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-200 cursor-pointer"
                    title="Increment qty"
                  >
                    <Plus className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="flex items-center gap-2 pt-1">
        <button
          onClick={() => addItem("TanStack Query Pro Pack", 35)}
          className="flex-1 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors shadow-xs cursor-pointer"
        >
          <Plus className="w-3.5 h-3.5" /> + Quick Add Product
        </button>
        <button
          onClick={clearCart}
          disabled={cart.length === 0}
          className="px-3 py-2 bg-slate-100 hover:bg-slate-200 disabled:opacity-40 text-slate-600 hover:text-rose-600 rounded-lg text-xs font-medium flex items-center gap-1 transition-colors border border-slate-200 cursor-pointer"
        >
          <Trash2 className="w-3.5 h-3.5" /> Clear
        </button>
      </div>
    </div>
  );
}
