import React, { useState } from 'react'

const Services = () => {
  const [trackingType, setTrackingType] = useState('orderID');
  const [trackingNumber, setTrackingNumber] = useState('');
  const [trackingDetails, setTrackingDetails] = useState(null);

  const handleTrackingTypeChange = (event) => {
    setTrackingType(event.target.value);
    setTrackingNumber(''); 
  };

  const handleTrackingNumberChange = (event) => {
    setTrackingNumber(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you would typically make an API call to fetch tracking details
    // For demo purposes, let's just log the tracking type and number
    console.log('Tracking Type:', trackingType);
    console.log('Tracking Number:', trackingNumber);
    // Simulate fetching tracking details (replace with actual API call)
    setTrackingDetails({
      status: 'In Transit',
      location: 'New York, NY',
      estimatedDelivery: 'July 15, 2024'
    });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-lg mx-auto">
        <h1 className="text-3xl font-bold text-center mb-4">Track Your Order</h1>
        <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Tracking Type
            </label>
            <div className="flex items-center">
              <input
                type="radio"
                id="orderID"
                name="trackingType"
                value="orderID"
                className="mr-2 leading-tight"
                checked={trackingType === 'orderID'}
                onChange={handleTrackingTypeChange}
              />
              <label htmlFor="orderID" className="text-sm">
                Order ID
              </label>
              <input
                type="radio"
                id="awbCode"
                name="trackingType"
                value="awbCode"
                className="ml-6 mr-2 leading-tight"
                checked={trackingType === 'awbCode'}
                onChange={handleTrackingTypeChange}
              />
              <label htmlFor="awbCode" className="text-sm">
                AWB Tracking Code
              </label>
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              {trackingType === 'orderID' ? 'Order ID' : 'AWB Tracking Code'}
            </label>
            <input
              type="text"
              placeholder={trackingType === 'orderID' ? 'Enter Order ID' : 'Enter AWB Tracking Code'}
              value={trackingNumber}
              onChange={handleTrackingNumberChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Track your Order
            </button>
          </div>
        </form>

        {trackingDetails && (
          <div className="bg-white shadow-md rounded p-4 mb-4">
            <h2 className="text-lg font-bold mb-2">Tracking Details</h2>
            <p><span className="font-bold">Status:</span> {trackingDetails.status}</p>
            <p><span className="font-bold">Location:</span> {trackingDetails.location}</p>
            <p><span className="font-bold">Estimated Delivery:</span> {trackingDetails.estimatedDelivery}</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default Services
