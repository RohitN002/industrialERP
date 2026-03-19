"use client";

import { useProducts, useDeleteProduct } from "@/modules/hooks/useProduct";
import Link from "next/link";
import { Edit, Trash2, Plus } from "lucide-react";
import toast from "react-hot-toast";

export default function ProductPage() {
    const { data: products, isLoading, isError } = useProducts();
    const deleteMutation = useDeleteProduct();

    const handleDelete = (id: string) => {
      if (confirm("Are you sure you want to delete this product?")) {
        deleteMutation.mutate(id, {
          onSuccess: () => {
             toast.success("Product deleted successfully");
          }
        });
      }
    };

    return (
        <div className="flex-1 p-6 text-gray-100">
            <div className="flex justify-between items-center mb-6">
               <h1 className="text-2xl font-bold">Products</h1>
               <Link 
                 href="/dashboard/product/create"
                 className="flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-lg font-medium transition-colors"
               >
                 <Plus size={18} />
                 Add Product
               </Link>
            </div>

            <div className="bg-gray-800 rounded-xl shadow overflow-hidden border border-gray-700">
               {isLoading ? (
                 <div className="p-8 text-center text-gray-400">Loading products...</div>
               ) : isError ? (
                 <div className="p-8 text-center text-red-400">Error loading products.</div>
               ) : products?.length === 0 ? (
                 <div className="p-8 text-center text-gray-400">No products found. Add one to get started.</div>
               ) : (
                 <div className="overflow-x-auto">
                   <table className="w-full text-left border-collapse">
                     <thead>
                       <tr className="bg-gray-900 border-b border-gray-700 text-sm uppercase tracking-wider text-gray-400">
                         <th className="p-4 font-medium">Name</th>
                         <th className="p-4 font-medium">SKU</th>
                         <th className="p-4 font-medium">Type</th>
                         <th className="p-4 font-medium">Price</th>
                         <th className="p-4 font-medium">Stock</th>
                         <th className="p-4 font-medium text-right">Actions</th>
                       </tr>
                     </thead>
                     <tbody className="divide-y divide-gray-700">
                       {products?.map((product) => (
                         <tr key={product.id} className="hover:bg-gray-750 transition-colors">
                           <td className="p-4 font-medium">{product.name}</td>
                           <td className="p-4 text-gray-300">{product.sku}</td>
                           <td className="p-4 text-gray-300">
                              <span className="px-2 py-1 bg-gray-700 rounded-full text-xs">
                                {product.type.replace('_', ' ')}
                              </span>
                           </td>
                           <td className="p-4 text-gray-300">${Number(product.price).toFixed(2)}</td>
                           <td className="p-4 text-gray-300">
                              <span className={`font-bold ${product.stockQuantity < 10 ? 'text-red-400' : 'text-green-400'}`}>
                                {product.stockQuantity}
                              </span>
                           </td>
                           <td className="p-4 flex items-center justify-end gap-3 text-gray-400">
                             <Link 
                               href={`/dashboard/product/${product.id}/edit`}
                               className="hover:text-blue-400 transition-colors"
                             >
                               <Edit size={18} />
                             </Link>
                             <button
                               onClick={() => handleDelete(product.id)}
                               className="hover:text-red-400 transition-colors"
                             >
                               <Trash2 size={18} />
                             </button>
                           </td>
                         </tr>
                       ))}
                     </tbody>
                   </table>
                 </div>
               )}
            </div>
        </div>
    );
}