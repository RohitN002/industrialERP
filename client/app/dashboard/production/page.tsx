"use client";

import { useProductions, useDeleteProduction } from "@/modules/hooks/useProduction";
import Link from "next/link";
import { Edit, Trash2, Plus, Info } from "lucide-react";
import toast from "react-hot-toast";

export default function ProductionPage() {
    const { data: productions, isLoading, isError } = useProductions();
    const deleteMutation = useDeleteProduction();

    const handleDelete = (id: string) => {
      if (confirm("Are you sure you want to delete this production batch?")) {
        deleteMutation.mutate(id, {
          onSuccess: () => {
             toast.success("Production batch deleted!");
          }
        });
      }
    };

    const getStatusColor = (status: string) => {
        switch(status) {
            case 'COMPLETED': return 'bg-green-500/20 text-green-400';
            case 'IN_PROGRESS': return 'bg-blue-500/20 text-blue-400';
            case 'REJECTED': return 'bg-red-500/20 text-red-400';
            default: return 'bg-gray-500/20 text-gray-400';
        }
    }

    return (
        <div className="flex-1 p-6 text-gray-100">
            <div className="flex justify-between items-center mb-6">
               <h1 className="text-2xl font-bold">Production Batches</h1>
               <Link 
                 href="/dashboard/production/create"
                 className="flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-lg font-medium transition-colors"
               >
                 <Plus size={18} />
                 New Batch
               </Link>
            </div>

            <div className="bg-gray-800 rounded-xl shadow overflow-hidden border border-gray-700">
               {isLoading ? (
                 <div className="p-8 text-center text-gray-400">Loading production batches...</div>
               ) : isError ? (
                 <div className="p-8 text-center text-red-400">Error loading production data.</div>
               ) : productions?.length === 0 ? (
                 <div className="p-8 text-center text-gray-400">No batches found. Start a new production batch.</div>
               ) : (
                 <div className="overflow-x-auto">
                   <table className="w-full text-left border-collapse">
                     <thead>
                       <tr className="bg-gray-900 border-b border-gray-700 text-sm uppercase tracking-wider text-gray-400">
                         <th className="p-4 font-medium">Batch No</th>
                         <th className="p-4 font-medium">Product</th>
                         <th className="p-4 font-medium">Status</th>
                         <th className="p-4 font-medium">Materials Used</th>
                         <th className="p-4 font-medium">Created By</th>
                         <th className="p-4 font-medium text-right">Actions</th>
                       </tr>
                     </thead>
                     <tbody className="divide-y divide-gray-700">
                       {productions?.map((prod) => (
                         <tr key={prod.id} className="hover:bg-gray-750 transition-colors">
                           <td className="p-4 font-bold">{prod.batchNo}</td>
                           <td className="p-4 text-gray-300">
                               {prod.producedProduct?.name || 'Unknown'} 
                               <span className="text-xs text-gray-500 ml-1">({prod.producedProduct?.sku})</span>
                           </td>
                           <td className="p-4">
                              <span className={`px-2 py-1 rounded-full text-xs font-semibold ${getStatusColor(prod.status)}`}>
                                {prod.status.replace('_', ' ')}
                              </span>
                           </td>
                           <td className="p-4 text-gray-300">
                              {prod.items.length} item(s)
                           </td>
                           <td className="p-4 text-gray-400 text-sm">
                              {prod.createdBy?.user?.name || 'Unknown'}
                           </td>
                           <td className="p-4 flex items-center justify-end gap-3 text-gray-400">
                             <Link 
                               href={`/dashboard/production/${prod.id}/edit`}
                               className="hover:text-blue-400 transition-colors"
                             >
                               <Edit size={18} />
                             </Link>
                             <button
                               onClick={() => handleDelete(prod.id)}
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