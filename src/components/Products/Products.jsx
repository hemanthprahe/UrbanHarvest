import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Plus, Search, Filter, Edit2, Trash2, X } from "lucide-react";
import AppLayout from "../Layout/AppLayout";
import StatusBadge from "../Common/StatusBadge";
import { addProduct, deleteProduct, setSearchQuery, setCategory, setFilterStatus } from "../../store/slices/productsSlice";
import { categories } from "../../data/mockData";
import "./Products.css";

const EMPTY_PRODUCT = { name: "", category: "Main Course", price: "", stock: "", status: "Available", image: "🍽️", rating: 4.5 };

const Products = () => {
  const dispatch = useDispatch();
  const { items, searchQuery, selectedCategory, filterStatus } = useSelector((s) => s.products);

  const [showModal, setShowModal] = useState(false);
  const [form, setForm] = useState(EMPTY_PRODUCT);
  const [viewMode, setViewMode] = useState("table"); // "table" | "grid"

  const filtered = items.filter((p) => {
    const matchSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) || p.category.toLowerCase().includes(searchQuery.toLowerCase());
    const matchCat = selectedCategory === "All" || p.category === selectedCategory;
    const matchStatus = filterStatus === "All" || p.status === filterStatus;
    return matchSearch && matchCat && matchStatus;
  });

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddProduct = () => {
    if (!form.name || !form.price || !form.stock) return;
    dispatch(addProduct({ ...form, price: Number(form.price), stock: Number(form.stock) }));
    setShowModal(false);
    setForm(EMPTY_PRODUCT);
  };

  return (
    <AppLayout title="Products">
      <div className="products-page fade-in">

        {/* Toolbar */}
        <div className="products-toolbar">
          <div className="toolbar-left">
            <div className="search-box">
              <Search size={16} />
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => dispatch(setSearchQuery(e.target.value))}
              />
              {searchQuery && <button className="clear-search" onClick={() => dispatch(setSearchQuery(""))}><X size={14} /></button>}
            </div>
            <select className="filter-select" value={filterStatus} onChange={(e) => dispatch(setFilterStatus(e.target.value))}>
              <option value="All">All Status</option>
              <option value="Available">Available</option>
              <option value="Out of Stock">Out of Stock</option>
            </select>
          </div>
          <div className="toolbar-right">
            <span className="results-count">{filtered.length} products</span>
            <button className="add-btn" onClick={() => setShowModal(true)}>
              <Plus size={18} /> Add Product
            </button>
          </div>
        </div>

        {/* Category Tabs */}
        <div className="category-tabs">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`cat-tab ${selectedCategory === cat ? "active" : ""}`}
              onClick={() => dispatch(setCategory(cat))}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Table */}
        <div className="products-table-card">
          <div className="table-wrap">
            <table className="products-table">
              <thead>
                <tr>
                  <th>Product</th>
                  <th>Category</th>
                  <th>Price</th>
                  <th>Stock</th>
                  <th>Rating</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {filtered.length === 0 ? (
                  <tr>
                    <td colSpan={7} className="empty-row">
                      <div className="empty-state">
                        <span>🔍</span>
                        <p>No products found</p>
                      </div>
                    </td>
                  </tr>
                ) : (
                  filtered.map((product, i) => (
                    <tr key={product.id} style={{ animationDelay: `${i * 0.04}s` }} className="fade-in">
                      <td>
                        <div className="product-name-cell">
                          <span className="product-emoji">{product.image}</span>
                          <span className="product-name">{product.name}</span>
                        </div>
                      </td>
                      <td><span className="cat-tag">{product.category}</span></td>
                      <td className="price-cell">₹{product.price}</td>
                      <td>
                        <span className={`stock-cell ${product.stock === 0 ? "stock-zero" : ""}`}>
                          {product.stock === 0 ? "–" : product.stock}
                        </span>
                      </td>
                      <td>
                        <span className="rating-cell">⭐ {product.rating}</span>
                      </td>
                      <td><StatusBadge status={product.status} /></td>
                      <td>
                        <div className="action-btns">
                          <button className="action-btn edit-btn" title="Edit"><Edit2 size={15} /></button>
                          <button className="action-btn del-btn" title="Delete" onClick={() => dispatch(deleteProduct(product.id))}><Trash2 size={15} /></button>
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Add Product Modal */}
      {showModal && (
        <div className="modal-overlay" onClick={() => setShowModal(false)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3>Add New Product</h3>
              <button className="modal-close" onClick={() => setShowModal(false)}><X size={20} /></button>
            </div>
            <div className="modal-body">
              <div className="modal-field">
                <label>Product Name *</label>
                <input name="name" value={form.name} onChange={handleFormChange} placeholder="e.g. Veg Biryani" />
              </div>
              <div className="modal-row">
                <div className="modal-field">
                  <label>Category</label>
                  <select name="category" value={form.category} onChange={handleFormChange}>
                    {categories.filter(c => c !== "All").map(c => <option key={c}>{c}</option>)}
                  </select>
                </div>
                <div className="modal-field">
                  <label>Status</label>
                  <select name="status" value={form.status} onChange={handleFormChange}>
                    <option>Available</option>
                    <option>Out of Stock</option>
                  </select>
                </div>
              </div>
              <div className="modal-row">
                <div className="modal-field">
                  <label>Price (₹) *</label>
                  <input type="number" name="price" value={form.price} onChange={handleFormChange} placeholder="0" min="0" />
                </div>
                <div className="modal-field">
                  <label>Stock *</label>
                  <input type="number" name="stock" value={form.stock} onChange={handleFormChange} placeholder="0" min="0" />
                </div>
              </div>
              <div className="modal-field">
                <label>Emoji Icon</label>
                <input name="image" value={form.image} onChange={handleFormChange} placeholder="🍽️" />
              </div>
            </div>
            <div className="modal-footer">
              <button className="cancel-btn" onClick={() => setShowModal(false)}>Cancel</button>
              <button className="save-btn" onClick={handleAddProduct}>Add Product</button>
            </div>
          </div>
        </div>
      )}
    </AppLayout>
  );
};

export default Products;
