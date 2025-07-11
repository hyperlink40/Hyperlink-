BEST CONNECTIONS

<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Landing Page with Image Gallery</title>
    <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
</head>
<body class="bg-gray-100">

    <!-- Header -->
    <header class="bg-white shadow-md">
        <div class="container mx-auto py-6 px-4">
            <div class="flex items-center justify-between">
                <a href="#" class="text-2xl font-bold text-gray-800">Your Logo</a>
                <nav>
                    <ul class="flex space-x-6">
                        <li><a href="#" class="text-gray-600 hover:text-gray-800">Home</a></li>
                        <li><a href="#" class="text-gray-600 hover:text-gray-800">About</a></li>
                        <li><a href="#" class="text-gray-600 hover:text-gray-800">Gallery</a></li>
                        <li><a href="#" class="text-gray-600 hover:text-gray-800">Contact</a></li>
                    </ul>
                </nav>
            </div>
        </div>
    </header>

<!-- Hero Section -->
<section class="bg-gradient-to-r from-purple-500 to-blue-500 text-white py-20">
    <div class="container mx-auto text-center">
        <h1 class="text-4xl font-bold mb-4">Welcome to Our Awesome Gallery</h1>
        <p class="text-lg mb-8">Explore our collection of stunning images.</p>
        <a href="#" class="bg-white text-purple-600 font-bold py-3 px-8 rounded-full hover:bg-purple-100 hover:text-purple-800">
            View Gallery
        </a>
    </div>
</section>


    <!-- Image Gallery Section -->
    <section class="py-12">
        <div class="container mx-auto px-4">
            <h2 class="text-3xl font-bold text-gray-800 mb-8 text-center">Image Gallery</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <!-- Image 1 -->
                <div class="rounded-lg shadow-md overflow-hidden">
                    <img src="images/nature 1.jpeg" alt="Nature 1">
                    <div class="p-4">
                        <h3 class="text-xl font-semibold text-gray-800 mb-2">Beautiful Nature</h3>
                        <p class="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                </div>

                <!-- Image 2 -->
                <div class="rounded-lg shadow-md overflow-hidden">
                    <img src="images/cate.jpg" alt="cate">
                    <div class="p-4">
                        <h3 class="text-xl font-semibold text-gray-800 mb-2">Urban Landscape</h3>
                        <p class="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                </div>

                <!-- Image 3 -->
                <div class="rounded-lg shadow-md overflow-hidden">
                    <img src="images/nature.jpg" alt="Nature">
                    <div class="p-4">
                        <h3 class="text-xl font-semibold text-gray-800 mb-2">Majestic Mountains</h3>
                        <p class="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                </div>

             <!-- Image 4 -->
             <div class="rounded-lg shadow-md overflow-hidden">
                <img src="images/mountain.jpg" alt="mountain">
                <div class="p-4">
                    <h3 class="text-xl font-semibold text-gray-800 mb-2">Serene Beach</h3>
                    <p class="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
            </div>


             <!-- Image 5 -->
             <div class="rounded-lg shadow-md overflow-hidden">
                <img src="images/caro.jpg" alt="caro" class="w-full h-64 object-cover">
                <div class="p-4">
                    <h3 class="text-xl font-semibold text-gray-800 mb-2">Enchanting Forest</h3>
                    <p class="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
            </div>


             <!-- Image 6 -->
             <div class="rounded-lg shadow-md overflow-hidden">
                <img src="https://source.unsplash.com/600x400/?river" alt="Mountains 1" class="w-full h-64 object-cover">
                <div class="p-4">
                    <h3 class="text-xl font-semibold text-gray-800 mb-2">Peaceful River</h3>
                    <p class="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
            </div>
            </div>
        </div>
    </section>

    <!-- Footer -->
    <footer class="bg-gray-800 text-white py-8">
        <div class="container mx-auto text-center">
            <p>&copy; 2023 Your Company. All rights reserved.</p>
        </div>
    </footer>

</body>
</html>
