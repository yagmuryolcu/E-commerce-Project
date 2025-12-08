import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../store/actions/shoppingCartActions';
import { addToWishlist, removeFromWishlist } from '../store/actions/wishlistAction';
import { ChevronLeft, ChevronRight, Star, Heart, ShoppingCart, Eye } from 'lucide-react';
import CartToast from '../components/CarToast';
import WishlistToast from '../components/WishlistToast';
import productdetail1 from '../assets/productdetail1.jpg';
import productdetail2 from '../assets/productdetail2.jpg';
import productdetail3 from '../assets/productdetail3.jpg';
import productdetail4 from '../assets/productdetail4.jpg';
import productdetail5 from '../assets/productdetail5.jpg';
import productdetail6 from '../assets/productdetail6.jpg';
import productdetail7 from '../assets/productdetail7.jpg';
import productdetail8 from '../assets/productdetail8.jpg';
import productdetail9 from '../assets/productdetail9.jpg';
import HooliLogo from '../assets/fa-brands-1.png';
import LyftLogo from '../assets/fa-brands-2.png';
import YaprakLogo from '../assets/fa-brands-3.png';
import StripeLogo from '../assets/fa-brands-4.png';
import AWSLogo from '../assets/fa-brands-5.png';
import RedditLogo from '../assets/col-md-2.png';

const LogoLink = ({ src, alt, href }) => (
  <a 
    href={href} 
    target="_blank" 
    rel="noopener noreferrer"
    className="transition-opacity hover:opacity-70"
  >
    <img 
      src={src} 
      alt={alt} 
      className="h-12 w-auto object-contain grayscale hover:grayscale-0 transition-all"
    />
  </a>
);

export default function ProductDetail() {
  const { productId } = useParams();
  const dispatch = useDispatch();

  
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedColor, setSelectedColor] = useState(0);
  const [activeTab, setActiveTab] = useState('description');
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [bestsellerProducts, setBestsellerProducts] = useState([]);
  const [showToast, setShowToast] = useState(false);
  const [toastProduct, setToastProduct] = useState(null);
  const [showWishlistToast, setShowWishlistToast] = useState(false);
  const [wishlistToastProduct, setWishlistToastProduct] = useState(null);
  const [isInWishlist, setIsInWishlist] = useState(false);

  const wishlistItems = useSelector(state => state.wishlist.items);

  // backend'den ürün verilerini çek
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        const response = await fetch(`http://localhost:9000/workintech/ecommerce/management/api/products/${productId}`);
        
        if (!response.ok) {
          throw new Error('Product not found');
        }
        
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error(' Error loading product:', error);
        setProduct({
          id: '1',
          name: 'Floating Phone',
          price: 1139.33,
          description: 'Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.',
          stock: 10,
          rating: 4,
          sell_count: 10,
          images: ['/assets/productdetail1.jpg', '/assets/productdetail2.jpg']
        });
      } finally {
        setLoading(false);
      }
    };

    if (productId) {
      fetchProduct();
    } else {
      setProduct({
        id: '1',
        name: 'Floating Phone',
        price: 1139.33,
        description: 'Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.',
        stock: 10,
        rating: 4,
        sell_count: 10,
        images: []
      });
      setLoading(false);
    }
  }, [productId]);

  useEffect(() => {
    if (product && wishlistItems) {
      const inWishlist = wishlistItems.some(item => {
      
        const itemId = item.product?.id || item.id;
        return itemId === product.id;
      });
      setIsInWishlist(inWishlist);
      console.log('🔍 Wishlist Check:', { productId: product.id, inWishlist, wishlistItems });
    }
  }, [product, wishlistItems]);

  // bestseller products'ı backend'den çek ( 13-20)
  useEffect(() => {
    const fetchBestsellers = async () => {
      try {
        console.log('🔄 Fetching bestseller products...');
        const response = await fetch('http://localhost:9000/workintech/ecommerce/management/api/products');
        
        if (response.ok) {
          const data = await response.json();
          console.log('Backend response:', data);
          
          let productsArray = [];
          
          if (Array.isArray(data)) {
            productsArray = data;
          } else if (data.products && Array.isArray(data.products)) {
            productsArray = data.products;
          } else if (data.data && Array.isArray(data.data)) {
            productsArray = data.data;
          } else if (data.content && Array.isArray(data.content)) {
            productsArray = data.content;
          }
          
          const filteredProducts = productsArray.filter(p => p.id >= 13 && p.id <= 20).slice(0, 8);          
          setBestsellerProducts(filteredProducts.length > 0 ? filteredProducts : productsArray.slice(0, 8));
        }
      } catch (error) {
        console.error(' Error loading bestsellers:', error);
      }
    };

    fetchBestsellers();
  }, []);

  const images = (() => {
    if (!productId && product?.id === '1' && (!product?.images || product.images.length === 0)) {
      return [productdetail1, productdetail2];
    }
    
    if (product?.images && product.images.length > 0) {
      const mappedImages = product.images.map(img => {
        let imageUrl = typeof img === 'object' ? img.url : img;
        
        if (imageUrl && imageUrl.startsWith('/assets/')) {
          const filename = imageUrl.split('/').pop();
          const imageMap = {
            'productdetail1.jpg': productdetail1,
            'productdetail2.jpg': productdetail2,
            'productdetail3.jpg': productdetail3,
            'productdetail4.jpg': productdetail4,
            'productdetail5.jpg': productdetail5,
            'productdetail6.jpg': productdetail6,
            'productdetail7.jpg': productdetail7,
            'productdetail8.jpg': productdetail8,
            'productdetail9.jpg': productdetail9
          };
          return imageMap[filename] || productdetail1;
        }
        
        return imageUrl;
      });
      
      if (mappedImages.length === 1 && mappedImages[0] === productdetail1) {
        return [productdetail1, productdetail2];
      }
      
      return mappedImages;
    }
    
    return [productdetail1, productdetail2];
  })();

  const isUsingDefaultImages = images.length === 2 && images[0] === productdetail1 && images[1] === productdetail2;

  const handleAddToCart = () => {
    if (!product) return;
    const selectedColorObject = colors[selectedColor];
    const cartItem = {
      id: product.id,
      title: product.name || product.title || 'Product',
      price: product.price,
      discountPrice: product.price,
      color: selectedColorObject,
          quantity: 1,
      image: images[0], 
      description: product.description
    };
    
    console.log('🛒 Cart Item:', cartItem);
    
    dispatch(addToCart(cartItem));
    setToastProduct(cartItem);
    setShowToast(true);
  };

  const handleToggleWishlist = () => {
    if (!product) return;
    
    const productForToast = {
      ...product,
      title: product.name || product.title || 'Product',
      department: product.category_id || 'Product Category',
      image: images[0]
    };
    
    console.log(' Toggle Wishlist:', { 
      productId: product.id, 
      isInWishlist, 
      action: isInWishlist ? 'REMOVE' : 'ADD' 
    });
    
    if (isInWishlist) {
      dispatch(removeFromWishlist(product.id));
      setWishlistToastProduct({ ...productForToast, isAdded: false });
    } else {
      const productToSave = {
        ...product,
        title: product.name || product.title || 'Product',
        department: product.category_id || 'Product Category',
      };
      dispatch(addToWishlist(productToSave));
      setWishlistToastProduct({ ...productForToast, isAdded: true });
    }
    
    setShowWishlistToast(true);
  };

  const colors = [
    { name: 'Blue', code: '#23A6F0' },
    { name: 'Green', code: '#2DC071' },
    { name: 'Orange', code: '#E77C40' },
    { name: 'Navy', code: '#252B42' }
  ];

  const handlePrevImage = () => {
    setSelectedImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNextImage = () => {
    setSelectedImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  if (loading) {
    return (
      <div className="w-full min-h-screen bg-[#F5F5F5] flex items-center justify-center">
        <div className="text-2xl text-gray-600">Loading product...</div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="w-full min-h-screen bg-[#F5F5F5] flex items-center justify-center">
        <div className="text-2xl text-red-600">Product not found</div>
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen bg-[#F5F5F5]">
      {showToast && toastProduct && (
        <CartToast 
          product={toastProduct} 
          onClose={() => setShowToast(false)} 
        />
      )}
      {showWishlistToast && wishlistToastProduct && (
        <WishlistToast 
          product={wishlistToastProduct} 
          isAdded={wishlistToastProduct.isAdded}
          onClose={() => setShowWishlistToast(false)} 
        />
      )}
      
      <div className="container mx-auto px-4 py-8 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-4 px-6">
            <div className="relative bg-gray-100 overflow-hidden aspect-square">
              <img
                src={images[selectedImage]}
                alt="Product"
                className="w-full h-full object-cover"
              />
              
              <button
                onClick={handlePrevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full"
              >
                <ChevronLeft size={72} className="text-[#FAFAFA]" />
              </button>
              
              <button
                onClick={handleNextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full"
              >
                <ChevronRight size={72} className="text-[#FAFAFA]" />
              </button>
            </div>

            <div className="flex gap-4">
              {images.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`w-24 h-24 overflow-hidden border-2 ${
                    selectedImage === index ? 'border-blue-500' : 'border-gray-200'
                  }`}
                >
                  <img
                    src={img}
                    alt={`Thumbnail ${index + 1}`}
                    className={`w-full h-full object-cover transition-opacity ${
                      selectedImage === index ? 'opacity-50' : 'opacity-100'
                    }`}
                  />
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-6 px-12" style={{ fontFamily: 'Montserrat' }}>
            <h1 className="text-2xl font-medium text-[#252B42]">
              {product.name || product.title || 'Product Name'}
            </h1>

            <div className="flex items-center gap-3">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    size={20} 
                    fill={i < (product.rating || 4) ? "#F3CD03" : "none"} 
                    className="text-[#F3CD03]" 
                  />
                ))}
              </div>
              <span className="text-[#737373] font-semibold">
                {product.sell_count || 10} Reviews
              </span>
            </div>

            <div className="text-3xl font-bold text-gray-900">
              ${(product.price || 0).toFixed(2)}
            </div>

            <div className="flex items-center gap-2">
              <span className="text-[#737373] font-semibold">Availability :</span>
              <span className="text-[#23A6F0] font-semibold">
                {(product.stock || 0) > 0 ? 'In Stock' : 'Out of Stock'}
              </span>
            </div>

            <p className="text-[#858585] max-w-[291px] md:max-w-[460px] leading-relaxed border-b border-gray-400 py-6 font-medium">
              {isUsingDefaultImages ? (
                'Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.'
              ) : (
                product.description || 'Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.'
              )}
            </p>

            <div className="flex items-center gap-3 py-4">
              {colors.map((color, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedColor(index)}
                  className={`w-8 h-8 rounded-full border-2 p-0.5 transition-all duration-200 ease-in-out ${selectedColor === index  ? 'ring-2 ring-[#23A6F0] border-white scale-110' // Seçili: Mavi halka, içindeki border beyaz olsun
 : 'border-transparent hover:scale-105'}`}
                  style={{ backgroundColor: color.code }}
                  aria-label={color.name}
                />
              ))}
            </div>

            <div className="flex items-center gap-3 pt-4" style={{ fontFamily: 'Montserrat' }}>
              <button 
                onClick={handleAddToCart}
                disabled={(product.stock || 0) === 0}
                className="bg-[#23A6F0] text-white px-4 py-3 md:px-8 md:py-3 rounded-md font-medium hover:bg-blue-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Add to Cart
              </button>
              
              <button 
                onClick={handleToggleWishlist}
                className={`w-12 h-12 border rounded-full flex items-center justify-center transition-all ${
                  isInWishlist 
                    ? 'border-red-500 bg-red-50 hover:bg-red-100' 
                    : 'border-gray-300 hover:bg-gray-50'
                }`}
              >
                <Heart 
                  size={20} 
                  className={`transition-colors ${
                    isInWishlist ? 'text-red-500 fill-red-500' : 'text-gray-700'
                  }`}
                />
              </button>
              
              <button 
                onClick={handleAddToCart}
                className="w-12 h-12 border border-gray-300 rounded-full flex items-center justify-center hover:bg-gray-50 transition-colors"
              >
                <ShoppingCart size={20} className="text-gray-700" />
              </button>
              
              <button className="w-12 h-12 border border-gray-300 rounded-full flex items-center justify-center hover:bg-gray-50 transition-colors">
                <Eye size={20} className="text-gray-700" />
              </button>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <div className="flex justify-center gap-12 border-b border-gray-200">
            <button
              onClick={() => setActiveTab('description')}
              className="pb-4 font-semibold text-[#737373]"
            >
              Description
            </button>

            <button
              onClick={() => setActiveTab('additional')}
              className="pb-4 font-semibold text-[#737373]"
            >
              Additional Information
            </button>

            <button
              onClick={() => setActiveTab('reviews')}
              className="pb-4 font-semibold text-[#737373]"
            >
              Reviews <span className="text-[#23856D] font-bold">(0)</span>
            </button>
          </div>

          {activeTab === 'description' && (
            <div className="py-12 px-10">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="flex justify-center md:justify-start">
                  <div className="relative">
                    <img
                      src={productdetail3}
                      alt="Product detail"
                      className="rounded-lg w-full h-full object-cover aspect-[2/2] md:aspect-[3/4]"
                    />
                    <div className="absolute -right-2 -bottom-2 w-full h-full bg-[#C4C4C433] rounded-lg -z-10"></div>
                  </div>
                </div>

                <div className="space-y-6 mx-5 max-w-[350px] mb-8" style={{ fontFamily: 'Montserrat' }}>
                  <h3 className="text-2xl font-bold text-[#252B42]">
                    the quick fox jumps over
                  </h3>
                  <p className="text-[#737373] leading-relaxed font-medium">
                    Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.
                  </p>
                  <p className="text-[#737373] leading-relaxed font-medium">
                    Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.
                  </p>
                  <p className="text-[#737373] leading-relaxed font-medium">
                    Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.
                  </p>
                </div>

                <div className="space-y-8 mx-5" style={{ fontFamily: 'Montserrat' }}>
                  <div>
                    <h3 className="text-2xl font-bold text-[#252B42] mb-6">
                      the quick fox jumps over
                    </h3>
                    <ul className="space-y-3 font-bold">
                      <li className="flex items-start gap-3 text-[#737373]">
                        <ChevronRight size={20} className="text-[#737373] mt-1 flex-shrink-0" />
                        <span>the quick fox jumps over the lazy dog</span>
                      </li>
                      <li className="flex items-start gap-3 text-[#737373]">
                        <ChevronRight size={20} className="text-[#737373] mt-1 flex-shrink-0" />
                        <span>the quick fox jumps over the lazy dog</span>
                      </li>
                      <li className="flex items-start gap-3 text-[#737373]">
                        <ChevronRight size={20} className="text-[#737373] mt-1 flex-shrink-0" />
                        <span>the quick fox jumps over the lazy dog</span>
                      </li>
                      <li className="flex items-start gap-3 text-[#737373]">
                        <ChevronRight size={20} className="text-[#737373] mt-1 flex-shrink-0" />
                        <span>the quick fox jumps over the lazy dog</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'Montserrat' }}>
                      the quick fox jumps over
                    </h3>
                    <ul className="space-y-3 font-bold">
                      <li className="flex items-start gap-3 text-[#737373]">
                        <ChevronRight size={20} className="text-[#737373] mt-1 flex-shrink-0" />
                        <span>the quick fox jumps over the lazy dog</span>
                      </li>
                      <li className="flex items-start gap-3 text-[#737373]">
                        <ChevronRight size={20} className="text-[#737373] mt-1 flex-shrink-0" />
                        <span>the quick fox jumps over the lazy dog</span>
                      </li>
                      <li className="flex items-start gap-3 text-[#737373]">
                        <ChevronRight size={20} className="text-[#737373] mt-1 flex-shrink-0" />
                        <span>the quick fox jumps over the lazy dog</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'additional' && (
            <div className="py-12">
              <p className="text-gray-600 text-center">No Additional Information</p>
            </div>
          )}

          {activeTab === 'reviews' && (
            <div className="py-12">
              <p className="text-gray-600 text-center">No reviews yet.</p>
            </div>
          )}
        </div>

        <div className="mt-20 mb-16 px-4">
          <h2 className="text-2xl font-bold text-[#252B42] mb-8" style={{ fontFamily: 'Montserrat' }}>
            BESTSELLER PRODUCTS
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {bestsellerProducts.map((bestsellerProduct, index) => {
              const productImage = (() => {
                if (bestsellerProduct.images?.[0]) {
                  let imageUrl = typeof bestsellerProduct.images[0] === 'object' 
                    ? bestsellerProduct.images[0].url 
                    : bestsellerProduct.images[0];
                  
                  if (imageUrl && imageUrl.startsWith('/assets/')) {
                    const filename = imageUrl.split('/').pop();
                    const imageMap = {
                      'productdetail4.jpg': productdetail4,
                      'productdetail5.jpg': productdetail5,
                      'productdetail6.jpg': productdetail6,
                      'productdetail7.jpg': productdetail7,
                      'productdetail8.jpg': productdetail8,
                      'productdetail9.jpg': productdetail9
                    };
                    return imageMap[filename] || productdetail4;
                  }
                  
                  return imageUrl;
                }
                return productdetail4;
              })();

              return (
                <div 
                  key={bestsellerProduct.id} 
                  className={`${index >= 4 ? 'hidden md:block' : ''}`}
                >
                  <div className="bg-white overflow-hidden cursor-pointer hover:shadow-lg transition-shadow" onClick={() => {
                    setProduct(bestsellerProduct);
                    setSelectedImage(0);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}>
                    <div className="relative h-[550px] md:h-[270px] overflow-hidden">
                      <img
                        src={productImage}
                        alt={bestsellerProduct.name || bestsellerProduct.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    
                    <div className="p-6 text-left" style={{ fontFamily: 'Montserrat' }}>
                      <h3 className="text-base font-bold text-[#252B42] mb-2">
                        {bestsellerProduct.name || bestsellerProduct.title || 'Graphic Design'}
                      </h3>

                      <p className="text-sm font-bold text-[#737373] mb-3">
                        {bestsellerProduct.category_id || bestsellerProduct.department || 'English Department'}
                      </p>

                      <div className="flex items-center justify-start gap-2">
                        <span className="text-base font-bold text-[#BDBDBD]">
                          ${(bestsellerProduct.price || 16.48).toFixed(2)}
                        </span>

                        <span className="text-base font-bold text-[#23856D]">
                          ${(bestsellerProduct.discount_price || bestsellerProduct.salePrice || 6.48).toFixed(2)}
                        </span>
                      </div>
                    </div>
                    
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="w-full bg-[#F5F5F5] py-18 mt-5 mb-12">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center justify-center gap-20 md:gap-24">
              <LogoLink src={HooliLogo} alt="Hooli" href="https://hooli.com" />
              <LogoLink src={LyftLogo} alt="Lyft" href="https://lyft.com" />
              <LogoLink src={YaprakLogo} alt="Yaprak" href="https://example.com" />
              <LogoLink src={StripeLogo} alt="Stripe" href="https://stripe.com" />
              <LogoLink src={AWSLogo} alt="AWS" href="https://aws.amazon.com" />
              <LogoLink src={RedditLogo} alt="Reddit" href="https://reddit.com" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}