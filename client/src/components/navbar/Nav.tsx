// // src/components/navbar/Nav.tsx
// import React, { useState, useRef, useEffect } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { MdOutlineShoppingCart } from "react-icons/md";
// import { CiHeart } from "react-icons/ci";
// import { BsTelephone } from "react-icons/bs";
// import { FiUser } from "react-icons/fi";
// import { IoHomeOutline } from "react-icons/io5";
// import { useSelector, useDispatch } from 'react-redux';
// import { AppDispatch, RootState } from '../../store';
// import { fetchProducts } from '../../slices/productSlice';
// import SearchBar from '../searchBar/SearchBar';
// import { logoutUser } from '../../slices/userSlice';
// import './Nav.css';

// interface NavProps {
//     onResetFilters: () => void;
// }

// const Nav: React.FC<NavProps> = ({ onResetFilters }) => {
//     const firstName = useSelector((state: RootState) => state.user.userDetails.firstName);
//     const isAuthenticated = useSelector((state: RootState) => state.user.isAuthenticated);
//     const userRole = useSelector((state: RootState) => state.user.userDetails.role);
//     const cartItems = useSelector((state: RootState) => state.user.cart.length); // Number of items in cart
//     const favoriteItems = useSelector((state: RootState) => state.user.favorites.length); // Number of items in favorites
//     const navigate = useNavigate();
//     const dispatch: AppDispatch = useDispatch();

//     const dropdownRef = useRef<HTMLLIElement>(null);
//     const [isDropdownOpen, setDropdownOpen] = useState(false);

//     const toggleDropdown = () => setDropdownOpen(!isDropdownOpen);

//     const handleLogout = () => {
//         const confirmed = window.confirm('Are you sure you want to logout?');
//         if (confirmed) {
//             logoutUser(); // Removed the dispatch argument
//             navigate('/log-in'); // Navigate to the login page after logout
//         }
//     };

//     const closeDropdown = (e: MouseEvent) => {
//         if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
//             setDropdownOpen(false);
//         }
//     };

//     const handleLogoOrHomeClick = () => {
//         onResetFilters(); // Clear filters
//         dispatch(fetchProducts({ minPrice: '', maxPrice: '' })); // Fetch all products
//         navigate('/'); // Redirect to the home page
//     };

//     useEffect(() => {
//         document.addEventListener('mousedown', closeDropdown);
//         return () => document.removeEventListener('mousedown', closeDropdown);
//     }, []);

//     return (
//         <nav>
//             <ul>
//                 {userRole === 'admin' && (
//                     <li><Link to="/add-product"> + </Link></li>
//                 )}
//                 <li className="icon-container">
//                     <Link to="/cart">
//                         <MdOutlineShoppingCart />
//                         {cartItems > 0 && <span className="cart-count-badge">{cartItems}</span>}
//                     </Link>
//                 </li>
//                 <li className="icon-container">
//                     <Link to="/favorite">
//                         <CiHeart />
//                         {favoriteItems > 0 && <span className="favorite-count-badge">{favoriteItems}</span>}
//                     </Link>
//                 </li>
//                 <li>
//                     <Link to="/contactUs">
//                         <BsTelephone />
//                     </Link>
//                 </li>
//                 <li>
//                     <Link to="/" onClick={handleLogoOrHomeClick}>
//                         <IoHomeOutline />
//                     </Link>
//                 </li>
//                 <li>
//                     <Link to="/" onClick={handleLogoOrHomeClick}>
//                         <img src={`${process.env.PUBLIC_URL}/assets/images/Logo.png`} alt="logo" />
//                     </Link>
//                 </li>
//                 <li>
//                     <SearchBar />
//                 </li>
//                 <li className="dropdown" ref={dropdownRef}>
//                     <div className="icon-wrapper" onClick={toggleDropdown}>
//                         <FiUser />
//                     </div>
//                     {isDropdownOpen && (
//                         <div className="dropdown-content">
//                             {!isAuthenticated && (
//                                 <Link to="/log-in" onClick={() => setDropdownOpen(false)}>Login</Link>
//                             )}
//                             {isAuthenticated && (
//                                 <>
//                                     <Link to="/update-profile" onClick={() => setDropdownOpen(false)}>Update Profile</Link>
//                                     <span onClick={handleLogout}>Logout</span>
//                                 </>
//                             )}
//                         </div>
//                     )}
//                 </li>
//             </ul>
//         </nav>
//     );
// };

// export default Nav;






















// src/components/navbar/Nav.tsx
// // src/components/navbar/Nav.tsx
// import React, { useState, useRef, useEffect } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { MdOutlineShoppingCart } from "react-icons/md";
// import { CiHeart } from "react-icons/ci";
// import { BsTelephone } from "react-icons/bs";
// import { FiUser } from "react-icons/fi";
// import { IoHomeOutline } from "react-icons/io5";
// import { useSelector, useDispatch } from 'react-redux';
// import { AppDispatch, RootState } from '../../store';
// import { fetchProducts } from '../../slices/productSlice';
// import { fetchCartItems, fetchFavoriteItems, logoutUser } from '../../slices/userSlice';
// import SearchBar from '../searchBar/SearchBar';
// import './Nav.css';

// interface NavProps {
//     onResetFilters: () => void;
// }

// const Nav: React.FC<NavProps> = ({ onResetFilters }) => {
//     const firstName = useSelector((state: RootState) => state.user.userDetails.firstName);
//     const isAuthenticated = useSelector((state: RootState) => state.user.isAuthenticated);
//     const userRole = useSelector((state: RootState) => state.user.userDetails.role);
//     const cartItemsCount = useSelector((state: RootState) => state.user.cart.length);
//     const favoriteItemsCount = useSelector((state: RootState) => state.user.favorites.length);
//     const navigate = useNavigate();
//     const dispatch: AppDispatch = useDispatch();

//     const dropdownRef = useRef<HTMLLIElement>(null);
//     const [isDropdownOpen, setDropdownOpen] = useState(false);

//     const toggleDropdown = () => setDropdownOpen(!isDropdownOpen);

//     const handleLogout = () => {
//         const confirmed = window.confirm('Are you sure you want to logout?');
//         if (confirmed) {
//             dispatch(logoutUser());
//             navigate('/log-in'); // Navigate to the login page after logout
//         }
//     };

//     const closeDropdown = (e: MouseEvent) => {
//         if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
//             setDropdownOpen(false);
//         }
//     };

//     const handleLogoOrHomeClick = () => {
//         onResetFilters(); // Clear filters
//         dispatch(fetchProducts({ minPrice: '', maxPrice: '' })); // Fetch all products
//         navigate('/'); // Redirect to the home page
//     };

//     useEffect(() => {
//         if (isAuthenticated) {
//             // Fetch cart and favorites when the user is authenticated
//             dispatch(fetchCartItems());
//             dispatch(fetchFavoriteItems());
//         }
//         document.addEventListener('mousedown', closeDropdown);
//         return () => document.removeEventListener('mousedown', closeDropdown);
//     }, [isAuthenticated, dispatch]);

//     return (
//         <nav>
//             <ul>
//                 {userRole === 'admin' && (
//                     <li><Link to="/add-product"> + </Link></li>
//                 )}
//                 <li className="icon-container">
//                     <Link to="/cart">
//                         <MdOutlineShoppingCart />
//                         {cartItemsCount > 0 && (
//                             <div className="cart-count-badge">{cartItemsCount}</div>
//                         )}
//                     </Link>
//                 </li>
//                 <li className="icon-container">
//                     <Link to="/favorite">
//                         <CiHeart />
//                         {favoriteItemsCount > 0 && (
//                             <div className="favorite-count-badge">{favoriteItemsCount}</div>
//                         )}
//                     </Link>
//                 </li>
//                 <li>
//                     <Link to="/contactUs">
//                         <BsTelephone />
//                     </Link>
//                 </li>
//                 <li>
//                     <Link to="/" onClick={handleLogoOrHomeClick}>
//                         <IoHomeOutline />
//                     </Link>
//                 </li>
//                 <li>
//                     <Link to="/" onClick={handleLogoOrHomeClick}>
//                         <img src={`${process.env.PUBLIC_URL}/assets/images/Logo.png`} alt="logo" />
//                     </Link>
//                 </li>
//                 <li>
//                     <SearchBar />
//                 </li>
//                 <li className="dropdown" ref={dropdownRef}>
//                     <div className="icon-wrapper" onClick={toggleDropdown}>
//                         <FiUser />
//                     </div>
//                     {isDropdownOpen && (
//                         <div className="dropdown-content">
//                             {!isAuthenticated && (
//                                 <Link to="/log-in" onClick={() => setDropdownOpen(false)}>Login</Link>
//                             )}
//                             {isAuthenticated && (
//                                 <>
//                                     <Link to="/update-profile" onClick={() => setDropdownOpen(false)}>Update Profile</Link>
//                                     <span onClick={handleLogout}>Logout</span>
//                                 </>
//                             )}
//                         </div>
//                     )}
//                 </li>
//             </ul>
//         </nav>
//     );
// };

// export default Nav;


































































// import React, { useState, useRef, useEffect } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { MdOutlineShoppingCart } from "react-icons/md";
// import { CiHeart } from "react-icons/ci";
// import { BsTelephone } from "react-icons/bs";
// import { FiUser } from "react-icons/fi";
// import { IoHomeOutline } from "react-icons/io5";
// import { useSelector, useDispatch } from 'react-redux';
// import { AppDispatch, RootState } from '../../store';
// import { fetchProducts } from '../../slices/productSlice';
// import { fetchCartItems, fetchFavoriteItems, logoutUser } from '../../slices/userSlice';
// import SearchBar from '../searchBar/SearchBar';
// import './Nav.css';

// interface NavProps {
//     onResetFilters: () => void;
// }

// const Nav: React.FC<NavProps> = ({ onResetFilters }) => {
//     const firstName = useSelector((state: RootState) => state.user.userDetails.firstName);
//     const isAuthenticated = useSelector((state: RootState) => state.user.isAuthenticated);
//     const userRole = useSelector((state: RootState) => state.user.userDetails.role);
//     const cartItemsCount = useSelector((state: RootState) => state.user.cart.length);
//     const favoriteItemsCount = useSelector((state: RootState) => state.user.favorites.length);
//     const navigate = useNavigate();
//     const dispatch: AppDispatch = useDispatch();

//     const dropdownRef = useRef<HTMLLIElement>(null);
//     const [isDropdownOpen, setDropdownOpen] = useState(false);

//     const toggleDropdown = () => setDropdownOpen(!isDropdownOpen);

//     const handleLogout = () => {
//         const confirmed = window.confirm('Are you sure you want to logout?');
//         if (confirmed) {
//             dispatch(logoutUser());
//             navigate('/log-in'); // Navigate to the login page after logout
//         }
//     };

//     const closeDropdown = (e: MouseEvent) => {
//         if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
//             setDropdownOpen(false);
//         }
//     };

//     const handleLogoOrHomeClick = () => {
//         onResetFilters(); // Clear filters
//         dispatch(fetchProducts({ minPrice: '', maxPrice: '' })); // Fetch all products
//         navigate('/'); // Redirect to the home page
//     };

//     const goToOrders = () => {
//         setDropdownOpen(false);
//         navigate('/orders'); // Navigate to the orders page
//     };

//     useEffect(() => {
//         if (isAuthenticated) {
//             // Fetch cart and favorites when the user is authenticated
//             dispatch(fetchCartItems());
//             dispatch(fetchFavoriteItems());
//         }
//         document.addEventListener('mousedown', closeDropdown);
//         return () => document.removeEventListener('mousedown', closeDropdown);
//     }, [isAuthenticated, dispatch]);

//     return (
//         <nav>
//             <ul>
//                 {userRole === 'admin' && (
//                     <li><Link to="/add-product"> + </Link></li>
//                 )}
//                 <li className="icon-container">
//                     <Link to="/cart">
//                         <MdOutlineShoppingCart />
//                         {cartItemsCount > 0 && (
//                             <div className="cart-count-badge">{cartItemsCount}</div>
//                         )}
//                     </Link>
//                 </li>
//                 <li className="icon-container">
//                     <Link to="/favorite">
//                         <CiHeart />
//                         {favoriteItemsCount > 0 && (
//                             <div className="favorite-count-badge">{favoriteItemsCount}</div>
//                         )}
//                     </Link>
//                 </li>
//                 <li>
//                     <Link to="/contactUs">
//                         <BsTelephone />
//                     </Link>
//                 </li>
//                 <li>
//                     <Link to="/" onClick={handleLogoOrHomeClick}>
//                         <IoHomeOutline />
//                     </Link>
//                 </li>
//                 <li>
//                     <Link to="/" onClick={handleLogoOrHomeClick}>
//                         <img src={`${process.env.PUBLIC_URL}/assets/images/Logo.png`} alt="logo" />
//                     </Link>
//                 </li>
//                 <li>
//                     <SearchBar />
//                 </li>
//                 <li className="dropdown" ref={dropdownRef}>
//                     <div className="icon-wrapper" onClick={toggleDropdown}>
//                         <FiUser />
//                     </div>
//                     {isDropdownOpen && (
//                         <div className="dropdown-content">
//                             {!isAuthenticated && (
//                                 <Link to="/log-in" onClick={() => setDropdownOpen(false)}>Login</Link>
//                             )}
//                             {isAuthenticated && (
//                                 <>
//                                     <Link to="/update-profile" onClick={() => setDropdownOpen(false)}>Update Profile</Link>
//                                     <span onClick={goToOrders}>Orders</span> {/* Added Orders Option */}
//                                     <span onClick={handleLogout}>Logout</span>
//                                 </>
//                             )}
//                         </div>
//                     )}
//                 </li>
//             </ul>
//         </nav>
//     );
// };

// export default Nav;


























































// import React, { useState, useRef, useEffect } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { MdOutlineShoppingCart } from "react-icons/md";
// import { CiHeart } from "react-icons/ci";
// import { BsTelephone } from "react-icons/bs";
// import { FiUser } from "react-icons/fi";
// import { IoHomeOutline } from "react-icons/io5";
// import { useSelector, useDispatch } from 'react-redux';
// import { AppDispatch, RootState } from '../../store';
// import { fetchProducts } from '../../slices/productSlice';
// import { fetchCartItems, fetchFavoriteItems, logoutUser } from '../../slices/userSlice';
// import SearchBar from '../searchBar/SearchBar';
// import './Nav.css';

// interface NavProps {
//     onResetFilters: () => void;
// }

// const Nav: React.FC<NavProps> = ({ onResetFilters }) => {
//     const firstName = useSelector((state: RootState) => state.user.userDetails.firstName);
//     const isAuthenticated = useSelector((state: RootState) => state.user.isAuthenticated);
//     const userRole = useSelector((state: RootState) => state.user.userDetails.role);
//     const cartItemsCount = useSelector((state: RootState) => state.user.cart.length);
//     const favoriteItemsCount = useSelector((state: RootState) => state.user.favorites.length);
//     const navigate = useNavigate();
//     const dispatch: AppDispatch = useDispatch();

//     const dropdownRef = useRef<HTMLLIElement>(null);
//     const [isDropdownOpen, setDropdownOpen] = useState(false);

//     const toggleDropdown = () => setDropdownOpen(!isDropdownOpen);

//     const handleLogout = () => {
//         const confirmed = window.confirm('Are you sure you want to logout?');
//         if (confirmed) {
//             dispatch(logoutUser());
//             navigate('/log-in'); // Navigate to the login page after logout
//         }
//     };

//     const closeDropdown = (e: MouseEvent) => {
//         if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
//             setDropdownOpen(false);
//         }
//     };

//     const handleLogoOrHomeClick = () => {
//         onResetFilters(); // Clear filters
//         dispatch(fetchProducts({ minPrice: '', maxPrice: '' })); // Fetch all products
//         navigate('/'); // Redirect to the home page
//     };

//     const goToOrders = () => {
//         setDropdownOpen(false);
//         navigate('/orders'); // Navigate to the orders page
//     };

//     useEffect(() => {
//         if (isAuthenticated) {
//             // Fetch cart and favorites when the user is authenticated
//             dispatch(fetchCartItems());
//             dispatch(fetchFavoriteItems());
//         }
//         document.addEventListener('mousedown', closeDropdown);
//         return () => document.removeEventListener('mousedown', closeDropdown);
//     }, [isAuthenticated, dispatch]);

//     return (
//         <nav>
//             <ul>
//                 {userRole === 'admin' && (
//                     <li><Link to="/add-product"> + </Link></li>
//                 )}
//                 <li className="icon-container">
//                     <Link to="/cart">
//                         <MdOutlineShoppingCart />
//                         {cartItemsCount > 0 && (
//                             <div className="cart-count-badge">{cartItemsCount}</div>
//                         )}
//                     </Link>
//                 </li>
//                 <li className="icon-container">
//                     <Link to="/favorite">
//                         <CiHeart />
//                         {favoriteItemsCount > 0 && (
//                             <div className="favorite-count-badge">{favoriteItemsCount}</div>
//                         )}
//                     </Link>
//                 </li>
//                 <li>
//                     <Link to="/contactUs">
//                         <BsTelephone />
//                     </Link>
//                 </li>
//                 <li>
//                     <Link to="/" onClick={handleLogoOrHomeClick}>
//                         <IoHomeOutline />
//                     </Link>
//                 </li>
//                 <li>
//                     <Link to="/" onClick={handleLogoOrHomeClick}>
//                         <img src={`${process.env.PUBLIC_URL}/assets/images/Logo.png`} alt="logo" />
//                     </Link>
//                 </li>
//                 <li>
//                     <SearchBar />
//                 </li>
//                 <li className="dropdown" ref={dropdownRef}>
//                     <div className="icon-wrapper" onClick={toggleDropdown}>
//                         <FiUser />
//                     </div>
//                     {isDropdownOpen && (
//                         <div className="dropdown-content">
//                             {!isAuthenticated && (
//                                 <Link to="/log-in" onClick={() => setDropdownOpen(false)}>Login</Link>
//                             )}
//                             {isAuthenticated && (
//                                 <>
//                                     {/* Display the user's first name */}
//                                     <span>Welcome, {firstName}!</span>
//                                     <Link to="/update-profile" onClick={() => setDropdownOpen(false)}>Update Profile</Link>
//                                     <span onClick={goToOrders}>Orders</span> {/* Added Orders Option */}
//                                     <span onClick={handleLogout}>Logout</span>
//                                 </>
//                             )}
//                         </div>
//                     )}
//                 </li>
//             </ul>
//         </nav>
//     );
// };

// export default Nav;





















































// import React, { useState, useRef, useEffect } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { MdOutlineShoppingCart } from "react-icons/md";
// import { CiHeart } from "react-icons/ci";
// import { BsTelephone } from "react-icons/bs";
// import { FiUser } from "react-icons/fi";
// import { IoHomeOutline } from "react-icons/io5";
// import { useSelector, useDispatch } from 'react-redux';
// import { AppDispatch, RootState } from '../../store';
// import { fetchProducts } from '../../slices/productSlice';
// import { fetchCartItems, fetchFavoriteItems, logoutUser } from '../../slices/userSlice';
// import SearchBar from '../searchBar/SearchBar';
// import './Nav.css';

// interface NavProps {
//     onResetFilters: () => void;
// }

// const Nav: React.FC<NavProps> = ({ onResetFilters }) => {
//     const firstName = useSelector((state: RootState) => state.user.userDetails.firstName);
//     const isAuthenticated = useSelector((state: RootState) => state.user.isAuthenticated);
//     const userRole = useSelector((state: RootState) => state.user.userDetails.role);
//     const cartItemsCount = useSelector((state: RootState) => state.user.cart?.items?.length);
//     const favoriteItemsCount = useSelector((state: RootState) => state.user.favorites.length);
//     const navigate = useNavigate();
//     const dispatch: AppDispatch = useDispatch();

//     const dropdownRef = useRef<HTMLLIElement>(null);
//     const [isDropdownOpen, setDropdownOpen] = useState(false);

//     const toggleDropdown = () => setDropdownOpen(!isDropdownOpen);

//     const handleLogout = () => {
//         const confirmed = window.confirm('Are you sure you want to logout?');
//         if (confirmed) {
//             dispatch(logoutUser());
//             navigate('/log-in'); // Navigate to the login page after logout
//         }
//     };

//     const closeDropdown = (e: MouseEvent) => {
//         if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
//             setDropdownOpen(false);
//         }
//     };

//     const handleLogoOrHomeClick = () => {
//         onResetFilters(); // Clear filters
//         dispatch(fetchProducts({ minPrice: '', maxPrice: '' })); // Fetch all products
//         navigate('/'); // Redirect to the home page
//     };

//     const goToOrders = () => {
//         setDropdownOpen(false);
//         navigate('/orders'); // Navigate to the orders page
//     };

//     useEffect(() => {
//         if (isAuthenticated) {
//             // Fetch cart and favorites when the user is authenticated
//             dispatch(fetchCartItems());
//             dispatch(fetchFavoriteItems());
//         }
//         document.addEventListener('mousedown', closeDropdown);
//         return () => document.removeEventListener('mousedown', closeDropdown);
//     }, [isAuthenticated, dispatch]);

//     return (
//         <nav>
//             <ul>
//                 {userRole === 'admin' && (
//                     <li><Link to="/add-product"> + </Link></li>
//                 )}
//                 <li className="icon-container">
//                     <Link to="/cart">
//                         <MdOutlineShoppingCart />
//                         {cartItemsCount > 0 && (
//                             <div className="cart-count-badge">{cartItemsCount}</div>
//                         )}
//                     </Link>
//                 </li>
//                 <li className="icon-container">
//                     <Link to="/favorite">
//                         <CiHeart />
//                         {favoriteItemsCount > 0 && (
//                             <div className="favorite-count-badge">{favoriteItemsCount}</div>
//                         )}
//                     </Link>
//                 </li>
//                 <li>
//                     <Link to="/contactUs">
//                         <BsTelephone />
//                     </Link>
//                 </li>
//                 <li>
//                     <Link to="/" onClick={handleLogoOrHomeClick}>
//                         <IoHomeOutline />
//                     </Link>
//                 </li>
//                 <li>
//                     <Link to="/" onClick={handleLogoOrHomeClick}>
//                         <img src={`${process.env.PUBLIC_URL}/assets/images/Logo.png`} alt="logo" />
//                     </Link>
//                 </li>
//                 <li>
//                     <SearchBar />
//                 </li>
//                 {isAuthenticated && (
//                     <li className="user-greeting">
//                         {/* Display the user's first name directly in the navbar */}
//                         Welcome, {firstName}!
//                     </li>
//                 )}
//                 <li className="dropdown" ref={dropdownRef}>
//                     <div className="icon-wrapper" onClick={toggleDropdown}>
//                         <FiUser />
//                     </div>
//                     {isDropdownOpen && (
//                         <div className="dropdown-content">
//                             {!isAuthenticated && (
//                                 <Link to="/log-in" onClick={() => setDropdownOpen(false)}>Login</Link>
//                             )}
//                             {isAuthenticated && (
//                                 <>
//                                     <Link to="/update-profile" onClick={() => setDropdownOpen(false)}>Update Profile</Link>
//                                     <span onClick={goToOrders}>Orders</span> {/* Added Orders Option */}
//                                     <span onClick={handleLogout}>Logout</span>
//                                 </>
//                             )}
//                         </div>
//                     )}
//                 </li>
//             </ul>
//         </nav>
//     );
// };

// export default Nav;















































// import React, { useState, useRef, useEffect } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { MdOutlineShoppingCart } from "react-icons/md";
// import { CiHeart } from "react-icons/ci";
// import { BsTelephone } from "react-icons/bs";
// import { FiUser } from "react-icons/fi";
// import { IoHomeOutline } from "react-icons/io5";
// import { useSelector, useDispatch } from 'react-redux';
// import { AppDispatch, RootState } from '../../store';
// import { fetchProducts } from '../../slices/productSlice';
// import { fetchCartItems, fetchFavoriteItems, logoutUser } from '../../slices/userSlice';
// import SearchBar from '../searchBar/SearchBar';
// import './Nav.css';

// // Navigation bar component with links to different sections of the site.
// interface NavProps {
//     onResetFilters: () => void; // Prop to reset filters when navigating
// }

// const Nav: React.FC<NavProps> = ({ onResetFilters }) => {
//     const firstName = useSelector((state: RootState) => state.user.userDetails.firstName); // Fetch user's first name
//     const isAuthenticated = useSelector((state: RootState) => state.user.isAuthenticated); // Check if the user is authenticated
//     const userRole = useSelector((state: RootState) => state.user.userDetails.role); // Check user's role
//     const cartItemsCount = useSelector((state: RootState) => state.user.cart?.items?.length); // Fetch number of items in the cart
//     const favoriteItemsCount = useSelector((state: RootState) => state.user.favorites.length); // Fetch number of favorite items
//     const navigate = useNavigate();
//     const dispatch: AppDispatch = useDispatch();

//     const dropdownRef = useRef<HTMLLIElement>(null); // Ref to handle dropdown closing
//     const [isDropdownOpen, setDropdownOpen] = useState(false); // Handle dropdown state

//     const toggleDropdown = () => setDropdownOpen(!isDropdownOpen); // Toggle dropdown visibility

//     // Handle user logout
//     const handleLogout = () => {
//         const confirmed = window.confirm('Are you sure you want to logout?');
//         if (confirmed) {
//             dispatch(logoutUser());
//             navigate('/log-in'); // Navigate to the login page after logout
//         }
//     };

//     // Close dropdown when clicking outside of it
//     const closeDropdown = (e: MouseEvent) => {
//         if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
//             setDropdownOpen(false);
//         }
//     };

//     // Reset filters and navigate to the home page
//     const handleLogoOrHomeClick = () => {
//         onResetFilters(); // Clear filters
//         dispatch(fetchProducts({ minPrice: '', maxPrice: '' })); // Fetch all products
//         navigate('/'); // Redirect to the home page
//     };

//     // Navigate to the Orders page
//     const goToOrders = () => {
//         setDropdownOpen(false);
//         navigate('/orders'); // Navigate to the orders page
//     };

//     // Fetch cart and favorite items if user is authenticated
//     useEffect(() => {
//         if (isAuthenticated) {
//             dispatch(fetchCartItems());
//             dispatch(fetchFavoriteItems());
//         }
//         document.addEventListener('mousedown', closeDropdown);
//         return () => document.removeEventListener('mousedown', closeDropdown);
//     }, [isAuthenticated, dispatch]);

//     return (
//         <nav>
//             <ul>
//                 {/* If user is admin, show 'Add Product' link */}
//                 {userRole === 'admin' && (
//                     <li><Link to="/add-product"> + </Link></li>
//                 )}
//                 {/* Cart Icon with item count */}
//                 <li className="icon-container">
//                     <Link to="/cart">
//                         <MdOutlineShoppingCart />
//                         {cartItemsCount > 0 && (
//                             <div className="cart-count-badge">{cartItemsCount}</div>
//                         )}
//                     </Link>
//                 </li>
//                 {/* Favorite Icon with item count */}
//                 <li className="icon-container">
//                     <Link to="/favorite">
//                         <CiHeart />
//                         {favoriteItemsCount > 0 && (
//                             <div className="favorite-count-badge">{favoriteItemsCount}</div>
//                         )}
//                     </Link>
//                 </li>
//                 {/* Contact Us Link */}
//                 <li>
//                     <Link to="/contactUs">
//                         <BsTelephone />
//                     </Link>
//                 </li>
//                 {/* Home Icon and Logo */}
//                 <li>
//                     <Link to="/" onClick={handleLogoOrHomeClick}>
//                         <IoHomeOutline />
//                     </Link>
//                 </li>
//                 <li>
//                     <Link to="/" onClick={handleLogoOrHomeClick}>
//                         <img src={`${process.env.PUBLIC_URL}/assets/images/Logo.png`} alt="logo" />
//                     </Link>
//                 </li>
//                 {/* Search Bar */}
//                 <li>
//                     <SearchBar />
//                 </li>
//                 {/* Greeting for authenticated users */}
//                 {isAuthenticated && (
//                     <li className="user-greeting">
//                         Welcome, {firstName}!
//                     </li>
//                 )}
//                 {/* User dropdown menu */}
//                 <li className="dropdown" ref={dropdownRef}>
//                     <div className="icon-wrapper" onClick={toggleDropdown}>
//                         <FiUser />
//                     </div>
//                     {isDropdownOpen && (
//                         <div className="dropdown-content">
//                             {!isAuthenticated && (
//                                 <Link to="/log-in" onClick={() => setDropdownOpen(false)}>Login</Link>
//                             )}
//                             {isAuthenticated && (
//                                 <>
//                                     <Link to="/update-profile" onClick={() => setDropdownOpen(false)}>Update Profile</Link>
//                                     <span onClick={goToOrders}>Orders</span>
//                                     <span onClick={handleLogout}>Logout</span>
//                                 </>
//                             )}
//                         </div>
//                     )}
//                 </li>
//             </ul>
//         </nav>
//     );
// };

// export default Nav;





































































// import React, { useState, useRef, useEffect } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { MdOutlineShoppingCart } from "react-icons/md";
// import { CiHeart } from "react-icons/ci";
// import { BsTelephone } from "react-icons/bs";
// import { FiUser } from "react-icons/fi";
// import { IoHomeOutline } from "react-icons/io5";
// import { useSelector, useDispatch } from 'react-redux';
// import { AppDispatch, RootState } from '../../store';
// import { fetchProducts } from '../../slices/productSlice';
// import { fetchCartItems, fetchFavoriteItems, logoutUser } from '../../slices/userSlice';
// import SearchBar from '../searchBar/SearchBar';
// import './Nav.css';

// interface NavProps {
//     onResetFilters: () => void; // Prop to reset filters when navigating
// }

// const Nav: React.FC<NavProps> = ({ onResetFilters }) => {
//     const firstName = useSelector((state: RootState) => state.user.userDetails.firstName);
//     const isAuthenticated = useSelector((state: RootState) => state.user.isAuthenticated);
//     const userRole = useSelector((state: RootState) => state.user.userDetails.role);
//     const cartItemsCount = useSelector((state: RootState) => state.user.cart?.items?.length);
//     const favoriteItemsCount = useSelector((state: RootState) => state.user.favorites.length);
//     const navigate = useNavigate();
//     const dispatch: AppDispatch = useDispatch();

//     const dropdownRef = useRef<HTMLLIElement>(null);
//     const [isDropdownOpen, setDropdownOpen] = useState(false);

//     const toggleDropdown = () => setDropdownOpen(!isDropdownOpen);

//     const handleLogout = () => {
//         const confirmed = window.confirm('Are you sure you want to logout?');
//         if (confirmed) {
//             dispatch(logoutUser());
//             navigate('/log-in');
//         }
//     };

//     const closeDropdown = (e: MouseEvent) => {
//         if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
//             setDropdownOpen(false);
//         }
//     };

//     const handleLogoOrHomeClick = () => {
//         onResetFilters();
//         dispatch(fetchProducts({ minPrice: '', maxPrice: '' }));
//         navigate('/');
//     };

//     const goToOrders = () => {
//         setDropdownOpen(false);
//         navigate('/orders');
//     };

//     useEffect(() => {
//         if (isAuthenticated) {
//             dispatch(fetchCartItems());
//             dispatch(fetchFavoriteItems());
//         }
//         document.addEventListener('mousedown', closeDropdown);
//         return () => document.removeEventListener('mousedown', closeDropdown);
//     }, [isAuthenticated, dispatch]);

//     return (
//         <nav>
//             <ul>
//                 {userRole === 'admin' && (
//                     <li><Link to="/add-product"> + </Link></li>
//                 )}
//                 <li className="icon-container">
//                     <Link to="/cart">
//                         <MdOutlineShoppingCart />
//                         {cartItemsCount > 0 && (
//                             <div className="cart-count-badge">{cartItemsCount}</div>
//                         )}
//                     </Link>
//                 </li>
//                 <li className="icon-container">
//                     <Link to="/favorite">
//                         <CiHeart />
//                         {favoriteItemsCount > 0 && (
//                             <div className="favorite-count-badge">{favoriteItemsCount}</div>
//                         )}
//                     </Link>
//                 </li>
//                 <li>
//                     <Link to="/contactUs">
//                         <BsTelephone />
//                     </Link>
//                 </li>
//                 <li>
//                     <Link to="/" onClick={handleLogoOrHomeClick}>
//                         <IoHomeOutline />
//                     </Link>
//                 </li>
//                 <li>
//                     <Link to="/" onClick={handleLogoOrHomeClick}>
//                         <img src={`${process.env.PUBLIC_URL}/assets/images/Logo.png`} alt="logo" />
//                     </Link>
//                 </li>
//                 <li>
//                     <SearchBar />
//                 </li>
//                 {isAuthenticated && (
//                     <li className="user-greeting">
//                         Welcome, {firstName}!
//                     </li>
//                 )}
//                 <li className="dropdown" ref={dropdownRef}>
//                     <div className="icon-wrapper" onClick={toggleDropdown}>
//                         <FiUser />
//                     </div>
//                     {isDropdownOpen && (
//                         <div className="dropdown-content">
//                             {!isAuthenticated && (
//                                 <Link to="/log-in" onClick={() => setDropdownOpen(false)}>Login</Link>
//                             )}
//                             {isAuthenticated && (
//                                 <>
//                                     <Link to="/update-profile" onClick={() => setDropdownOpen(false)}>Update Profile</Link>
//                                     <span onClick={goToOrders}>Orders</span>
//                                     <span onClick={handleLogout}>Logout</span>
//                                 </>
//                             )}
//                         </div>
//                     )}
//                 </li>
//             </ul>
//         </nav>
//     );
// };

// export default Nav;















































import React, { useState, useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { MdOutlineShoppingCart } from "react-icons/md";
import { CiHeart } from "react-icons/ci";
import { BsTelephone } from "react-icons/bs";
import { FiUser } from "react-icons/fi";
import { IoHomeOutline } from "react-icons/io5";
import { useSelector, useDispatch } from 'react-redux';
import { AppDispatch, RootState } from '../../store';
import { fetchProducts } from '../../slices/productSlice';
import { fetchCartItems, fetchFavoriteItems, logoutUser } from '../../slices/userSlice';
import SearchBar from '../searchBar/SearchBar';
import './Nav.css';
import { FaPlusCircle } from 'react-icons/fa';

interface NavProps {
    onResetFilters: () => void;
}

const Nav: React.FC<NavProps> = ({ onResetFilters }) => {
    const firstName = useSelector((state: RootState) => state.user.userDetails.firstName);
    const isAuthenticated = useSelector((state: RootState) => state.user.isAuthenticated);
    const userRole = useSelector((state: RootState) => state.user.userDetails.role);
    const cartItemsCount = useSelector((state: RootState) => state.user.cart?.items?.length);
    const favoriteItemsCount = useSelector((state: RootState) => state.user.favorites.length);
    const navigate = useNavigate();
    const dispatch: AppDispatch = useDispatch();

    const dropdownRef = useRef<HTMLLIElement>(null);
    const [isDropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => setDropdownOpen(!isDropdownOpen);

    const handleLogout = () => {
        const confirmed = window.confirm('Are you sure you want to logout?');
        if (confirmed) {
            dispatch(logoutUser());
            navigate('/log-in');
        }
    };

    const closeDropdown = (e: MouseEvent) => {
        if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
            setDropdownOpen(false);
        }
    };

    const handleLogoOrHomeClick = () => {
        onResetFilters();
        dispatch(fetchProducts({ minPrice: '', maxPrice: '' }));
        navigate('/');
    };

    const goToOrders = () => {
        setDropdownOpen(false);
        navigate('/orders');
    };

    useEffect(() => {
        if (isAuthenticated) {
            dispatch(fetchCartItems());
            dispatch(fetchFavoriteItems());
        }
        document.addEventListener('mousedown', closeDropdown);
        return () => document.removeEventListener('mousedown', closeDropdown);
    }, [isAuthenticated, dispatch]);

    return (
        <nav>
            <ul>
                {userRole === 'admin' && (
                    <li><Link to="/add-product" className="add-product-link">
                        <FaPlusCircle className="add-product-icon" />
                    </Link></li>
                )}
                <li className="icon-container">
                    <Link to="/cart">
                        <MdOutlineShoppingCart />
                        {cartItemsCount > 0 && (
                            <div className="cart-count-badge">{cartItemsCount}</div>
                        )}
                    </Link>
                </li>
                <li className="icon-container">
                    <Link to="/favorite">
                        <CiHeart />
                        {favoriteItemsCount > 0 && (
                            <div className="favorite-count-badge">{favoriteItemsCount}</div>
                        )}
                    </Link>
                </li>
                <li>
                    <Link to="/contactUs">
                        <BsTelephone />
                    </Link>
                </li>
                <li>
                    <Link to="/" onClick={handleLogoOrHomeClick}>
                        <IoHomeOutline />
                    </Link>
                </li>
                <li>
                    <Link to="/" onClick={handleLogoOrHomeClick}>
                        <img src={`${process.env.PUBLIC_URL}/assets/images/Logo.png`} alt="logo" />
                    </Link>
                </li>
                <li>
                    <SearchBar />
                </li>
                {/* Always show the FiUser icon regardless of authentication */}
                <li className="dropdown" ref={dropdownRef}>
                    <div className="icon-wrapper" onClick={toggleDropdown}>
                        <FiUser />
                    </div>
                    {/* Render dropdown content based on authentication */}
                    {isDropdownOpen && (
                        <div className="dropdown-content">
                            {!isAuthenticated && (
                                <Link to="/log-in" onClick={() => setDropdownOpen(false)}>Login</Link>
                            )}
                            {isAuthenticated && (
                                <>
                                    <Link to="/update-profile" onClick={() => setDropdownOpen(false)}>Update Profile</Link>
                                    <span onClick={goToOrders}>Orders</span>
                                    <span onClick={handleLogout}>Logout</span>
                                </>
                            )}
                        </div>
                    )}
                </li>
                
                    <li className="user-greeting">
                    {isAuthenticated ? ( `Welcome, ${firstName}! `) : 'Hello Guest'}
                    </li>
               
            </ul>
        </nav>
    );
};

export default Nav;











































// import React, { useState, useRef, useEffect } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { MdOutlineShoppingCart } from "react-icons/md";
// import { CiHeart } from "react-icons/ci";
// import { BsTelephone } from "react-icons/bs";
// import { FiUser } from "react-icons/fi";
// import { IoHomeOutline } from "react-icons/io5";
// import { FaPlusCircle } from "react-icons/fa"; // Importing the new icon for add product
// import { useSelector, useDispatch } from 'react-redux';
// import { AppDispatch, RootState } from '../../store';
// import { fetchProducts } from '../../slices/productSlice';
// import { fetchCartItems, fetchFavoriteItems, logoutUser } from '../../slices/userSlice';
// import SearchBar from '../searchBar/SearchBar';
// import './Nav.css';

// interface NavProps {
//     onResetFilters: () => void; // Prop to reset filters when navigating
// }

// const Nav: React.FC<NavProps> = ({ onResetFilters }) => {
//     const firstName = useSelector((state: RootState) => state.user.userDetails.firstName);
//     const isAuthenticated = useSelector((state: RootState) => state.user.isAuthenticated);
//     const userRole = useSelector((state: RootState) => state.user.userDetails.role);
//     const cartItemsCount = useSelector((state: RootState) => state.user.cart?.items?.length);
//     const favoriteItemsCount = useSelector((state: RootState) => state.user.favorites.length);
//     const navigate = useNavigate();
//     const dispatch: AppDispatch = useDispatch();

//     const dropdownRef = useRef<HTMLLIElement>(null);
//     const [isDropdownOpen, setDropdownOpen] = useState(false);

//     const toggleDropdown = () => setDropdownOpen(!isDropdownOpen);

//     const handleLogout = () => {
//         const confirmed = window.confirm('Are you sure you want to logout?');
//         if (confirmed) {
//             dispatch(logoutUser());
//             navigate('/log-in');
//         }
//     };

//     const closeDropdown = (e: MouseEvent) => {
//         if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
//             setDropdownOpen(false);
//         }
//     };

//     const handleLogoOrHomeClick = () => {
//         onResetFilters();
//         dispatch(fetchProducts({ minPrice: '', maxPrice: '' }));
//         navigate('/');
//     };

//     const goToOrders = () => {
//         setDropdownOpen(false);
//         navigate('/orders');
//     };

//     useEffect(() => {
//         if (isAuthenticated) {
//             dispatch(fetchCartItems());
//             dispatch(fetchFavoriteItems());
//         }
//         document.addEventListener('mousedown', closeDropdown);
//         return () => document.removeEventListener('mousedown', closeDropdown);
//     }, [isAuthenticated, dispatch]);

//     return (
//         <nav>
//             <ul>
//                 {/* If user is admin, show 'Add Product' link with FaPlusCircle icon */}
//                 {userRole === 'admin' && (
//                     <li>
//                         <Link to="/add-product" className="add-product-link">
//                             <FaPlusCircle className="add-product-icon" />
//                         </Link>
//                     </li>
//                 )}
//                 <li className="icon-container">
//                     <Link to="/cart">
//                         <MdOutlineShoppingCart />
//                         {cartItemsCount > 0 && (
//                             <div className="cart-count-badge">{cartItemsCount}</div>
//                         )}
//                     </Link>
//                 </li>
//                 <li className="icon-container">
//                     <Link to="/favorite">
//                         <CiHeart />
//                         {favoriteItemsCount > 0 && (
//                             <div className="favorite-count-badge">{favoriteItemsCount}</div>
//                         )}
//                     </Link>
//                 </li>
//                 <li>
//                     <Link to="/contactUs">
//                         <BsTelephone />
//                     </Link>
//                 </li>
//                 <li>
//                     <Link to="/" onClick={handleLogoOrHomeClick}>
//                         <IoHomeOutline />
//                     </Link>
//                 </li>
//                 <li>
//                     <Link to="/" onClick={handleLogoOrHomeClick}>
//                         <img src={`${process.env.PUBLIC_URL}/assets/images/Logo.png`} alt="logo" />
//                     </Link>
//                 </li>
//                 <li>
//                     <SearchBar />
//                 </li>
//                 {isAuthenticated && (
//                     <li className="user-greeting">
//                         Welcome, {firstName}!
//                     </li>
//                 )}
//                 <li className="dropdown" ref={dropdownRef}>
//                     <div className="icon-wrapper" onClick={toggleDropdown}>
//                         <FiUser />
//                     </div>
//                     {isDropdownOpen && (
//                         <div className="dropdown-content">
//                             {!isAuthenticated && (
//                                 <Link to="/log-in" onClick={() => setDropdownOpen(false)}>Login</Link>
//                             )}
//                             {isAuthenticated && (
//                                 <>
//                                     <Link to="/update-profile" onClick={() => setDropdownOpen(false)}>Update Profile</Link>
//                                     <span onClick={goToOrders}>Orders</span>
//                                     <span onClick={handleLogout}>Logout</span>
//                                 </>
//                             )}
//                         </div>
//                     )}
//                 </li>
//             </ul>
//         </nav>
//     );
// };

// export default Nav;





































{/* User dropdown menu */ }
//                 <li className="dropdown" ref={dropdownRef}>
//                     <div className="icon-wrapper" onClick={toggleDropdown}>
//                         <FiUser />
//                     </div>
//                     {isDropdownOpen && (
//                         <div className="dropdown-content">
//                             {!isAuthenticated && (
//                                 <Link to="/log-in" onClick={() => setDropdownOpen(false)}>Login</Link>
//                             )}
//                             {isAuthenticated && (
//                                 <>
//                                     <Link to="/update-profile" onClick={() => setDropdownOpen(false)}>Update Profile</Link>
//                                     <span onClick={goToOrders}>Orders</span>
//                                     <span onClick={handleLogout}>Logout</span>
//                                 </>
//                             )}
//                         </div>
//                     )}
//                 </li>






//yesterday we did that when i get a toast i wont get two toast at a time but if the toasts are diffrent i want to get them one after each other.
// for exaple if i click on the 