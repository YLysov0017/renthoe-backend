// работоспособность не гарантируется, ну и похуй
const sequelize = require('../database')
const { DataTypes } = require('sequelize')

const customer = sequelize.define('customer', {
    id: { type: DataTypes.INTEGER, allowNull: false, primaryKey: true, autoIncrement: true, unique: true },
    customer_name: { type: DataTypes.STRING, allowNull: false },
    email: { type: DataTypes.STRING, unique: true },
    password: { type: DataTypes.STRING, allowNull: false },
    phone_number: { type: DataTypes.STRING},
})

const flat = sequelize.define('flat', { 
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false },
    is_available: { type: DataTypes.BOOLEAN },
    price: { type: DataTypes.INTEGER, allowNull: false },
    people_count: { type: DataTypes.INTEGER },
    beds: { type: DataTypes.INTEGER },
    bedrooms: { type: DataTypes.INTEGER },
    location: { type: DataTypes.STRING, allowNull: false },
    with_pets: { type: DataTypes.BOOLEAN },
    square: { type: DataTypes.REAL },
})

const review = sequelize.define('review', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false },
    flat_id: { type: DataTypes.INTEGER, allowNull: false },
    review_text: { type: DataTypes.TEXT },
    mark: { type: DataTypes.INTEGER, allowNull: false },
})

const order = sequelize.define('order', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    customer_id: { type: DataTypes.INTEGER, allowNull: false },
    flat_id: { type: DataTypes.INTEGER, allowNull: false },
    order_date: { type: DataTypes.DATEONLY },
    order_expiration: { type: DataTypes.DATEONLY },
    rent_start: { type: DataTypes.DATE },
    rent_end: { type: DataTypes.DATE },
})

const review_to_customer = sequelize.define('review_to_customer', { 
    review_id: { type: DataTypes.INTEGER },
    customer_id: { type: DataTypes.INTEGER },
})

const order_to_customer = sequelize.define('order_to_customer', {
    order_id: { type: DataTypes.INTEGER, unique: true },
    customer_id: { type: DataTypes.INTEGER },
})

order.hasOne(customer)
order.hasOne(flat)

review.hasOne(flat)
customer.belongsToMany(order, { through: order_to_customer })
flat.belongsTo(order)
flat.belongsTo(review)


review.belongsToMany(customer, { through: review_to_customer })


module.exports = {
    customer,
    flat,
    order,
    review,
    review_to_customer
}