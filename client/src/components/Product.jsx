import React, { useState, useEffect } from 'react';
import axios from "axios";
import { Link } from "react-router-dom";

const Product = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios
            .get('http://localhost:5000/api/products/fetch')
            .then((result) => {
                setProducts(result.data);
                setLoading(false);
            })
            .catch((err) => {
                console.log(err);
                setLoading(false);
            });
    }, []);

    return (
        <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            {/* Page Header */}
            <div className="text-center mb-12">
                <h1 className="text-4xl font-extrabold text-gray-900 mb-4">FOOTBALL BOOTS COLLECTION</h1>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                    Premium performance footwear for every playing style and surface
                </p>
            </div>

            {/* Loading State */}
            {loading && (
                <div className="flex justify-center items-center h-64">
                    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-yellow-500"></div>
                </div>
            )}

            {/* Products Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {products.map((product) => (
                    <div key={product._id} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group">
                        {/* Product Image */}
                        <div className="relative overflow-hidden h-64 bg-gray-100 flex items-center justify-center p-4">
                            <img 
                                src={product.image} 
                                alt={product.name} 
                                className="h-full object-contain transform group-hover:scale-105 transition-transform duration-300"
                            />
                            {/* Discount Badge */}
                            {product.off > 0 && (
                                <div className="absolute top-4 right-4 bg-yellow-500 text-black font-bold px-3 py-1 rounded-full text-sm">
                                    {product.off}% OFF
                                </div>
                            )}
                        </div>

                        {/* Product Info */}
                        <div className="p-6">
                            <h3 className="text-lg font-semibold text-gray-900 mb-2 truncate">{product.name}</h3>
                            
                            {/* Price */}
                            <div className="flex items-center mb-3">
                                <span className="text-xl font-bold text-gray-900 mr-2">RS {product.price}</span>
                                {product.oldPrice > product.price && (
                                    <span className="text-sm text-gray-500 line-through">RS {product.oldPrice}</span>
                                )}
                            </div>

                            {/* Rating */}
                            <div className="flex items-center mb-4">
                                <div className="flex text-yellow-400">
                                    {[...Array(5)].map((_, i) => (
                                        <svg
                                            key={i}
                                            className={`w-5 h-5 ${i < Math.floor(parseFloat(product.rating)) ? 'fill-current' : 'fill-none stroke-current'}`}
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
                                                strokeWidth="1"
                                            />
                                        </svg>
                                    ))}
                                </div>
                                <span className="text-sm text-gray-500 ml-1">({product.reviews})</span>
                            </div>

                            {/* Action Buttons */}
                            <div className="flex space-x-2">
                                <button className="flex-1 bg-gray-900 text-white py-2 px-4 rounded-lg hover:bg-gray-800 transition-colors font-medium">
                                    Add to Cart
                                </button>
                                <button className="w-10 h-10 flex items-center justify-center border border-gray-300 rounded-lg hover:bg-gray-100 transition-colors">
                                    <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Empty State */}
            {!loading && products.length === 0 && (
                <div className="text-center py-12">
                    <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                    <h3 className="mt-2 text-lg font-medium text-gray-900">No products found</h3>
                    <p className="mt-1 text-gray-500">We couldn't find any football shoes matching your criteria.</p>
                </div>
            )}
        </div>
    );
};

export default Product;