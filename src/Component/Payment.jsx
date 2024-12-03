import React, { useState } from "react";
import { useFlutterwave, closePaymentModal } from "flutterwave-react-v3"; // Import Flutterwave hook
import { client } from "../sanityClient";
import emailjs from "emailjs-com";
import logo from "../assets/logo/logo.png";

const Payment = () => {
  const [formData, setFormData] = useState({
    studentName: "",
    payerName: "",
    class: "",
    term: "First Term",
    typeOfFees: "School Fees",
    description: "", // For 'Others'
    email: "",
    amount: "",
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

 

  // Flutterwave Payment Configuration
  const config = {
    public_key: import.meta.env.VITE_FLUTTERWAVE_PUBLIC_KEY, // Flutterwave public key
    tx_ref: Date.now().toString(),
    amount: formData.amount,
    currency: "NGN",
    payment_options: "card, banktransfer, ussd",
    customer: {
      email: formData.email,
      name: formData.payerName,
    },
    customizations: {
      title: "GSIA",
      description: `Payment for ${formData.typeOfFees} (${formData.class}, ${formData.term || "N/A"})`,
      logo: logo,
    },
  };

  const handleFlutterPayment = useFlutterwave(config);

  const sendEmail = (data) => {
    emailjs
      .send(
        "your_email_service_id", // Replace with your EmailJS service ID
        "your_email_template_id", // Replace with your EmailJS template ID
        {
          student_name: data.studentName,
          payer_name: data.payerName,
          class: data.class,
          term: data.term,
          type_of_fees: data.typeOfFees,
          email: data.email,
          amount: data.amount,
          transaction_id: data.transactionId,
        },
        "your_emailjs_user_id" // Replace with your EmailJS user ID
      )
      .then(
        () => console.log("Email sent successfully!"),
        (error) => console.error("Failed to send email:", error)
      );
  };

   // Callback function to handle successful payments
   const fwCallback = (response) => {
    if (response.status === "successful") {
      // Determine schema type based on type of fees
      const schemaType =
        formData.typeOfFees === "School Fees"
          ? "schoolFees"
          : formData.typeOfFees === "Books"
          ? "books"
          : formData.typeOfFees === "Uniform"
          ? "uniform"
          : "others";

      // Save transaction to Sanity
      client
        .create({
          _type: schemaType, // Schema type based on type of fees
          studentName: formData.studentName,
          payerName: formData.payerName,
          class: formData.class,
          term: formData.term || undefined, // Only for School Fees
          description: formData.description || undefined, // Only for Others
          email: formData.email,
          amount: formData.amount,
          transactionId: response.transaction_id,
          status: response.status,
        })
        .then((res) => {
          console.log("Payment saved to Sanity:", res);

          // Send email receipt after payment success
          sendEmail({
            studentName: formData.studentName,
            payerName: formData.payerName,
            class: formData.class,
            term: formData.term || "N/A",
            typeOfFees: formData.typeOfFees,
            email: formData.email,
            amount: formData.amount,
            transactionId: response.transaction_id,
          });

          // Reset the form and show success message
          alert("Payment successful! A receipt has been sent to your email.");
          setFormData({
            studentName: "",
            payerName: "",
            class: "",
            term: "First Term",
            typeOfFees: "School Fees",
            email: "",
            amount: "",
            description: "",
          });
        })
        .catch((error) => {
          console.error("Failed to save payment to Sanity:", error);
          alert("Payment successful, but saving to the backend failed.");
        });

      closePaymentModal(); // Close the payment modal
    }
  };

  return (
    <div className="max-w-lg mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold text-center mb-6">School Payment Gateway</h2>
      <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
        {/* Student Name */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Student Name</label>
          <input
            type="text"
            name="studentName"
            value={formData.studentName}
            onChange={handleInputChange}
            className="mt-1 p-2 w-full border rounded-lg"
            placeholder="Enter student's name"
            required
          />
        </div>

        {/* Payer Name */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Payer Name</label>
          <input
            type="text"
            name="payerName"
            value={formData.payerName}
            onChange={handleInputChange}
            className="mt-1 p-2 w-full border rounded-lg"
            placeholder="Enter payer's name"
            required
          />
        </div>

        {/* Class */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Class</label>
          <select
            name="class"
            value={formData.class}
            onChange={handleInputChange}
            className="mt-1 p-2 w-full border rounded-lg"
          >
            <option value="" disabled>Select Class</option>
            <option value="Primary 1">Primary 1</option>
            <option value="Primary 2">Primary 2</option>
            <option value="Primary 3">Primary 3</option>
            <option value="Primary 4">Primary 4</option>
            <option value="Primary 5">Primary 5</option>
            <option value="Primary 6">Primary 6</option>
          </select>
        </div>

        {/* Term */}
        {formData.typeOfFees === "School Fees" && (
          <div>
            <label className="block text-sm font-medium text-gray-700">Term</label>
            <select
              name="term"
              value={formData.term}
              onChange={handleInputChange}
              className="mt-1 p-2 w-full border rounded-lg"
            >
              <option value="First Term">First Term</option>
              <option value="Second Term">Second Term</option>
              <option value="Third Term">Third Term</option>
            </select>
          </div>
        )}

        {/* Type of Fees */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Type of Fees</label>
          <select
            name="typeOfFees"
            value={formData.typeOfFees}
            onChange={handleInputChange}
            className="mt-1 p-2 w-full border rounded-lg"
          >
            <option value="School Fees">School Fees</option>
            <option value="Books">Books</option>
            <option value="Uniform">Uniform</option>
            <option value="Others">Others</option>
          </select>
        </div>

        {/* Description (for 'Others') */}
        {formData.typeOfFees === "Others" && (
          <div>
            <label className="block text-sm font-medium text-gray-700">Description</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              className="mt-1 p-2 w-full border rounded-lg"
              placeholder="Enter description"
            />
          </div>
        )}

        {/* Email */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Email Address</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="mt-1 p-2 w-full border rounded-lg"
            placeholder="Enter email address"
            required
          />
        </div>

        {/* Amount */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Amount (NGN)</label>
          <input
            type="number"
            name="amount"
            value={formData.amount}
            onChange={handleInputChange}
            className="mt-1 p-2 w-full border rounded-lg"
            placeholder="Enter amount"
            required
          />
        </div>

        {/* Flutterwave Payment Button */}
        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-500 focus:outline-none"
          onClick={() => {
            handleFlutterPayment({
              callback: fwCallback, // Handles successful payments
              onClose: () => {
                console.log("Payment modal closed");
              },
            });
          }}
        >
          Pay Now
        </button>
      </form>
    </div>
  );
};

export default Payment;
