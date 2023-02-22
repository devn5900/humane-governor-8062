## Make a pull request before committing any changes and before making a pull request.

<br>

# Do 'npm i' for pre-installed packages

<br>

# create your seperate folders

<h3>pages</h3>

<ul>
 <li>index.jsx   //only for landing page</li>
 <li>to add another page please create a new folder inside pages folder</li>
</ul>

<h3>components</h3>

<ul>
 <li>create your components folder.</li>
 <li>and keep all the components inside your folder related to your task.</li>
</ul>

<h3>store</h3>

<ul>
 <li>import your reducer </li>
 <li>add your reducer in combineReducer.</li>
</ul>

<h3>Redux</h3>

<ul>
 <li>create new folder for your reducer</li>
 <li>keep all the actions, actionTypes, reducer in your respective folder</li>
</ul>

# index.js Packages

Don't modify

 <ul>
 <li>ChakraProvider added</li>
 <li>Redux Provider added</li>
 <li>BrowserRouter added</li>
</ul>

# AllRoutes.jsx

 <ul>
 <li>Add your Routes</li>
 <li>Link your pages</li>
</ul>

## logo and pre-loader is inside the images folder

<br>

# API Details

# Products

## Endpoint

    https://busy-jade-mussel-sock.cyclic.app/products

## Product Schema

    {

        "id": 1,
        "name": "Men's Purple Justice League Society Graphic,
        "category": "T-Shirt",
        "price": 499,
        "design": "Graphic Print",
        "type": "Men",
        "offer": "14% OFF",
        "brand": "Boogy®",
        "discount": "66% OFF",
        "rating": "1.3"
        "image": "https://images.bewakoof.com/t640/men-s-purple-justice-league-society-graphic-printed-oversized-t-shirt-581274-1676971303-1.jpg",
        "tags": [
                  {
                    "type": "fit",
                    "label": "OVERSIZED FIT",
                    "bgColor": "rgba(82, 82, 82, 0.8)",
                    "textColor": "#fff"
                  }
                ],
        "description": "For TriBe Members official dc comics merchandise by bewakoof.com Men's Purple Justice League Society Graphic Printed Oversized T-shirt Men's Purple Justice League Society Graphic Printed Oversized T-shirt",

    }

## For particular type endpoint

    Types:  Men, Women, accessories

    All data related to type 'Men'

        https://busy-jade-mussel-sock.cyclic.app/products?type=Men

    All data related to type 'Women'

       https://busy-jade-mussel-sock.cyclic.app/products?type=Women

    All data related to type 'accessories'

       https://busy-jade-mussel-sock.cyclic.app/products?type=accessories

# sorting by

## Price

    Sort by Price

        You can Change order according to your need 'asc' or 'desc'

        https://busy-jade-mussel-sock.cyclic.app/products?type=accessories&_sort=price&_order=desc

## Rating

    Sort by Rating

    You can Change order according to your need 'asc' or 'desc'

        https://busy-jade-mussel-sock.cyclic.app/products?type=accessories&_sort=rating&_order=desc

# Search

    https://busy-jade-mussel-sock.cyclic.app/products?type=accessories&q=Printed

    Change  q=search_text

# Filter

    Filter by category

      https://busy-jade-mussel-sock.cyclic.app/products?type=accessories&category=Backpack

      You can filter data by rating, category, offer, brand, discount, design, gender, price, name,

# Users Details endpoint (Signup / Login)

## Endpoint

    https://busy-jade-mussel-sock.cyclic.app/signup

    For logIn and signUp use same endpoint
    ---------------------------------------
    Get user details and store in localStorage and when user click on login button store data in localStorage and make request and update { "isLooged" = true } on bothside (api, localStorage).
    --------------------------------------------------
    When user click on logout button delete data from localStorage and make request and update isLooged= false (api, localStorage)
    ---------------------------
    'isLogged'=true
    --------------------------

## Schema

        {
            "id": 1,
            "name": "Devesh Mishra",
            "avatar": "",
            "password": "1234",
            "email": "devn5900@gmail.com",
            "isLogged": false,
            "cartItem": []
        }

    Store only product id in CartItem not all data
