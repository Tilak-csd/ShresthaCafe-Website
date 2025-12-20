import React from 'react'
import {CheckCircle2, XCircle, X} from 'lucide-react'

export default function Modal({closeModal, modal}) {
  return (
     <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-black/60 backdrop-blur-md transition-all duration-300">
                    <div className="bg-white rounded-3xl p-8 w-full max-w-sm shadow-2xl border border-gray-100 flex flex-col items-center text-center transform transition-all scale-100 animate-in zoom-in-95 duration-200">
                        
                        <button 
                            onClick={closeModal} 
                            className="absolute top-4 right-4 p-2 text-gray-400 hover:text-black hover:bg-gray-100 rounded-full transition-colors"
                        >
                            <X size={20} />
                        </button>

                        <div className={`p-4 rounded-full mb-6 ${modal.type === 'success' ? 'bg-green-50' : 'bg-red-50'}`}>
                            {modal.type === 'success' ? (
                                <CheckCircle2 size={48} className="text-green-500" />
                            ) : (
                                <XCircle size={48} className="text-red-500" />
                            )}
                        </div>

                        <h3 className="text-2xl font-bold text-gray-900 tracking-tight">
                            {modal.title}
                        </h3>
                        
                        <p className="text-gray-500 mt-3 text-sm leading-relaxed">
                            {modal.message}
                        </p>

                        <button 
                            onClick={closeModal}
                            className={`mt-8 w-full py-4 rounded-xl font-bold text-white transition-all shadow-lg active:scale-95 ${
                                modal.type === 'success' 
                                ? "bg-green-600 hover:bg-green-700 shadow-green-200" 
                                : "bg-gray-900 hover:bg-black shadow-gray-200"
                            }`}
                        >
                            {modal.type === 'success' ? "Done" : "Try Again"}
                        </button>
                    </div>
                </div>
  )
}
