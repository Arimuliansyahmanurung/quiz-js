# 1. Isi data minimal 10 data (tabel Product)

## Code :

```javascript
const createProduct = async (req, res) => {
  try {
    const product = req.context.models.products.create({
      id: req.body.id,
      name: req.body.name,
      description: req.body.description,
      category_id: req.body.category_id,
      price: req.body.price,
      quantity: req.body.quantity,
    });
    return res.send(product);
  } catch (error) {
    return res.status(401).send(error.message);
  }
};
```

## Result :

```json
{
     {
        "id": 2,
        "name": "t-shirt",
        "description": "bahan yang berkualitas membuat nyaman untuk dipakai",
        "category_id": 5,
        "price": "70000",
        "image": null,
        "createdat": null,
        "updateat": null,
        "quantity": 10
    },
    {
        "id": 3,
        "name": "dress",
        "description": "bahan yang berkualitas membuat nyaman untuk dipakai sehari hari",
        "category_id": 6,
        "price": "80000",
        "image": null,
        "createdat": null,
        "updateat": null,
        "quantity": 10
    },
    {
        "id": 4,
        "name": "hijab",
        "description": "bahan yang berkualitas membuat nyaman untuk dipakai sehari hari",
        "category_id": 6,
        "price": "50000",
        "image": null,
        "createdat": null,
        "updateat": null,
        "quantity": 10
    },
    {
        "id": 5,
        "name": "sepatu",
        "description": "bahan yang berkualitas membuat nyaman untuk dipakai sehari hari",
        "category_id": 5,
        "price": "100000",
        "image": null,
        "createdat": null,
        "updateat": null,
        "quantity": 10
    },
    {
        "id": 6,
        "name": "Topi",
        "description": "bahan yang berkualitas membuat nyaman untuk dipakai sehari hari",
        "category_id": 5,
        "price": "30000",
        "image": null,
        "createdat": null,
        "updateat": null,
        "quantity": 10
    },
    {
        "id": 7,
        "name": "Jeans",
        "description": "bahan yang berkualitas membuat nyaman untuk dipakai sehari hari",
        "category_id": 5,
        "price": "80000",
        "image": null,
        "createdat": null,
        "updateat": null,
        "quantity": 10
    },
    {
        "id": 8,
        "name": "Tas",
        "description": "bahan yang berkualitas membuat nyaman untuk dipakai sehari hari",
        "category_id": 6,
        "price": "100000",
        "image": null,
        "createdat": null,
        "updateat": null,
        "quantity": 10
    },
    {
        "id": 9,
        "name": "kemeja",
        "description": "bahan yang berkualitas membuat nyaman untuk dipakai sehari hari",
        "category_id": 5,
        "price": "90000",
        "image": null,
        "createdat": null,
        "updateat": null,
        "quantity": 10
    },
    {
        "id": 10,
        "name": "kaos anak-anak",
        "description": "bahan yang berkualitas membuat nyaman untuk dipakai sehari hari",
        "category_id": 7,
        "price": "50000",
        "image": null,
        "createdat": null,
        "updateat": null,
        "quantity": 10
    },
    {
        "id": 11,
        "name": "celana anak-anak",
        "description": "bahan yang berkualitas membuat nyaman untuk dipakai sehari hari",
        "category_id": 7,
        "price": "60000",
        "image": null,
        "createdat": null,
        "updateat": null,
        "quantity": 10
    }
}
```

# 2. Menampilkan informasi customer dan accountnya(username,password)

## Code :

```javascript
const getUserCustomer = async (res) => {
  try {
    await sequelize
      .query(
        "select username,password,firstname,lastname from customers as c inner join users as u on c.user_id = u.id",
        { type: sequelize.QueryTypes.SELECT }
      )
      .then((result) => {
        return res.send(result);
      });
  } catch (error) {
    return res.send(error.message);
  }
};
```

## Result :

```json
{
      {
        "username": "ari",
        "password": "$2b$10$5WbNQx1V1c2qdrMQnedbHOy.S5H/Nd5KoJ9H/Vba2nsOWkPNxe6DS",
        "firstname": "ari",
        "lastname": "mulian"
    },
    {
        "username": "vania",
        "password": "$2b$10$MKAwbyGKkv6Xs.I8OQr17u6kp7lNklGqJBUDTzuwCIWEEQBAW9K2y",
        "firstname": "vania",
        "lastname": "fadilla"
    }
}
```

# 3. Menampilkan informasi customer dan detail ordernya

# Code :

```javascript
const customerOrder = async (req, res) => {
  try {
    await sequelize
      .query(
        "select o.id, u.username as pembeli, p.name as order, od.quantity as jumlah,p.price as harga, sum(o.totalprice * od.quantity) as total from order_detail as od inner join orders as o on od.order_id = o.id inner join products as p on od.product_id = p.id inner join users as u on o.user_id = u.id group by o.id, p.name, od.quantity, p.price, o.totalprice, u.username",
        { type: sequelize.QueryTypes.SELECT }
      )
      .then((result) => {
        return res.send(result);
      });
  } catch (error) {
    return res.send(error.message);
  }
};
```

# Result :

```json
{
  {
        "id": 4,
        "pembeli": "vania",
        "order": "kaos anak-anak",
        "jumlah": 1,
        "harga": "50000",
        "total": "50000"
    },
    {
        "id": 5,
        "pembeli": "vania",
        "order": "hijab",
        "jumlah": 1,
        "harga": "50000",
        "total": "50000"
    },
    {
        "id": 1,
        "pembeli": "ari",
        "order": "sepatu",
        "jumlah": 1,
        "harga": "100000",
        "total": "100000"
    },
    {
        "id": 3,
        "pembeli": "vania",
        "order": "Tas",
        "jumlah": 2,
        "harga": "200000",
        "total": "400000"
    },
    {
        "id": 2,
        "pembeli": "ari",
        "order": "sepatu",
        "jumlah": 2,
        "harga": "100000",
        "total": "200000"
    }
}
```

# 4. Menampilkan informasi produk per category

# Code :

```javascript
const getProductByCategory = async (req, res) => {
  try {
    await sequelize
      .query(
        "select pc.name as category, p.name as product , p.price, p.quantity from products as p inner join product_category as pc on p.category_id = pc.id order by pc.name, p.name",
        {
          type: sequelize.QueryTypes.SELECT,
        }
      )
      .then((result) => {
        return res.send(result);
      });
  } catch (error) {
    return res.send(error.message);
  }
};
```

# Result :

```json
{
    {
        "category": "pakaian anak-anak",
        "product": "celana anak-anak",
        "price": "60000",
        "quantity": 10
    },
    {
        "category": "pakaian anak-anak",
        "product": "kaos anak-anak",
        "price": "50000",
        "quantity": 10
    },
    {
        "category": "pakaian pria",
        "product": "Jeans",
        "price": "80000",
        "quantity": 10
    },
    {
        "category": "pakaian pria",
        "product": "kemeja",
        "price": "90000",
        "quantity": 10
    },
    {
        "category": "pakaian pria",
        "product": "sepatu",
        "price": "100000",
        "quantity": 10
    },
    {
        "category": "pakaian pria",
        "product": "t-shirt",
        "price": "70000",
        "quantity": 10
    },
    {
        "category": "pakaian pria",
        "product": "Topi",
        "price": "30000",
        "quantity": 10
    },
    {
        "category": "pakaian wanita",
        "product": "dress",
        "price": "80000",
        "quantity": 10
    },
    {
        "category": "pakaian wanita",
        "product": "hijab",
        "price": "50000",
        "quantity": 10
    },
    {
        "category": "pakaian wanita",
        "product": "Tas",
        "price": "100000",
        "quantity": 10
    }
}
```
