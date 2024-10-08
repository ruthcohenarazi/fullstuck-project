// import express from 'express';
// import Product from '../models/product.js';
// import multer from 'multer';
// import fs from 'fs';
// import { verifyToken, isAdmin } from '../middleware/auth.js';

// const router = express.Router();

// // Set up multer for file uploads
// const storage = multer.diskStorage({
//     destination: (req, file, cb) => {
//         const dir = './uploads/';
//         if (!fs.existsSync(dir))
//             fs.mkdirSync(dir);

//         cb(null, './uploads/');
//     },
//     filename: (req, file, cb) => {
//         const fileName = Date.now() + '-' + file.originalname;
//         cb(null, file.fieldname + '-' + fileName);
//     }
// });

// const upload = multer({ storage });

// // Get all products
// router.get('/', async (req, res) => {
//     try {
//         const products = await Product.find();
//         const productsWithImageUrl = products.map(product => ({
//             ...product._doc,
//             image: `http://localhost:3000${product.image}` // Adjust the URL accordingly
//         }));
//         res.json(productsWithImageUrl);
//     } catch (err) {
//         console.error('Error fetching products:', err);
//         res.status(500).send('Server Error');
//     }
// });

// // Fetch single product by ID
// router.get('/:id', async (req, res) => {
//     try {
//         const product = await Product.findById(req.params.id);
//         if (!product) {
//             return res.status(404).send('Product not found');
//         }
//         const productWithImageUrl = {
//             ...product._doc,
//             image: `http://localhost:3000${product.image}`
//         };
//         res.json(productWithImageUrl);
//     } catch (err) {
//         console.error('Error fetching product:', err);
//         res.status(500).send('Server Error');
//     }
// });

// // Add a new product (admin only)
// router.post('/', verifyToken, isAdmin, upload.single('image'), async (req, res) => {
//     const { productName, price, description } = req.body;
//     const image = req.file ? `/uploads/${req.file.filename}` : '';
//     try {
//         const newProduct = new Product({ productName, price, description, image });
//         const product = await newProduct.save();
//         res.json(product);
//     } catch (err) {
//         console.error('Error adding new product:', err);
//         res.status(500).send(`Server Error: ${err}`);
//     }
// });

// // Update product with image (admin only)
// router.put('/', verifyToken, isAdmin, upload.single('image'), async (req, res) => {
//     try {
//         const { productName, price, description } = req.body;
//         const product = await Product.findById(req.query.productId);
//         if (!product) {
//             return res.status(404).send('Product not found');
//         }
//         product.productName = productName;
//         product.price = price;
//         product.description = description;
//         if (req.file) {
//             product.image = `/uploads/${req.file.filename}`;
//         }
//         await product.save();

//         // Ensure the image field returns the full URL
//         const updatedProduct = {
//             ...product._doc,
//             image: `http://localhost:3000${product.image}`,
//         };

//         res.json(updatedProduct);
//     } catch (err) {
//         console.error('Error updating product:', err);

//         // Send a detailed error message to the client
//         res.status(500).json({ message: `Server Error: ${err}` });
//     }
// });

// // Search products by name
// router.get('/search', async (req, res) => {
//     try {
//         const { name } = req.query;
//         const products = await Product.find({ productName: { $regex: name, $options: 'i' } });
//         res.json(products);
//     } catch (err) {
//         console.error('Error searching products:', err);
//         res.status(500).send('Server Error');
//     }
// });

// // Delete product (admin only)
// router.delete('/:id', verifyToken, isAdmin, async (req, res) => {
//     try {
//         const product = await Product.findById(req.params.id);
//         if (!product) {
//             return res.status(404).send('Product not found');
//         }
//         await product.remove();
//         res.json({ message: 'Product removed' });
//     } catch (err) {
//         console.error('Error deleting product:', err);
//         res.status(500).send('Server Error');
//     }
// });

// export default router;













































// import express from 'express';
// import Product from '../models/product.js';
// import multer from 'multer';
// import fs from 'fs';
// import { verifyToken, isAdmin } from '../middleware/auth.js';

// const router = express.Router();

// // Set up multer for file uploads
// const storage = multer.diskStorage({
//     destination: (req, file, cb) => {
//         const dir = './uploads/';
//         if (!fs.existsSync(dir)) {
//             fs.mkdirSync(dir);
//         }
//         cb(null, './uploads/');
//     },
//     filename: (req, file, cb) => {
//         const fileName = Date.now() + '-' + file.originalname;
//         cb(null, file.fieldname + '-' + fileName);
//     }
// });

// const upload = multer({ storage });

// // Search products by name (make sure this comes before fetching by ID)
// router.get('/search', async (req, res) => {
//     try {
//         const { name } = req.query;
//         if (!name) {
//             return res.status(400).json({ message: 'Search term is required' });
//         }

//         const products = await Product.find({ productName: { $regex: name, $options: 'i' } });
//         if (!products.length) {
//             return res.status(404).json({ message: 'No products found' });
//         }

//         res.json(products);
//     } catch (err) {
//         console.error('Error searching products:', err);
//         res.status(500).send('Server Error');
//     }
// });

// // Get all products
// router.get('/', async (req, res) => {
//     try {
//         const products = await Product.find();
//         const productsWithImageUrl = products.map(product => ({
//             ...product._doc,
//             image: `http://localhost:3000${product.image}` // Adjust the URL accordingly
//         }));
//         res.json(productsWithImageUrl);
//     } catch (err) {
//         console.error('Error fetching products:', err);
//         res.status(500).send('Server Error');
//     }
// });

// // Fetch single product by ID
// router.get('/:id', async (req, res) => {
//     try {
//         const product = await Product.findById(req.params.id);
//         if (!product) {
//             return res.status(404).send('Product not found');
//         }
//         const productWithImageUrl = {
//             ...product._doc,
//             image: `http://localhost:3000${product.image}`
//         };
//         res.json(productWithImageUrl);
//     } catch (err) {
//         console.error('Error fetching product:', err);
//         res.status(500).send('Server Error');
//     }
// });



// // Add a new product (admin only)
// router.post('/', verifyToken, isAdmin, upload.single('image'), async (req, res) => {
//     const { productName, price, description } = req.body;
//     const image = req.file ? `/uploads/${req.file.filename}` : '';
//     try {
//         const newProduct = new Product({ productName, price, description, image });
//         const product = await newProduct.save();
//         res.json(product);
//     } catch (err) {
//         console.error('Error adding new product:', err);
//         res.status(500).send(`Server Error: ${err}`);
//     }
// });

// // Update product with image (admin only)
// router.put('/', verifyToken, isAdmin, upload.single('image'), async (req, res) => {
//     try {
//         const { productName, price, description } = req.body;
//         const product = await Product.findById(req.query.productId);
//         if (!product) {
//             return res.status(404).send('Product not found');
//         }
//         product.productName = productName;
//         product.price = price;
//         product.description = description;
//         if (req.file) {
//             product.image = `/uploads/${req.file.filename}`;
//         }
//         await product.save();

//         // Ensure the image field returns the full URL
//         const updatedProduct = {
//             ...product._doc,
//             image: `http://localhost:3000${product.image}`,
//         };

//         res.json(updatedProduct);
//     } catch (err) {
//         console.error('Error updating product:', err);

//         // Send a detailed error message to the client
//         res.status(500).json({ message: `Server Error: ${err}` });
//     }
// });

// // Delete product (admin only)
// router.delete('/:id', verifyToken, isAdmin, async (req, res) => {
//     try {
//         const product = await Product.findById(req.params.id);
//         if (!product) {
//             return res.status(404).send('Product not found');
//         }
//         await product.remove();
//         res.json({ message: 'Product removed' });
//     } catch (err) {
//         console.error('Error deleting product:', err);
//         res.status(500).send('Server Error');
//     }
// });

// export default router;




























































// import express from 'express';
// import Product from '../models/product.js';
// import multer from 'multer';
// import fs from 'fs';
// import { verifyToken, isAdmin } from '../middleware/auth.js';

// const router = express.Router();

// // Set up multer for file uploads
// const storage = multer.diskStorage({
//     destination: (req, file, cb) => {
//         const dir = './uploads/';
//         if (!fs.existsSync(dir))
//             fs.mkdirSync(dir);

//         cb(null, './uploads/');
//     },
//     filename: (req, file, cb) => {
//         const fileName = Date.now() + '-' + file.originalname;
//         cb(null, file.fieldname + '-' + fileName);
//     }
// });

// const upload = multer({ storage });

// // // Get all products with optional price range filter
// // router.get('/', async (req, res) => {
// //     try {
// //         const { minPrice, maxPrice } = req.query;

// //         const query = {};
// //         if (minPrice && maxPrice) {
// //             query.price = { $gte: parseFloat(minPrice), $lte: parseFloat(maxPrice) };
// //         }

// //         const products = await Product.find(query);
// //         const productsWithImageUrl = products.map(product => ({
// //             ...product._doc,
// //             image: `http://localhost:3000${product.image}` // Adjust the URL accordingly
// //         }));
// //         res.json(productsWithImageUrl);
// //     } catch (err) {
// //         console.error('Error fetching products:', err);
// //         res.status(500).send('Server Error');
// //     }
// // });

// // Get all products with optional price range filter
// router.get('/', async (req, res) => {
//     try {
//         const { minPrice, maxPrice } = req.query;

//         const query = {};

//         // If both minPrice and maxPrice are provided, apply both
//         if (minPrice && maxPrice) {
//             query.price = { $gte: parseFloat(minPrice), $lte: parseFloat(maxPrice) };
//         }
//         // If only minPrice is provided, filter by minimum price
//         else if (minPrice) {
//             query.price = { $gte: parseFloat(minPrice) };
//         }
//         // If only maxPrice is provided, filter by maximum price
//         else if (maxPrice) {
//             query.price = { $lte: parseFloat(maxPrice) };
//         }

//         const products = await Product.find(query);
//         const productsWithImageUrl = products.map(product => ({
//             ...product._doc,
//             image: `http://localhost:3000${product.image}` // Adjust the URL accordingly
//         }));

//         res.json(productsWithImageUrl);
//     } catch (err) {
//         console.error('Error fetching products:', err);
//         res.status(500).send('Server Error');
//     }
// });

// // Search products by name
// router.get('/search', async (req, res) => {
//     try {
//         const { name } = req.query;
//         const products = await Product.find({ productName: { $regex: name, $options: 'i' } });
//         res.json(products);
//     } catch (err) {
//         console.error('Error searching products:', err);
//         res.status(500).send('Server Error');
//     }
// });

// // Fetch single product by ID
// router.get('/:id', async (req, res) => {
//     try {
//         const product = await Product.findById(req.params.id);
//         if (!product) {
//             return res.status(404).send('Product not found');
//         }
//         const productWithImageUrl = {
//             ...product._doc,
//             image: `http://localhost:3000${product.image}`
//         };
//         res.json(productWithImageUrl);
//     } catch (err) {
//         console.error('Error fetching product:', err);
//         res.status(500).send('Server Error');
//     }
// });

// // Add a new product (admin only)
// router.post('/', verifyToken, isAdmin, upload.single('image'), async (req, res) => {
//     const { productName, price, description } = req.body;
//     const image = req.file ? `/uploads/${req.file.filename}` : '';
//     try {
//         const newProduct = new Product({ productName, price, description, image });
//         const product = await newProduct.save();
//         res.json(product);
//     } catch (err) {
//         console.error('Error adding new product:', err);
//         res.status(500).send(`Server Error: ${err}`);
//     }
// });

// // Update product with image (admin only)
// router.put('/', verifyToken, isAdmin, upload.single('image'), async (req, res) => {
//     try {
//         const { productName, price, description } = req.body;
//         const product = await Product.findById(req.query.productId);
//         if (!product) {
//             return res.status(404).send('Product not found');
//         }
//         product.productName = productName;
//         product.price = price;
//         product.description = description;
//         if (req.file) {
//             product.image = `/uploads/${req.file.filename}`;
//         }
//         await product.save();

//         const updatedProduct = {
//             ...product._doc,
//             image: `http://localhost:3000${product.image}`,
//         };

//         res.json(updatedProduct);
//     } catch (err) {
//         console.error('Error updating product:', err);
//         res.status(500).json({ message: `Server Error: ${err}` });
//     }
// });

// // Delete product (admin only)
// router.delete('/:id', verifyToken, isAdmin, async (req, res) => {
//     try {
//         const product = await Product.findById(req.params.id);
//         if (!product) {
//             return res.status(404).send('Product not found');
//         }

//         // Use deleteOne or findByIdAndDelete instead of remove
//         await Product.deleteOne({ _id: req.params.id });

//         res.json({ message: 'Product removed successfully' });
//     } catch (err) {
//         console.error('Error deleting product:', err);
//         res.status(500).send('Server Error');
//     }
// });

// export default router;























































// // src/routes/product.js

// import express from 'express';
// import Product from '../models/product.js';
// import multer from 'multer';
// import fs from 'fs';
// import { verifyToken, isAdmin } from '../middleware/auth.js'; // Import authentication and authorization middleware

// // Create a new router instance
// const router = express.Router();

// // Set up multer for file uploads, using disk storage and a directory for images
// const storage = multer.diskStorage({
//     destination: (req, file, cb) => {
//         const dir = './uploads/';
//         if (!fs.existsSync(dir)) {
//             fs.mkdirSync(dir); // Create the uploads directory if it doesn't exist
//         }
//         cb(null, dir);
//     },
//     filename: (req, file, cb) => {
//         const fileName = Date.now() + '-' + file.originalname;
//         cb(null, file.fieldname + '-' + fileName); // Name the uploaded file with a timestamp and original name
//     }
// });

// const upload = multer({ storage }); // Configure multer with the specified storage

// // Get all products with optional price range filter
// router.get('/', async (req, res) => {
//     try {
//         const { minPrice, maxPrice } = req.query;
//         const query = {};

//         // Apply price range filters if provided
//         if (minPrice && maxPrice) {
//             query.price = { $gte: parseFloat(minPrice), $lte: parseFloat(maxPrice) };
//         } else if (minPrice) {
//             query.price = { $gte: parseFloat(minPrice) }; // Filter by minimum price
//         } else if (maxPrice) {
//             query.price = { $lte: parseFloat(maxPrice) }; // Filter by maximum price
//         }

//         const products = await Product.find(query);
//         // Return products with adjusted image URLs
//         const productsWithImageUrl = products.map(product => ({
//             ...product._doc,
//             image: `http://localhost:3000${product.image}`
//         }));
//         res.json(productsWithImageUrl);
//     } catch (err) {
//         console.error('Error fetching products:', err);
//         res.status(500).send('Server Error');
//     }
// });

// // Search products by name
// router.get('/search', async (req, res) => {
//     try {
//         const { name } = req.query;
//         const products = await Product.find({ productName: { $regex: name, $options: 'i' } }); // Case-insensitive regex search
//         res.json(products);
//     } catch (err) {
//         console.error('Error searching products:', err);
//         res.status(500).send('Server Error');
//     }
// });

// // Fetch single product by ID
// router.get('/:id', async (req, res) => {
//     try {
//         const product = await Product.findById(req.params.id);
//         if (!product) {
//             return res.status(404).send('Product not found');
//         }
//         // Return the product with the adjusted image URL
//         const productWithImageUrl = {
//             ...product._doc,
//             image: `http://localhost:3000${product.image}`
//         };
//         res.json(productWithImageUrl);
//     } catch (err) {
//         console.error('Error fetching product:', err);
//         res.status(500).send('Server Error');
//     }
// });

// // Add a new product (admin only)
// router.post('/', verifyToken, isAdmin, upload.single('image'), async (req, res) => {
//     const { productName, price, description } = req.body;
//     const image = req.file ? `/uploads/${req.file.filename}` : ''; // Save the image if uploaded
//     try {
//         const newProduct = new Product({ productName, price, description, image });
//         const product = await newProduct.save();
//         res.json(product); // Respond with the new product
//     } catch (err) {
//         console.error('Error adding new product:', err);
//         res.status(500).send(`Server Error: ${err}`);
//     }
// });

// // Update product with image (admin only)
// router.put('/', verifyToken, isAdmin, upload.single('image'), async (req, res) => {
//     try {
//         const { productName, price, description } = req.body;
//         const product = await Product.findById(req.query.productId);
//         if (!product) {
//             return res.status(404).send('Product not found');
//         }
//         // Update product details
//         product.productName = productName;
//         product.price = price;
//         product.description = description;
//         if (req.file) {
//             product.image = `/uploads/${req.file.filename}`; // Update image if provided
//         }
//         await product.save();
//         // Respond with the updated product and adjusted image URL
//         const updatedProduct = {
//             ...product._doc,
//             image: `http://localhost:3000${product.image}`,
//         };
//         res.json(updatedProduct);
//     } catch (err) {
//         console.error('Error updating product:', err);
//         res.status(500).json({ message: `Server Error: ${err}` });
//     }
// });

// // Delete product (admin only)
// router.delete('/:id', verifyToken, isAdmin, async (req, res) => {
//     try {
//         const product = await Product.findById(req.params.id);
//         if (!product) {
//             return res.status(404).send('Product not found');
//         }
//         await Product.deleteOne({ _id: req.params.id }); // Delete the product by its ID
//         res.json({ message: 'Product removed successfully' });
//     } catch (err) {
//         console.error('Error deleting product:', err);
//         res.status(500).send('Server Error');
//     }
// });

// export default router;

















































// // src/routes/product.js

// import express from 'express';
// import Product from '../models/product.js';
// import multer from 'multer';
// import fs from 'fs';
// import { verifyToken, isAdmin } from '../middleware/auth.js'; // Import authentication and authorization middleware

// // Create a new router instance
// const router = express.Router();

// // Set up multer for file uploads, using disk storage and a directory for images
// const storage = multer.diskStorage({
//     destination: (req, file, cb) => {
//         const dir = './uploads/';
//         if (!fs.existsSync(dir)) {
//             fs.mkdirSync(dir); // Create the uploads directory if it doesn't exist
//         }
//         cb(null, dir);
//     },
//     filename: (req, file, cb) => {
//         const fileName = Date.now() + '-' + file.originalname;
//         cb(null, file.fieldname + '-' + fileName); // Name the uploaded file with a timestamp and original name
//     }
// });

// const upload = multer({ storage }); // Configure multer with the specified storage

// // Get all products with optional price range filter
// router.get('/', async (req, res) => {
//     try {
//         const { minPrice, maxPrice } = req.query;
//         const query = {};

//         // Apply price range filters if provided
//         if (minPrice && maxPrice) {
//             query.price = { $gte: parseFloat(minPrice), $lte: parseFloat(maxPrice) };
//         } else if (minPrice) {
//             query.price = { $gte: parseFloat(minPrice) }; // Filter by minimum price
//         } else if (maxPrice) {
//             query.price = { $lte: parseFloat(maxPrice) }; // Filter by maximum price
//         }

//         const products = await Product.find(query);
//         // Return products with adjusted image URLs
//         const productsWithImageUrl = products.map(product => ({
//             ...product._doc,
//             image: `http://localhost:3000${product.image}`
//         }));
//         res.json(productsWithImageUrl);
//     } catch (err) {
//         console.error('Error fetching products:', err);
//         res.status(500).send('Server Error');
//     }
// });

// // Search products by name
// router.get('/search', async (req, res) => {
//     try {
//         const { name } = req.query;
//         const products = await Product.find({ productName: { $regex: name, $options: 'i' } }); // Case-insensitive regex search
//         res.json(products);
//     } catch (err) {
//         console.error('Error searching products:', err);
//         res.status(500).send('Server Error');
//     }
// });

// // Fetch single product by ID
// router.get('/:id', async (req, res) => {
//     try {
//         const product = await Product.findById(req.params.id);
//         if (!product) {
//             return res.status(404).send('Product not found');
//         }
//         // Return the product with the adjusted image URL
//         const productWithImageUrl = {
//             ...product._doc,
//             image: `http://localhost:3000${product.image}`
//         };
//         res.json(productWithImageUrl);
//     } catch (err) {
//         console.error('Error fetching product:', err);
//         res.status(500).send('Server Error');
//     }
// });

// // Add a new product (admin only)
// router.post('/', verifyToken, isAdmin, upload.single('image'), async (req, res) => {
//     const { productName, price, description } = req.body;
//     const image = req.file ? `/uploads/${req.file.filename}` : ''; // Save the image if uploaded
//     try {
//         const newProduct = new Product({ productName, price, description, image });
//         const product = await newProduct.save();
//         res.json(product); // Respond with the new product
//     } catch (err) {
//         console.error('Error adding new product:', err);
//         res.status(500).send(`Server Error: ${err}`);
//     }
// });

// // Update product with image (admin only)
// router.put('/', verifyToken, isAdmin, upload.single('image'), async (req, res) => {
//     try {
//         const { productName, price, description } = req.body;
//         const product = await Product.findById(req.query.productId);
//         if (!product) {
//             return res.status(404).send('Product not found');
//         }
//         // Update product details
//         product.productName = productName;
//         product.price = price;
//         product.description = description;
//         if (req.file) {
//             product.image = `/uploads/${req.file.filename}`; // Update image if provided
//         }
//         await product.save();
//         // Respond with the updated product and adjusted image URL
//         const updatedProduct = {
//             ...product._doc,
//             image: `http://localhost:3000${product.image}`,
//         };
//         res.json(updatedProduct);
//     } catch (err) {
//         console.error('Error updating product:', err);
//         res.status(500).json({ message: `Server Error: ${err}` });
//     }
// });

// // Delete product (admin only)
// router.delete('/:id', verifyToken, isAdmin, async (req, res) => {
//     try {
//         const product = await Product.findById(req.params.id);
//         if (!product) {
//             return res.status(404).send('Product not found');
//         }
//         await Product.deleteOne({ _id: req.params.id }); // Delete the product by its ID
//         res.json({ message: 'Product removed successfully' });
//     } catch (err) {
//         console.error('Error deleting product:', err);
//         res.status(500).send('Server Error');
//     }
// });

// export default router;












































// src/routes/product.js

import express from 'express';
import Product from '../models/product.js';
import multer from 'multer';
import fs from 'fs';
import { verifyToken, isAdmin } from '../middleware/auth.js';  // Import authentication and authorization middleware

const router = express.Router();

// Set up multer for file uploads
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        const dir = './uploads/';
        if (!fs.existsSync(dir)) fs.mkdirSync(dir);
        cb(null, dir);
    },
    filename: (req, file, cb) => {
        const fileName = Date.now() + '-' + file.originalname;
        cb(null, file.fieldname + '-' + fileName);
    }
});

const upload = multer({ storage });

// Get all products with optional price range filter
router.get('/', async (req, res) => {
    try {
        const { minPrice, maxPrice } = req.query;
        const query = {};
        if (minPrice && maxPrice) query.price = { $gte: parseFloat(minPrice), $lte: parseFloat(maxPrice) };
        else if (minPrice) query.price = { $gte: parseFloat(minPrice) };
        else if (maxPrice) query.price = { $lte: parseFloat(maxPrice) };

        const products = await Product.find(query);
        const productsWithImageUrl = products.map(product => ({
            ...product._doc,
            image: `http://localhost:3000${product.image}`
        }));
        res.json(productsWithImageUrl);
    } catch (err) {
        console.error('Error fetching products:', err);
        res.status(500).send('Server Error');
    }
});

// Search products by name
router.get('/search', async (req, res) => {
    try {
        const { name } = req.query;
        const products = await Product.find({ productName: { $regex: name, $options: 'i' } });
        res.json(products);
    } catch (err) {
        console.error('Error searching products:', err);
        res.status(500).send('Server Error');
    }
});

// Fetch single product by ID
router.get('/:id', async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        if (!product) return res.status(404).send('Product not found');
        const productWithImageUrl = {
            ...product._doc,
            image: `http://localhost:3000${product.image}`
        };
        res.json(productWithImageUrl);
    } catch (err) {
        console.error('Error fetching product:', err);
        res.status(500).send('Server Error');
    }
});

// Add a new product (admin only)
router.post('/', verifyToken, isAdmin, upload.single('image'), async (req, res) => {
    const { productName, price, description } = req.body;
    const image = req.file ? `/uploads/${req.file.filename}` : '';
    try {
        const newProduct = new Product({ productName, price, description, image });
        const product = await newProduct.save();
        res.json(product);
    } catch (err) {
        console.error('Error adding new product:', err);
        res.status(500).send(`Server Error: ${err}`);
    }
});

// Update product with image (admin only)
router.put('/', verifyToken, isAdmin, upload.single('image'), async (req, res) => {
    try {
        const { productName, price, description } = req.body;
        const product = await Product.findById(req.query.productId);
        if (!product) return res.status(404).send('Product not found');

        product.productName = productName;
        product.price = price;
        product.description = description;
        if (req.file) product.image = `/uploads/${req.file.filename}`;

        await product.save();
        const updatedProduct = {
            ...product._doc,
            image: `http://localhost:3000${product.image}`
        };
        res.json(updatedProduct);
    } catch (err) {
        console.error('Error updating product:', err);
        res.status(500).json({ message: `Server Error: ${err}` });
    }
});

// Delete product (admin only)
router.delete('/:id', verifyToken, isAdmin, async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        if (!product) return res.status(404).send('Product not found');
        await Product.deleteOne({ _id: req.params.id });
        res.json({ message: 'Product removed successfully' });
    } catch (err) {
        console.error('Error deleting product:', err);
        res.status(500).send('Server Error');
    }
});

export default router;
