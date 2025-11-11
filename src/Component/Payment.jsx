import { useState, useEffect } from "react";
import { client } from "../sanityClient";
import { ArrowLeft, CreditCard, User, Phone, Mail, DollarSign, BookOpen, GraduationCap, Loader2 } from "lucide-react";

const Payment = () => {
  const [formData, setFormData] = useState({
    studentName: "",
    payerName: "",
    Phonenumber: "",
    class: "",
    term: "First Term",
    typeOfFees: "School Fees",
    description: "",
    email: "",
    amount: "",
  });

  const [isVisible, setIsVisible] = useState(false);
  const [feesData, setFeesData] = useState([]);
  const [loadingFees, setLoadingFees] = useState(true);
  const [availableAmounts, setAvailableAmounts] = useState([]);

  // Load Paystack Inline JS V2
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://js.paystack.co/v2/inline.js";
    script.async = true;
    document.body.appendChild(script);

    // Trigger animation
    setTimeout(() => setIsVisible(true), 100);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  // Fetch fees configuration from Sanity
  useEffect(() => {
    const fetchFees = async () => {
      try {
        setLoadingFees(true);
        const query = `*[_type == "feesConfiguration" && isActive == true] {
          feeType,
          class,
          term,
          amount,
          description
        }`;
        const fees = await client.fetch(query);
        setFeesData(fees);
      } catch (error) {
        console.error("Error fetching fees:", error);
      } finally {
        setLoadingFees(false);
      }
    };

    fetchFees();
  }, []);

  // Update available amounts when class, term, or fee type changes
  useEffect(() => {
    if (!formData.class || !formData.typeOfFees) {
      setAvailableAmounts([]);
      return;
    }

    const filtered = feesData.filter((fee) => {
      const classMatch = fee.class === formData.class;
      const feeTypeMatch = fee.feeType === formData.typeOfFees;
      
      // For School Fees, also match term
      if (formData.typeOfFees === "School Fees") {
        const termMatch = fee.term === formData.term;
        return classMatch && feeTypeMatch && termMatch;
      }
      
      return classMatch && feeTypeMatch;
    });

    setAvailableAmounts(filtered);

    // Auto-select amount if only one option available
    if (filtered.length === 1) {
      setFormData(prev => ({ ...prev, amount: filtered[0].amount.toString() }));
    } else if (filtered.length === 0) {
      setFormData(prev => ({ ...prev, amount: "" }));
    }
  }, [formData.class, formData.term, formData.typeOfFees, feesData]);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleBack = () => {
    window.history.back();
  };

  // Send email using Web3Forms
  const sendEmail = async (data) => {
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: import.meta.env.VITE_WEB3FORMS_ACCESS_KEY,
          subject: `Payment Receipt - ${data.typeOfFees}`,
          from_name: "GSIA Payment",
          to: data.email,
          message: `
Dear ${data.payerName},

Thank you for your payment. Here are the details:

Student Name: ${data.studentName}
Payer Name: ${data.payerName}
Phone Number: ${data.Phonenumber}
Class: ${data.class}
Term: ${data.term}
Type of Fees: ${data.typeOfFees}
Amount: ₦${Number(data.amount).toLocaleString()}
Transaction ID: ${data.transactionId}

Payment Status: Successful

Best regards,
GSIA Administration
          `,
        }),
      });

      const result = await response.json();
      if (result.success) {
        console.log("Email sent successfully!");
      } else {
        console.error("Failed to send email:", result);
      }
    } catch (error) {
      console.error("Error sending email:", error);
    }
  };

  // Handle successful payment
  const onSuccess = (transaction) => {
    console.log("Payment successful:", transaction);

    const schemaType =
      formData.typeOfFees === "School Fees"
        ? "schoolFees"
        : formData.typeOfFees === "Books"
        ? "books"
        : formData.typeOfFees === "Uniform"
        ? "uniform"
        : "others";

    client
      .create({
        _type: schemaType,
        studentName: formData.studentName,
        payerName: formData.payerName,
        phonenumber: formData.Phonenumber,
        class: formData.class,
        term: formData.term || undefined,
        description: formData.description || undefined,
        email: formData.email,
        amount: formData.amount,
        transactionId: transaction.reference,
        status: "successful",
      })
      .then((res) => {
        console.log("Payment saved to Sanity:", res);

        sendEmail({
          studentName: formData.studentName,
          payerName: formData.payerName,
          Phonenumber: formData.Phonenumber,
          class: formData.class,
          term: formData.term || "N/A",
          typeOfFees: formData.typeOfFees,
          email: formData.email,
          amount: formData.amount,
          transactionId: transaction.reference,
        });

        alert("Payment successful! A receipt has been sent to your email.");
        setFormData({
          studentName: "",
          payerName: "",
          Phonenumber: "",
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
  };

  const onCancel = () => {
    console.log("Payment cancelled");
    alert("Payment was cancelled.");
  };

  const onError = (error) => {
    console.error("Payment error:", error);
    alert("An error occurred during payment. Please try again.");
  };

  const onLoad = (response) => {
    console.log("Payment modal loaded:", response);
  };

  // Handle payment with Paystack Inline V2
  const handlePayment = () => {
    if (
      !formData.studentName ||
      !formData.payerName ||
      !formData.Phonenumber ||
      !formData.class ||
      !formData.email ||
      !formData.amount
    ) {
      alert("Please fill in all required fields");
      return;
    }

    if (typeof window.PaystackPop === "undefined") {
      alert(
        "Payment system is still loading. Please wait a moment and try again."
      );
      return;
    }

    const paystack = new window.PaystackPop();

    paystack.newTransaction({
      key: import.meta.env.VITE_PAYSTACK_PUBLIC_KEY,
      email: formData.email,
      amount: formData.amount * 100,
      currency: "NGN",
      ref: "" + Math.floor(Math.random() * 1000000000 + 1),
      metadata: {
        custom_fields: [
          {
            display_name: "Student Name",
            variable_name: "student_name",
            value: formData.studentName,
          },
          {
            display_name: "Payer Name",
            variable_name: "payer_name",
            value: formData.payerName,
          },
          {
            display_name: "Phone Number",
            variable_name: "phone_number",
            value: formData.Phonenumber,
          },
          {
            display_name: "Class",
            variable_name: "class",
            value: formData.class,
          },
          {
            display_name: "Term",
            variable_name: "term",
            value: formData.term,
          },
          {
            display_name: "Type of Fees",
            variable_name: "type_of_fees",
            value: formData.typeOfFees,
          },
        ],
      },
      onSuccess,
      onCancel,
      onError,
      onLoad,
    });
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-white via-indigo-50 to-purple-50 py-6 sm:py-8 px-4 sm:px-6 overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-0 right-0 w-64 h-64 sm:w-96 sm:h-96 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 sm:w-96 sm:h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>

      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Back Button */}
        <div className={`mb-4 sm:mb-6 transition-all duration-700 ${
          isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
        }`}>
          <button
            onClick={handleBack}
            className="flex items-center gap-2 text-indigo-700 hover:text-indigo-900 transition-colors group"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            <span className="font-medium">Back</span>
          </button>
        </div>

        {/* Header */}
        <div className="text-center mb-6 sm:mb-8">
          <div className={`inline-block transition-all duration-700 delay-100 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-full text-sm font-semibold mb-4 shadow-lg uppercase tracking-wider">
              <CreditCard className="w-4 h-4" />
              Secure Payment
            </span>
          </div>
          
          <h1 className={`text-3xl sm:text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-700 via-purple-700 to-indigo-800 mb-3 transition-all duration-700 delay-200 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            School Payment Gateway
          </h1>
          
          <p className={`text-gray-700 text-base sm:text-lg max-w-2xl mx-auto transition-all duration-700 delay-300 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            Complete your payment securely with just a few clicks
          </p>
        </div>

        {/* Payment Form Card */}
        <div className={`relative overflow-hidden rounded-2xl shadow-xl bg-white/80 backdrop-blur-sm transition-all duration-700 delay-400 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          {/* Card Header */}
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-4 sm:p-6">
            <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
              <GraduationCap className="w-6 h-6" />
              Payment Details
            </h2>
            <p className="text-indigo-100 text-sm mt-1">Please fill in all required information</p>
          </div>

          {/* Loading State */}
          {loadingFees && (
            <div className="p-6 flex items-center justify-center gap-2 text-indigo-600">
              <Loader2 className="w-5 h-5 animate-spin" />
              <span>Loading fees information...</span>
            </div>
          )}

          {/* Form */}
          {!loadingFees && (
            <form className="p-4 sm:p-6 space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Student Name */}
                <div>
                  <label className=" text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2">
                    <User className="w-4 h-4 text-indigo-600" />
                    Student Name
                  </label>
                  <input
                    type="text"
                    name="studentName"
                    value={formData.studentName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2.5 border-2 border-gray-200 rounded-lg focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-all outline-none"
                    placeholder="Enter student's name"
                    required
                  />
                </div>

                {/* Payer Name */}
                <div>
                  <label className=" text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2">
                    <User className="w-4 h-4 text-indigo-600" />
                    Payer Name
                  </label>
                  <input
                    type="text"
                    name="payerName"
                    value={formData.payerName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2.5 border-2 border-gray-200 rounded-lg focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-all outline-none"
                    placeholder="Enter payer's name"
                    required
                  />
                </div>

                {/* Phone Number */}
                <div>
                  <label className=" text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2">
                    <Phone className="w-4 h-4 text-indigo-600" />
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="Phonenumber"
                    value={formData.Phonenumber}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2.5 border-2 border-gray-200 rounded-lg focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-all outline-none"
                    placeholder="Enter phone number"
                    required
                  />
                </div>

                {/* Email */}
                <div>
                  <label className=" text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2">
                    <Mail className="w-4 h-4 text-indigo-600" />
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2.5 border-2 border-gray-200 rounded-lg focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-all outline-none"
                    placeholder="Enter email address"
                    required
                  />
                </div>

                {/* Type of Fees */}
                <div>
                  <label className=" text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2">
                    <BookOpen className="w-4 h-4 text-indigo-600" />
                    Type of Fees
                  </label>
                  <select
                    name="typeOfFees"
                    value={formData.typeOfFees}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2.5 border-2 border-gray-200 rounded-lg focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-all outline-none bg-white"
                  >
                    <option value="School Fees">School Fees</option>
                    <option value="Books">Books</option>
                    <option value="Uniform">Uniform</option>
                    <option value="Others">Others</option>
                  </select>
                </div>

                {/* Class */}
                <div>
                  <label className=" text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2">
                    <GraduationCap className="w-4 h-4 text-indigo-600" />
                    Class
                  </label>
                  <select
                    name="class"
                    value={formData.class}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2.5 border-2 border-gray-200 rounded-lg focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-all outline-none bg-white"
                    required
                  >
                    <option value="" disabled>
                      Select Class
                    </option>
                    <option value="Primary 1">Primary 1</option>
                    <option value="Primary 2">Primary 2</option>
                    <option value="Primary 3">Primary 3</option>
                    <option value="Primary 4">Primary 4</option>
                    <option value="Primary 5">Primary 5</option>
                    <option value="Primary 6">Primary 6</option>
                  </select>
                </div>

                {/* Term - Only shown for School Fees */}
                {formData.typeOfFees === "School Fees" && (
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Term
                    </label>
                    <select
                      name="term"
                      value={formData.term}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2.5 border-2 border-gray-200 rounded-lg focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-all outline-none bg-white"
                    >
                      <option value="First Term">First Term</option>
                      <option value="Second Term">Second Term</option>
                      <option value="Third Term">Third Term</option>
                    </select>
                  </div>
                )}

                {/* Amount */}
                <div className={formData.typeOfFees === "School Fees" ? "" : "md:col-span-2"}>
                  <label className=" text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2">
                    <DollarSign className="w-4 h-4 text-indigo-600" />
                    Amount (NGN)
                  </label>
                  {availableAmounts.length > 1 ? (
                    <select
                      name="amount"
                      value={formData.amount}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2.5 border-2 border-gray-200 rounded-lg focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-all outline-none bg-white"
                      required
                    >
                      <option value="">Select Amount</option>
                      {availableAmounts.map((fee, index) => (
                        <option key={index} value={fee.amount}>
                          ₦{fee.amount.toLocaleString()}
                          {fee.description ? ` - ${fee.description}` : ''}
                        </option>
                      ))}
                    </select>
                  ) : availableAmounts.length === 1 ? (
                    <div className="w-full px-4 py-2.5 border-2 border-gray-200 rounded-lg bg-gray-50 text-gray-700 font-semibold">
                      ₦{availableAmounts[0].amount.toLocaleString()}
                      {availableAmounts[0].description && (
                        <span className="text-sm text-gray-500 ml-2">
                          - {availableAmounts[0].description}
                        </span>
                      )}
                    </div>
                  ) : (
                    <input
                      type="number"
                      name="amount"
                      value={formData.amount}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2.5 border-2 border-gray-200 rounded-lg focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-all outline-none"
                      placeholder="Enter amount"
                      required
                    />
                  )}
                  {formData.class && availableAmounts.length === 0 && (
                    <p className="text-sm text-amber-600 mt-1">
                      No preset amount found. Please enter amount manually or contact administration.
                    </p>
                  )}
                </div>
              </div>

              {/* Description - Only shown for Others */}
              {formData.typeOfFees === "Others" && (
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Description
                  </label>
                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2.5 border-2 border-gray-200 rounded-lg focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-all outline-none resize-none"
                    placeholder="Enter description"
                    rows="3"
                  />
                </div>
              )}

              {/* Payment Button */}
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-3.5 px-6 rounded-lg font-semibold text-lg hover:from-indigo-700 hover:to-purple-700 focus:outline-none focus:ring-4 focus:ring-indigo-300 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex items-center justify-center gap-2"
                onClick={handlePayment}
              >
                <CreditCard className="w-5 h-5" />
                Pay Now
              </button>

              {/* Security Notice */}
              <div className="text-center pt-2">
                <p className="text-xs text-gray-500 flex items-center justify-center gap-1">
                  <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                  </svg>
                  Secured by Paystack - Your payment information is encrypted and secure
                </p>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default Payment;