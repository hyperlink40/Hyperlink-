BEST CONNECTIONS
 <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>HYPERLINK CONNECTION</title>
    <!-- Tailwind CSS CDN for easy styling -->
    <script src="https://cdn.tailwindcss.com"></script>
    <!-- Google Fonts - Inter for a clean look -->
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" rel="stylesheet">
    <style>
        /* Apply Inter font family globally */
        body {
            font-family: 'Inter', sans-serif;
        }
    </style>
</head>
<body class="bg-gray-100 text-white-800 flex flex-col min-h-screen">
    <!-- Header Section -->
    <header class="bg-blue-600 text-white p-4 shadow-md rounded-b-lg">
        <div class="container mx-auto flex justify-between items-center">
            <h1 class="text-3xl font-bold">Hyperlink connection</h1>
            <nav>
                <ul class="flex space-x-4">
                    <li><a href="#" class="hover:text-blue-200 transition duration-300">Home</a></li>
                    <li><a href="#" class="hover:text-blue-200 transition duration-300">About</a></li>
                    <li><a href="#" class="hover:text-blue-200 transition duration-300">Services</a></li>
                    <li><a href="#" class="hover:text-blue-200 transition duration-300">Contact</a></li>
                    <li><a href="admin-login.html" class="hover:text-blue-200 transition duration-300 font-bold">Admin Login</a></li>
                </ul>
            </nav>
        </div>
    </header>
    <!-- Main Content Area -->
    <main class="flex-grow container mx-auto p-4 py-8">
        <section class="bg-black p-6 rounded-lg shadow-lg mb-8">
            <h2 class="text-2xl font-semibold text-blue-700 mb-4">Welcome to hyperlink connections</h2>
            <p class="text-white -700 leading-relaxed">
                This is a responsive and modern website.
                You can easily customize this content to fit your needs. Explore the possibilities!
            </p>
            <p class="mt-4 text-white -600">
                Our goal is to provide a clean, accessible, and user-friendly experience for all visitors.
                Feel free to modify the structure and styles to create something truly unique.
            </p>
            <button class="mt-6 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg shadow-md transition duration-300">
                Learn More
            </button>
        </section>
        <section class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <!-- Feature Card 1 -->
            <div class="bg-black p-6 rounded-lg shadow-lg">
                <h3 class="text-xl font-semibold text-blue-600 mb-3">Feature One</h3>
                <p class="text-white -700">
                    Brief description of feature one. It's designed to be intuitive and efficient.
                </p>
            </div>
            <!-- Feature Card 2 -->
            <div class="bg-black p-6 rounded-lg shadow-lg">
                <h3 class="text-xl font-semibold text-blue-600 mb-3">Feature Two</h3>
                <p class="text-white -700">
                    Brief description of feature two. Providing robust solutions for your needs.
                </p>
            </div>
            <!-- Feature Card 3 -->
            <div class="bg-black p-6 rounded-lg shadow-lg">
                <h3 class="text-xl font-semibold text-blue-600 mb-3">Feature Three</h3>
                <p class="text-white -700">
                    Brief description of feature three. Focused on user experience and performance.
                </p>
            </div>
             <!--feature card 4 -->
             <div class="bg-black p-6 rounded-lg shadow-lg">            
              <h3 class="text-x1 font-semibold tex-blue-600 mb-3">connection platform</h3> 
              <p class="text-white -700">
               <div class="image-container">
                <img
                 src="https://images.unsplash.com/photo-1556905055-8f358a7a47b2?ixlib=rb-                                              4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=100"
                        alt="Stylish young African woman wearing patterned dress standing confidently in urban                              setting"                                
               class="w-full h-full object-cover"/>
            </div>
        </section>
    </main>
    <!-- Footer Section -->
    <footer class="bg-gray-800 text-white p-4 mt-8 rounded-t-lg">
        <div class="container mx-auto text-center">
            <p>&copy; 2025 hyperlink connection. All rights reserved.</p>
            <div class="flex justify-center space-x-4 mt-2">
                <a href="#" class="hover:text-gray-400 transition duration-300">Privacy Policy</a>
                <a href="#" class="hover:text-gray-400 transition duration-300">Terms of Service</a>
            </div>
        </div>
    </footer>
 </body>
</html>
