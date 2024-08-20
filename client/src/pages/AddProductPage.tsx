// // src/pages/AddProductPage.tsx
// import React, { useState } from 'react';
// import api from '../utils/api';
// import { useNavigate } from 'react-router-dom';

// const AddProductPage: React.FC = () => {
//     const [productName, setProductName] = useState('');
//     const [price, setPrice] = useState('');
//     const [description, setDescription] = useState('');
//     const [image, setImage] = useState<File | null>(null);
//     const navigate = useNavigate();

//     const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//         if (e.target.files) {
//             setImage(e.target.files[0]);
//         }
//     };

//     const handleSubmit = async (e: React.FormEvent) => {
//         e.preventDefault();
//         const formData = new FormData();
//         formData.append('productName', productName);
//         formData.append('price', price);
//         formData.append('description', description);
//         if (image) {
//             formData.append('image', image);
//         }

//         try {
//             await api.post('/products', formData, {
//                 headers: { 'Content-Type': 'multipart/form-data' }
//             });
//             navigate('/');
//         } catch (error) {
//             console.error('Error adding product:', error);
//         }
//     };

//     return (
//         <div className="add-product-page">
//             <h2>Add Product</h2>
//             <form onSubmit={handleSubmit}>
//                 <div>
//                     <label>Product Name:</label>
//                     <input
//                         type="text"
//                         value={productName}
//                         onChange={(e) => setProductName(e.target.value)}
//                         required
//                     />
//                 </div>
//                 <div>
//                     <label>Price:</label>
//                     <input
//                         type="number"
//                         value={price}
//                         onChange={(e) => setPrice(e.target.value)}
//                         required
//                     />
//                 </div>
//                 <div>
//                     <label>Description:</label>
//                     <textarea
//                         value={description}
//                         onChange={(e) => setDescription(e.target.value)}
//                         required
//                     />
//                 </div>
//                 <div>
//                     <label>Image:</label>
//                     <input type="file" accept="image/*" onChange={handleImageChange} />
//                 </div>
//                 <button type="submit">Add Product</button>
//             </form>
//         </div>
//     );
// };

// export default AddProductPage;
































































import React, { useState } from 'react';
import api from '../utils/api';
import { useNavigate } from 'react-router-dom';

const AddProductPage: React.FC = () => {
    const [productName, setProductName] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState<File | null>(null);
    const navigate = useNavigate();

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            setImage(e.target.files[0]);
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('productName', productName);
        formData.append('price', price);
        formData.append('description', description);
        if (image) {
            formData.append('image', image);
        }

        try {
            await api.post('/products', formData, {
                headers: {

                    'Content-Type': 'multipart/form-data'
                }
            });
            navigate('/');
        } catch (error) {
            console.error('Error adding product:', error);
        }
    };

    return (
        <div className="add-product-page">
            <h2>Add Product</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Product Name:</label>
                    <input
                        type="text"
                        value={productName}
                        onChange={(e) => setProductName(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Price:</label>
                    <input
                        type="number"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Description:</label>
                    <textarea
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Image:</label>
                    <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageChange}
                    />
                </div>
                <button type="submit">Add Product</button>
            </form>
        </div>
    );
};

export default AddProductPage;
