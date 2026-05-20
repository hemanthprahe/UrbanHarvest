export const mockOrders = [
  { id: "#ORD-001", customer: "Arjun Mehta", items: "Paneer Tikka, Naan", amount: 485, status: "Delivered", date: "2024-03-15", avatar: "AM" },
  { id: "#ORD-002", customer: "Priya Sharma", items: "Biryani, Raita", amount: 320, status: "In Transit", date: "2024-03-15", avatar: "PS" },
  { id: "#ORD-003", customer: "Rahul Verma", items: "Masala Dosa, Filter Coffee", amount: 210, status: "Pending", date: "2024-03-14", avatar: "RV" },
  { id: "#ORD-004", customer: "Sneha Nair", items: "Chole Bhature, Lassi", amount: 275, status: "Delivered", date: "2024-03-14", avatar: "SN" },
  { id: "#ORD-005", customer: "Kiran Reddy", items: "Butter Chicken, Rice", amount: 410, status: "Cancelled", date: "2024-03-13", avatar: "KR" },
  { id: "#ORD-006", customer: "Ananya Das", items: "Idli, Sambar, Chutney", amount: 160, status: "Delivered", date: "2024-03-13", avatar: "AD" },
  { id: "#ORD-007", customer: "Vikram Singh", items: "Thali Special", amount: 550, status: "In Transit", date: "2024-03-12", avatar: "VS" },
];

export const mockProducts = [
  { id: 1, name: "Paneer Tikka Masala", category: "Main Course", price: 280, stock: 45, status: "Available", image: "🍛", rating: 4.8 },
  { id: 2, name: "Hyderabadi Biryani", category: "Rice Dishes", price: 320, stock: 0, status: "Out of Stock", image: "🍚", rating: 4.9 },
  { id: 3, name: "Masala Dosa", category: "Breakfast", price: 120, stock: 80, status: "Available", image: "🫓", rating: 4.7 },
  { id: 4, name: "Butter Chicken", category: "Main Course", price: 340, stock: 30, status: "Available", image: "🍗", rating: 4.6 },
  { id: 5, name: "Chole Bhature", category: "Breakfast", price: 180, stock: 0, status: "Out of Stock", image: "🫔", rating: 4.5 },
  { id: 6, name: "Filter Coffee", category: "Beverages", price: 60, stock: 200, status: "Available", image: "☕", rating: 4.9 },
  { id: 7, name: "Mango Lassi", category: "Beverages", price: 90, stock: 150, status: "Available", image: "🥭", rating: 4.7 },
  { id: 8, name: "Veg Thali", category: "Combos", price: 250, stock: 25, status: "Available", image: "🍽️", rating: 4.8 },
  { id: 9, name: "Gulab Jamun", category: "Desserts", price: 80, stock: 0, status: "Out of Stock", image: "🍮", rating: 4.6 },
  { id: 10, name: "Pav Bhaji", category: "Snacks", price: 140, stock: 60, status: "Available", image: "🫕", rating: 4.5 },
];

export const revenueData = [
  { month: "Oct", revenue: 42000, orders: 310 },
  { month: "Nov", revenue: 58000, orders: 420 },
  { month: "Dec", revenue: 71000, orders: 530 },
  { month: "Jan", revenue: 63000, orders: 460 },
  { month: "Feb", revenue: 82000, orders: 610 },
  { month: "Mar", revenue: 94000, orders: 720 },
];

export const statsData = {
  totalOrders: 2847,
  revenue: 94250,
  activeUsers: 1293,
  pendingDeliveries: 38,
};

export const categories = ["All", "Main Course", "Rice Dishes", "Breakfast", "Beverages", "Combos", "Desserts", "Snacks"];
