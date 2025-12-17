import React, { useState, useEffect } from 'react';
import { CreditCard, MapPin, Plus, Edit2, Trash2, Check, Loader } from 'lucide-react';
import { Link , useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux'; 
import { clearCart } from '../store/actions/shoppingCartActions';
import { useDispatch } from 'react-redux';





export default function AddressCardManager() {
    
const navigate= useNavigate();
const dispatch = useDispatch();

  const [activeTab, setActiveTab] = useState('address');
  const [showAddressForm, setShowAddressForm] = useState(false);
  const [showCardForm, setShowCardForm] = useState(false);
  const [selectedAddress, setSelectedAddress] = useState(null);
  const [selectedCard, setSelectedCard] = useState(null);
  const [loading, setLoading] = useState(true);

  const [addresses, setAddresses] = useState([]);
  const [cards, setCards] = useState([]);
  const cart = useSelector(state => state.shoppingCart?.cart || []);
  const [cartTotal, setCartTotal] = useState(0);
  const SHIPPING_FEE = 29.99;

  const [addressForm, setAddressForm] = useState({
    title: '',
    name: '',
    surname: '',
    phone: '',
    city: '',
    district: '',
    neighborhood: '',
    address: '',
    zipCode: ''
  });

  const [cardForm, setCardForm] = useState({
    cardNo: '',
    nameOnCard: '',
    expireMonth: '',
    expireYear: '',
    cvv: ''
  });

  const [editingAddress, setEditingAddress] = useState(null);
  const [editingCard, setEditingCard] = useState(null);


  const getAuthHeaders = () => {
    const token = localStorage.getItem('token');
    return {
      'Content-Type': 'application/json',
      ...(token && { 'Authorization': token })
    };
  };

useEffect(() => {
    if (cart && cart.length > 0) {
      const subtotal = cart.reduce((sum, item) => {
        const price = item.product?.discount_price || item.product?.price || 0;
        return sum + (price * item.count);
      }, 0);
      const finalTotal = subtotal + SHIPPING_FEE;
      setCartTotal(finalTotal);
    } else {
      setCartTotal(0);
    }
  }, [cart]);



  useEffect(() => {
    let isMounted = true;

    const fetchData = async () => {
      try {
        const addressResponse = await fetch(
          'http://localhost:9000/workintech/ecommerce/management/api/user/address',
          { headers: getAuthHeaders() }
        );
        
        if (addressResponse.ok && isMounted) {
          const addressData = await addressResponse.json();
          const addressList = Array.isArray(addressData) ? addressData : 
                             (addressData.data && Array.isArray(addressData.data)) ? addressData.data : [];
          setAddresses(addressList);
        }

        // Fetch cards
        const cardResponse = await fetch(
          'http://localhost:9000/workintech/ecommerce/management/api/user/card',
          { headers: getAuthHeaders() }
        );
        
        if (cardResponse.ok && isMounted) {
          const cardData = await cardResponse.json();
          let cardsData = Array.isArray(cardData) ? cardData : 
                         (cardData.data && Array.isArray(cardData.data)) ? cardData.data : [];
          
          setCards(cardsData);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    fetchData();

    return () => {
      isMounted = false;
    };
  }, []); 

  const handleAddressSubmit = async () => {
    if (!addressForm.title || !addressForm.name || !addressForm.surname || 
        !addressForm.phone || !addressForm.city || !addressForm.district || !addressForm.address) {
      alert('Please fill in all required fields');
            return;
    }
    
    try {


      const cleanedPhone = addressForm.phone.replace(/\D/g, '');

if (cleanedPhone.length < 10 || cleanedPhone.length > 11) {
  alert('Phone number must be 10 or 11 digits (e.g., 5551234567)');
  return;
}

const addressData = {
  ...addressForm,
  phone: cleanedPhone 
};

      console.log('Gönderilen adres:', addressForm);
      
      const response = await fetch(
        'http://localhost:9000/workintech/ecommerce/management/api/user/address',
        {
          method: 'POST',
          headers: getAuthHeaders(),
          body: JSON.stringify(addressForm)
        }
      );
      
      console.log('Response status:', response.status);
      
      if (!response.ok) {
        const errorData = await response.json();
        console.error('Backend error:', errorData);
        throw new Error(errorData.message || 'Address could not be added');
      }
      
      const newAddress = await response.json();
      console.log('Eklenen adres:', newAddress);
      const addressToAdd = newAddress.data || newAddress;
      
      setAddresses([...addresses, addressToAdd]);
      setAddressForm({
        title: '', name: '', surname: '', phone: '',
        city: '', district: '', neighborhood: '', address: '', zipCode: ''
      });
      setShowAddressForm(false);
    alert('Address added successfully!');
        } catch (error) {
        console.error('Error adding address:', error);
        alert(`Failed to add address: ${error.message}`);

    }
  };

  const handleCardSubmit = async () => {
    if (!cardForm.cardNo || !cardForm.nameOnCard || !cardForm.expireMonth || !cardForm.expireYear) {
        alert('Please fill in all required fields');

        return;
    }

    const cleanCardNo = cardForm.cardNo.replace(/\s/g, '');
    
    if (cleanCardNo.length !== 16) {
      alert('The card number must be 16 digits');
      return;
    }

    try {
      console.log('Gönderilen kart:', {
        cardNo: cleanCardNo,
        nameOnCard: cardForm.nameOnCard,
        expireMonth: parseInt(cardForm.expireMonth),
        expireYear: parseInt(cardForm.expireYear)
      });

      const response = await fetch(
        'http://localhost:9000/workintech/ecommerce/management/api/user/card',
        {
          method: 'POST',
          headers: getAuthHeaders(),
          body: JSON.stringify({
            cardNo: cleanCardNo,
            nameOnCard: cardForm.nameOnCard,
            expireMonth: parseInt(cardForm.expireMonth),
            expireYear: parseInt(cardForm.expireYear)
          })
        }
      );

      console.log('Response status:', response.status);

      if (!response.ok) {
        const errorData = await response.json();
        console.error('Backend error:', errorData);
        throw new Error(JSON.stringify(errorData));
      }

      const newCard = await response.json();
      console.log('Eklenen kart:', newCard);
      
      setCards([...cards, newCard]);
      
      setCardForm({
        cardNo: '', nameOnCard: '', expireMonth: '', expireYear: '', cvv: ''
      });
      setShowCardForm(false);
        alert('Card added successfully!');
        } catch (error) {
        console.error('Error adding card:', error);
        alert(`Card could not be added: ${error.message}`);

    }
  };
const handleCardUpdate = async () => {
  if (
    !cardForm.cardNo ||
    !cardForm.nameOnCard ||
    !cardForm.expireMonth ||
    !cardForm.expireYear
  ) {
    alert("Please fill in all required fields");
    return;
  }

  const cleanCardNo = cardForm.cardNo.replace(/\s/g, "");

  if (cleanCardNo.length !== 16 || !/^\d+$/.test(cleanCardNo)) {
    alert("The card number must be 16 digits");
    return;
  }

  try {
    const response = await fetch(
      `http://localhost:9000/workintech/ecommerce/management/api/user/card/${editingCard}`,
      {
        method: "PUT",
        headers: {
          ...getAuthHeaders(),
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          cardNo: cleanCardNo,
          nameOnCard: cardForm.nameOnCard,
          expireMonth: Number(cardForm.expireMonth),
          expireYear: Number(cardForm.expireYear),
        }),
      }
    );

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Card could not be updated");
    }

    const updatedCard = await response.json();

    setCards((prevCards) =>
      prevCards.map((card) =>
        card.id === editingCard
          ? updatedCard.data ?? updatedCard
          : card
      )
    );

    setCardForm({
      cardNo: "",
      nameOnCard: "",
      expireMonth: "",
      expireYear: "",
      cvv: "",
    });

    setEditingCard(null);
    setShowCardForm(false);

    alert("Card updated successfully!");
  } catch (error) {
    console.error("Error updating card:", error);
    alert(`Failed to update card: ${error.message}`);
  }
};

const handleEditCard = (card, e) => {
  e.stopPropagation();

  setEditingCard(card.id);

  setCardForm({
    cardNo: card.cardNo,
    nameOnCard: card.nameOnCard,
    expireMonth: card.expireMonth.toString(),
    expireYear: card.expireYear.toString(),
    cvv: "",
  });

  setShowCardForm(true);
};


const handleAddressUpdate = async () => {
  if (!addressForm.title || !addressForm.name || !addressForm.surname || 
      !addressForm.phone || !addressForm.city || !addressForm.district || !addressForm.address) {
    alert('Please fill in all required fields');
    return;
  }
  
  try {
    const cleanedPhone = addressForm.phone.replace(/\D/g, '');

    if (cleanedPhone.length < 10 || cleanedPhone.length > 11) {
      alert('Phone number must be 10 or 11 digits');
      return;
    }

    const response = await fetch(
      `http://localhost:9000/workintech/ecommerce/management/api/user/address/${editingAddress}`,
      {
        method: 'PUT',
        headers: getAuthHeaders(),
        body: JSON.stringify({...addressForm, phone: cleanedPhone})
      }
    );
    
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Address could not be updated');
    }
    
    const updatedAddress = await response.json();
    
    // Liste güncelle
    setAddresses(addresses.map(addr => 
      addr.id === editingAddress ? (updatedAddress.data || updatedAddress) : addr
    ));
    
    setAddressForm({
      title: '', name: '', surname: '', phone: '',
      city: '', district: '', neighborhood: '', address: '', zipCode: ''
    });
    setEditingAddress(null);
    setShowAddressForm(false);
    alert('Address updated successfully!');
  } catch (error) {
    console.error('Error updating address:', error);
    alert(`Failed to update address: ${error.message}`);
  }
};

// Edit butonuna tıklayınca
const handleEditAddress = (address, e) => {
  e.stopPropagation();
  setEditingAddress(address.id);
  setAddressForm({
    title: address.title,
    name: address.name,
    surname: address.surname,
    phone: address.phone,
    city: address.city,
    district: address.district,
    neighborhood: address.neighborhood || '',
    address: address.address,
    zipCode: address.zipCode || ''
  });
  setShowAddressForm(true);
};





  const handleDeleteAddress = async (id) => {
if (!window.confirm('Are you sure you want to delete this address?')) return;
    
    try {
      const response = await fetch(
        `http://localhost:9000/workintech/ecommerce/management/api/user/address/${id}`,
        {
          method: 'DELETE',
          headers: getAuthHeaders()
        }
      );
      
      if (!response.ok) throw new Error('Delete failed');
      
      setAddresses(addresses.filter(addr => addr.id !== id));
      if (selectedAddress === id) setSelectedAddress(null);
      alert('Address deleted successfully!');
        } catch (error) {
        console.error('Error deleting address:', error);
        alert('Failed to delete address');

    }
  };

  const handleDeleteCard = async (id) => {
if (!window.confirm('Are you sure you want to delete this card?')) return;    
    try {
      const response = await fetch(
        `http://localhost:9000/workintech/ecommerce/management/api/user/card/${id}`,
        {
          method: 'DELETE',
          headers: getAuthHeaders()
        }
      );
      
      if (!response.ok) throw new Error('Delete failed');
      
      setCards(cards.filter(card => card.id !== id));
      if (selectedCard === id) setSelectedCard(null);
     alert('Card deleted successfully!');
        } catch (error) {
        console.error('Error deleting card:', error);
        alert('Card could not be deleted');

    }
  };

  if (loading) {
    return (
      <div className="w-full min-h-screen bg-gray-50 flex items-center justify-center" style={{ fontFamily: 'Montserrat' }}>
        <div className="text-center">
          <Loader className="animate-spin mx-auto mb-4 text-blue-500" size={48} />
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

const handleOrderSubmit = async () => {
  if (!selectedAddress || !selectedCard) {
    alert('Please select address and payment card');
    return;
  }

  try {
    const selectedCardData = cards.find(c => c.id === selectedCard);
    const selectedAddressData = addresses.find(a => a.id === selectedAddress);

    let cardNumber =
      selectedCardData.cardNo ||
      selectedCardData.card_no ||
      '';

    cardNumber = cardNumber.replace(/\D/g, '');

    if (cardNumber.length < 16) {
      const lastFour = cardNumber.slice(-4);
      cardNumber = '1234123412' + lastFour.padStart(6, '3');
    }

    cardNumber = cardNumber.padEnd(16, '0').slice(0, 16);

    console.log('💳 Card Number (16 digits):', cardNumber);

    const orderPayload = {
      addressId: selectedAddress,
      orderDate: new Date().toISOString(),
      cardNo: cardNumber,
      cardName: (
        selectedCardData.nameOnCard ||
        selectedCardData.name_on_card ||
        ''
      ).toString(),
      cardExpireMonth: parseInt(
        selectedCardData.expireMonth ||
        selectedCardData.expire_month ||
        12
      ),
      cardExpireYear: parseInt(
        selectedCardData.expireYear ||
        selectedCardData.expire_year ||
        2025
      ),
      cardCcv: 123,
      price: parseFloat(cartTotal.toFixed(2)),
      products: cart.map(item => ({
        productId: item.product.id,
        count: item.count,
        detail: item.product.title || 'Product',
        price: parseFloat(
          (
            item.product.discount_price ||
            item.product.price ||
            0
          ).toFixed(2)
        )
      }))
    };

    console.log(
      '📤 Sending order to backend:',
      JSON.stringify(orderPayload, null, 2)
    );

    const response = await fetch(
      'http://localhost:9000/workintech/ecommerce/management/api/order',
      {
        method: 'POST',
        headers: getAuthHeaders(),
        body: JSON.stringify(orderPayload)
      }
    );

    if (!response.ok) {
      const errorData = await response.json();
      console.error('Error Details:', errorData);
      throw new Error(
        JSON.stringify(errorData) || 'Order creation failed'
      );
    }

    const createdOrder = await response.json();

    const orderId =
      createdOrder.id ||
      createdOrder.data?.id ||
      createdOrder;


    const orderSuccessData = {
      orderId,
      total: cartTotal,
      addressTitle: selectedAddressData.title,
      addressFull: `${selectedAddressData.address}, ${selectedAddressData.district}, ${selectedAddressData.city}`,
      addressName: `${selectedAddressData.name} ${selectedAddressData.surname}`,
      addressPhone: selectedAddressData.phone,
      cardNo:
        '**** **** **** ' +
        (
          selectedCardData.card_no ||
          selectedCardData.cardNo
        )
          .toString()
          .slice(-4),
      cardName:
        selectedCardData.name_on_card ||
        selectedCardData.nameOnCard,
      items: cart.map(item => ({
        name: item.product.title,
        count: item.count,
        price:
          item.product.discount_price ||
          item.product.price
      }))
    };

    console.log('🎉 Order Success Data:', orderSuccessData);
    dispatch(clearCart());


    navigate('/order-success', {
      state: { orderData: orderSuccessData },
      replace: true
    });

    return {
      success: true,
      orderData: orderSuccessData
    };

  } catch (error) {
    console.error('❌ Order creation error:', error);
    alert(`Order creation failed:\n${error.message}`);
    return { success: false };
  }
};

  
  return (
    <div className="w-full min-h-screen bg-gray-50" style={{ fontFamily: 'Montserrat' }}>
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        
        <div className="mb-8">
         <h1 className="text-3xl font-bold text-gray-900 mb-2">Payment Information</h1>
        <p className="text-gray-600">Manage your delivery address and payment card details</p>

        </div>

        <div className="flex gap-4 mb-6 border-b border-gray-200">
          <button
            onClick={() => setActiveTab('address')}
            className={`pb-4 px-6 font-semibold transition-colors relative ${
              activeTab === 'address' ? 'text-blue-500' : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            <MapPin className="inline-block mr-2" size={20} />
            Address Information
            {activeTab === 'address' && (
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-500"></div>
            )}
          </button>
          <button
            onClick={() => setActiveTab('payment')}
            className={`pb-4 px-6 font-semibold transition-colors relative ${
              activeTab === 'payment' ? 'text-blue-500' : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            <CreditCard className="inline-block mr-2" size={20} />
            Payment Options
            {activeTab === 'payment' && (
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-500"></div>
            )}
          </button>
        </div>

        {activeTab === 'address' && (
          <div className="space-y-4">
            {!showAddressForm && (
              <button
                onClick={() => setShowAddressForm(true)}
                className="w-full bg-white border-2 border-dashed border-blue-500 rounded-lg p-6 hover:bg-blue-50 transition-colors flex items-center justify-center gap-2 text-blue-500 font-semibold"
              >
                <Plus size={20} />
                Add New Address
              </button>
            )}

            {showAddressForm && (
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Delivery Address</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">Address Title *</label>
                    <input
                      type="text"
                      value={addressForm.title}
                      onChange={(e) => setAddressForm({...addressForm, title: e.target.value})}
                      placeholder="Ev, İş, vs."
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-900 mb-2">Name *</label>
                      <input
                        type="text"
                        value={addressForm.name}
                        onChange={(e) => setAddressForm({...addressForm, name: e.target.value})}
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-900 mb-2">Surname *</label>
                      <input
                        type="text"
                        value={addressForm.surname}
                        onChange={(e) => setAddressForm({...addressForm, surname: e.target.value})}
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">Phone *</label>
                    <input
                      type="tel"
                      value={addressForm.phone}
                      onChange={(e) => setAddressForm({...addressForm, phone: e.target.value})}
                      placeholder="(5xx) xxx xx xx"
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-900 mb-2">City *</label>
                      <input
                        type="text"
                        value={addressForm.city}
                        onChange={(e) => setAddressForm({...addressForm, city: e.target.value})}
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-900 mb-2">District *</label>
                      <input
                        type="text"
                        value={addressForm.district}
                        onChange={(e) => setAddressForm({...addressForm, district: e.target.value})}
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-900 mb-2">Neighborhood</label>
                      <input
                        type="text"
                        value={addressForm.neighborhood}
                        onChange={(e) => setAddressForm({...addressForm, neighborhood: e.target.value})}
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">Street Address *</label>
                    <textarea
                      value={addressForm.address}
                      onChange={(e) => setAddressForm({...addressForm, address: e.target.value})}
                      rows={3}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">Postal Code</label>
                    <input
                      type="text"
                      value={addressForm.zipCode}
                      onChange={(e) => setAddressForm({...addressForm, zipCode: e.target.value})}
                      placeholder="34xxx"
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <div className="flex gap-3 pt-4">
  <button
    onClick={editingAddress ? handleAddressUpdate : handleAddressSubmit}
    className="flex-1 bg-blue-500 text-white py-3 rounded-md font-semibold hover:bg-blue-600 transition-colors"
  >
    {editingAddress ? "Update" : "Save"}
  </button>

  <button
    onClick={() => {
      setShowAddressForm(false);
      setEditingAddress(null);
      setAddressForm({
        title: "",
        name: "",
        surname: "",
        phone: "",
        city: "",
        district: "",
        neighborhood: "",
        address: "",
        zipCode: "",
      });
    }}
    className="flex-1 bg-gray-200 text-gray-900 py-3 rounded-md font-semibold hover:bg-gray-300 transition-colors"
  >
    Cancel
  </button>
</div>

                </div>
              </div>
            )}

            {addresses.length === 0 && !showAddressForm && (
              <div className="bg-white rounded-lg p-8 text-center">
                <MapPin className="mx-auto mb-4 text-gray-400" size={48} />
                <p className="text-gray-600">You don't have any saved addresses yet.</p>
              </div>
            )}

            {addresses.map((address) => (
              <div
                key={address.id}
                className={`bg-white rounded-lg shadow-sm p-6 cursor-pointer transition-all ${
                  selectedAddress === address.id
                    ? 'ring-2 ring-blue-500 border-2 border-blue-500'
                    : 'border border-gray-200 hover:shadow-md'
                }`}
                onClick={() => setSelectedAddress(address.id)}
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <h3 className="text-lg font-bold text-gray-900">{address.title}</h3>
                      {selectedAddress === address.id && (
                        <div className="bg-blue-500 text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
                          <Check size={14} />
                          Seçili
                        </div>
                      )}
                    </div>
                    <p className="text-gray-900 font-semibold mb-1">{address.name} {address.surname}</p>
                    <p className="text-gray-600 text-sm mb-1">{address.phone}</p>
                    <p className="text-gray-600 text-sm mb-1">{address.address}</p>
                    <p className="text-gray-600 text-sm">
                      {address.neighborhood && `${address.neighborhood}, `}
                      {address.district}, {address.city}
                      {address.zipCode && ` ${address.zipCode}`}
                    </p>
                  </div>
                 <div className="flex gap-2 ml-4">
  <button
    onClick={(e) => handleEditAddress(address, e)}
    className="p-2 text-blue-500 hover:bg-blue-50 rounded-md transition-colors"
    title="Düzenle"
  >
    <Edit2 size={18} />
  </button>

  <button
    onClick={(e) => {
      e.stopPropagation();
      handleDeleteAddress(address.id);
    }}
    className="p-2 text-red-500 hover:bg-red-50 rounded-md transition-colors"
    title="Sil"
  >
    <Trash2 size={18} />
  </button>
</div>


                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'payment' && (
          <div className="space-y-4">
            {!showCardForm && (
              <button
                onClick={() => setShowCardForm(true)}
                className="w-full bg-white border-2 border-dashed border-blue-500 rounded-lg p-6 hover:bg-blue-50 transition-colors flex items-center justify-center gap-2 text-blue-500 font-semibold"
              >
                <Plus size={20} />
                Add New Card
              </button>
            )}

            {showCardForm && (
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Card Information</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">Name on Card *</label>
                    <input
                      type="text"
                      value={cardForm.nameOnCard}
                      onChange={(e) => setCardForm({...cardForm, nameOnCard: e.target.value.toUpperCase()})}
                      placeholder="NAME SURNAME"
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">Card Number *</label>
                    <input
                      type="text"
                      value={cardForm.cardNo}
                      onChange={(e) => {
                        const value = e.target.value.replace(/\D/g, '');
                        setCardForm({...cardForm, cardNo: value});
                      }}
                      placeholder="1234567890123456"
                      maxLength={16}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <div className="grid grid-cols-3 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-900 mb-2">Month *</label>
                      <input
                        type="number"
                        value={cardForm.expireMonth}
                        onChange={(e) => setCardForm({...cardForm, expireMonth: e.target.value})}
                        placeholder="12"
                        min="1"
                        max="12"
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-900 mb-2">Year *</label>
                      <input
                        type="number"
                        value={cardForm.expireYear}
                        onChange={(e) => setCardForm({...cardForm, expireYear: e.target.value})}
                        placeholder="2025"
                        min="2024"
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-900 mb-2">CVV *</label>
                      <input
                        type="text"
                        value={cardForm.cvv}
                        onChange={(e) => {
                          const value = e.target.value.replace(/\D/g, '');
                          setCardForm({...cardForm, cvv: value});
                        }}
                        placeholder="123"
                        maxLength={3}
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                  </div>

                 <div className="flex gap-3 pt-4">
  <button
    onClick={editingCard ? handleCardUpdate : handleCardSubmit}
    className="flex-1 bg-blue-500 text-white py-3 rounded-md font-semibold hover:bg-blue-600 transition-colors"
  >
    {editingCard ? "Update" : "Save"}
  </button>

  <button
    onClick={() => {
      setShowCardForm(false);
      setEditingCard(null);
      setCardForm({
        cardNo: "",
        nameOnCard: "",
        expireMonth: "",
        expireYear: "",
        cvv: "",
      });
    }}
    className="flex-1 bg-gray-200 text-gray-900 py-3 rounded-md font-semibold hover:bg-gray-300 transition-colors"
  >
    Cancel
  </button>
</div>

                </div>
              </div>
            )}

            {cards.length === 0 && !showCardForm && (
              <div className="bg-white rounded-lg p-8 text-center">
                <CreditCard className="mx-auto mb-4 text-gray-400" size={48} />
                <p className="text-gray-600">You don't have any saved cards yet</p>
              </div>
            )}

           {cards.map((card) => (
  <div
    key={card.id}
    className={`bg-white rounded-lg shadow-sm p-6 cursor-pointer transition-all ${
      selectedCard === card.id
        ? 'ring-2 ring-blue-500 border-2 border-blue-500'
        : 'border border-gray-200 hover:shadow-md'
    }`}
    onClick={() => setSelectedCard(card.id)}
  >
    <div className="flex items-start justify-between">
      <div className="flex items-start gap-4 flex-1">
        <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-4 rounded-lg">
          <CreditCard size={32} className="text-white" />
        </div>
        <div>
          <div className="flex items-center gap-3 mb-2">
            <p className="text-lg font-bold text-gray-900">{card.cardNo}</p>
            {selectedCard === card.id && (
              <div className="bg-blue-500 text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
                <Check size={14} />
                Seçili
              </div>
            )}
          </div>
          <p className="text-gray-900 font-semibold mb-1">{card.nameOnCard}</p>
          <p className="text-gray-600 text-sm">
            Expiration: {card.expireMonth}/{card.expireYear}
          </p>
        </div>
      </div>
      {/* ✅ BUTONLAR BURAYA */}
      <div className="flex gap-2 ml-4">
        <button
          onClick={(e) => handleEditCard(card, e)}
          className="p-2 text-blue-500 hover:bg-blue-50 rounded-md transition-colors"
          title="Düzenle"
        >
          <Edit2 size={18} />
        </button>
        <button
          onClick={(e) => {
            e.stopPropagation();
            handleDeleteCard(card.id);
          }}
          className="p-2 text-red-500 hover:bg-red-50 rounded-md transition-colors"
          title="Sil"
        >
          <Trash2 size={18} />
        </button>
      </div>
    </div>
  </div>
))}
      
          </div>
        )}
       <div className="mt-8 flex justify-end">
           {selectedAddress && selectedCard ? (
    <button
      onClick={async () => {
        await handleOrderSubmit(); 
      }}
      className="px-8 py-4 rounded-md font-semibold text-lg transition-all bg-orange-500 text-white hover:bg-orange-600 shadow-lg"
    >
      Complete Order
    </button>
  ) : (
    <button
      disabled
      className="px-8 py-4 rounded-md font-semibold text-lg transition-all bg-gray-300 text-gray-500 cursor-not-allowed"
    >
      Complete Order
    </button>
  )}
</div>
      </div>
    </div>
  );
}