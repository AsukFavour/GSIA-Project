export default {
  name: "schoolFees",
  title: "School Fees Payment",
  type: "document",
  fields: [
    { name: "studentName", title: "Student Name", type: "string" },
    { name: "payerName", title: "Payer Name", type: "string" },
    { name: "phonenumber", title: "Phone number", type: "number"},
    { name: "class", title: "Class", type: "string" },
    { name: "term", title: "Term", type: "string" },
    { name: "amount", title: "Amount", type: "number" },
    { name: "transactionId", title: "Transaction ID", type: "string" },
    { name: "email", title: "Email", type: "string" },
    { name: "status", title: "Status", type: "string" },
  ],
};
