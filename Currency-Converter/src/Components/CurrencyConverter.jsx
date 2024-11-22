import React, { useState } from "react";
import { currencyConverter } from "../assets/API/postApi";

const CurrencyConverter = () => {
  const [amount, setAmount] = useState(0);
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("INR");
  const [ConvertedAmount, setConvertedAmount] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const handleConverteCurrency = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await currencyConverter(fromCurrency, toCurrency, amount);
      setConvertedAmount(res.data.conversion_result);
      setLoading(false);
    } catch (error) {
      setError("Error while fetching conversion rate");
    }
  };
  return (
    <>
      <section className="max-w-md mx-auto mt-10 bg-white shadow-lg rounded-lg p-6">
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-center text-blue-600 mb-4">
            Currency Converter
          </h1>
          <label
            htmlFor="Currency-amount"
            className="block text-gray-700 font-medium mb-2"
          >
            Amount:
            <input
              type="number"
              name="amount"
              id="Currency-amount"
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 mt-1 appearance-none"
              placeholder="Enter amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
          </label>
        </div>

        <div className="mb-6">
          <div className="flex flex-col sm:flex-row sm:justify-between gap-4">
            <label className="block w-full">
              From:
              <select
                value={fromCurrency}
                onChange={(e) => setFromCurrency(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 mt-1"
              >
                <option value="INR">INR</option>
                <option value="USD">USD</option>
                <option value="EUR">EUR</option>
                <option value="GBP">GBP</option>
                <option value="AUD">AUD</option>
              </select>
            </label>

            <label className="block w-full">
              To:
              <select
                value={toCurrency}
                onChange={(e) => setToCurrency(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 mt-1"
              >
                <option value="USD">USD</option>
                <option value="INR">INR</option>
                <option value="EUR">EUR</option>
                <option value="GBP">GBP</option>
                <option value="AUD">AUD</option>
              </select>
            </label>
          </div>
        </div>

        <div className="text-center">
          <button
            disabled={loading || amount <= 0}
            onClick={handleConverteCurrency}
            className={`px-6 py-2 text-white rounded ${
              loading || amount <= 0
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-blue-600 hover:bg-blue-700 hover:scale-125 transition duration-300"
            }`}
          >
            {loading ? "Converting..." : "Convert"}
          </button>
        </div>
        {ConvertedAmount && (
          <div className="flex justify-center mt-6">
            <h2 className="text-xl font-semibold text-gray-800 bg-blue-100 px-4 py-2 rounded-lg shadow-md">
              {amount} {fromCurrency} ={" "}
              <span className="text-blue-600 font-bold">
                {ConvertedAmount.toFixed(2)} {toCurrency}
              </span>
            </h2>
          </div>
        )}

        {error && <p>{error}</p>}
      </section>
    </>
  );
};

export default CurrencyConverter;
