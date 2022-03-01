import mongoose from "mongoose";
const Users = new mongoose.Schema({
    phone: {
        type: Number,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    // 0 : nhanvien , 1 : manager, 2 : host
    role: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    birthday: {
        type: String,
        required: true
    },
    // 0 : nam, 1 : nu
    sex: {
        type: Number,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    daily_wage: {
        type: Number,
        required: true
    },
    number_of_workdays: {
        type: String,
        default: "0/7"
    },
    restaurant_id: {
        type: String,
        required: true
    },
});
const Products = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    cost: {
        type: Number,
        required: true
    },
    restaurant_id: {
        type: String,
        required: true
    }
});
const Materials = new mongoose.Schema({
    restaurant_id: {
        type: String,
        required: true
    },
    quantity_in_stock: {
        type: Number,
        required: true
    },
    date: {
        type: Date,
        required: true,
    },
    start: {
        type: Boolean,
        required: true
    },
    end: {
        type: Boolean,
        required: true
    }
});
const Restaurants = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    total_table: {
        type: String
    },
    used_table: {
        type: String
    }
});
const Purchase_history = new mongoose.Schema({
    restaurant_id: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    product_id: {
        type: Number,
        required: true
    },
    product_name: {
        type: String,
        required: true
    },
    quantity_product: {
        type: Number,
        required: true
    },
    total_cost: {
        type: Number,
        required: true
    }
});

export const Users_CX = mongoose.model('Users', Users);
export const Products_CX = mongoose.model('Products', Products);
export const Materials_CX = mongoose.model('Materials', Materials);
export const Restaurants_CX = mongoose.model('Restaurants', Restaurants);
export const Purchase_history_CX = mongoose.model('Purchase_history', Purchase_history);