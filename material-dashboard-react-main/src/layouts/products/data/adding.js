import React, { useState } from "react";

function ProductForm() {
  const [newProduct, setNewProduct] = useState({
    name: "",
    category: "",
    image: "",
    price: 0,
    discount: 0,
    description: "",
  });

  const [error, setError] = useState("");

  // دالة لتحديث حالة المنتج عند تغيير قيمة في أحد المدخلات
  const handleInputChange = (e) => {
    const { name, value } = e.target; // استخراج اسم الحقل والقيمة المدخلة
    setNewProduct((prevProduct) => ({
      ...prevProduct, // الاحتفاظ بالقيم السابقة
      [name]: value, // تحديث القيمة الخاصة بالحقل الذي تم تغييره
    }));
  };

  // دالة لمعالجة إرسال النموذج
  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation check
    if (!newProduct.name || !newProduct.category || newProduct.price <= 0) {
      setError("يرجى ملء جميع الحقول بشكل صحيح");
      return;
    }

    setError(""); // Clear any previous errors
    console.log(newProduct); // هنا يمكنك التعامل مع البيانات المدخلة
    // You can call an API or some other action here to save the new product
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>اسم المنتج:</label>
        <input type="text" name="name" value={newProduct.name} onChange={handleInputChange} />
      </div>

      <div>
        <label>الفئة:</label>
        <input
          type="text"
          name="category"
          value={newProduct.category}
          onChange={handleInputChange}
        />
      </div>

      <div>
        <label>الصورة (رابط أو رفع صورة):</label>
        <input
          type="text"
          name="image"
          value={newProduct.image}
          onChange={handleInputChange}
          placeholder="رابط الصورة أو رفعها"
        />
      </div>

      <div>
        <label>السعر:</label>
        <input
          type="number"
          name="price"
          value={newProduct.price}
          onChange={handleInputChange}
          min="0"
        />
      </div>

      <div>
        <label>الخصم:</label>
        <input
          type="number"
          name="discount"
          value={newProduct.discount}
          onChange={handleInputChange}
          min="0"
          max="100"
        />
      </div>

      <div>
        <label>الوصف:</label>
        <textarea name="description" value={newProduct.description} onChange={handleInputChange} />
      </div>

      {error && <p style={{ color: "red" }}>{error}</p>}

      <button type="submit">إضافة المنتج</button>
    </form>
  );
}

export default ProductForm;
