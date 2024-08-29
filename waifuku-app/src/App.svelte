<script>
	 // script.js
	window.onload = function() {
	    const main_container = document.getElementById('main_container');
	    const closeBtn = document.getElementById('button-container');

	    // Show the main_container after a delay for demonstration purposes
	    setTimeout(() => {
	        main_container.classList.add('show');
	    }, 100); // Delay in milliseconds

	    // When the user clicks on <span> (x), close the main_container
	    closeBtn.onclick = function() {
	        main_container.classList.remove('show');
	    }

	    // When the user clicks anywhere outside of the main_container, close it
	    window.onclick = function(event) {
	        if (event.target === main_container) {
	            main_container.classList.remove('show');
	        }
	    }
	}
</script>

<!-- navbar -->
<nav class="navbar" id="page">
	<ul>
		<ul class="navbar-items">
			<li>
				<h1><b>Waifuku</b></h1>
			</li>
			<li>
				<a href="#page">Home</a>
			</li>
			<li>
				<a href="#explanation-container">About</a>
			</li>
			<li>
				<a href="#footer-container">Contact</a>
			</li>
		</ul>
	</ul>
</nav>

<div class="welcome-container">
		<h1>Welcome to Waifuku</h1>

		<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
		tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
		quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
		consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
		cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
		proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
</div>

<section class="main-container" id="main-container">
	<div class="page-container">
		<h1>Hello new user!</h1>

		<hr>

		<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
		tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
		quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
		consequat. Duis aute irure dolor in reprehenderit in voluptate velit</p>

		<button class="button-container" id="button-container"> Understand </button>
	</div>
</section>

<hr id="explanation-container">

<section class="explanation-container">
	<div class="container-row">
		<div class="container-col">
			<h1>My Waifu</h1>

			<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
			tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
			quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
			consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
			cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
			proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

			<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
			tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
			quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
			consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
			cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
			proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
		</div>

		<div class="container-col">
			<h1>My Waifu</h1>

			<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
			tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
			quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
			consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
			cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
			proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

			<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
			tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
			quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
			consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
			cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
			proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
		</div>

		<div class="container-col">
			<h1>My Waifu</h1>

			<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
			tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
			quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
			consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
			cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
			proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

			<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
			tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
			quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
			consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
			cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
			proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
		</div>
		
	</div>
</section>

<footer class="footer-container" id="footer-container">
	<div class="container-row">

		<div class="container-col">
			<h1>Lorem ipsum</h1>
		</div>

		<div class="container-col">
			<h3>Contact us</h3>
			<div class="items">
				<a href="none">Whatsapp</a>
				<a href="none">Facebook</a>
				<a href="none">Tiktok</a>
			</div>
		</div>

		<div class="container-col">
			<h3>Lorem</h3>
			<div class="items">
				<a href="none">Lorem ipsum</a>
				<a href="none">dolor</a>
				<a href="none">sit amet</a>
				<a href="none">Lorem iasum</a>
				<a href="none">Lorem iasum</a>
				<a href="none">Lorem iasum</a>
				<a href="none">sit amet</a>
			</div>
		</div>

		<div class="container-col">
			<h3>Consectur</h3>
			<div class="items">
				<a href="none">Lorem ipsum</a>
				<a href="none">dolor</a>
				<a href="none">sit amet</a>
				<a href="none">sit amet</a>
				<a href="none">dolor sit amet consectur</a>
			</div>
		</div>

		<div class="container-col">
			<h3>Adeatus</h3>
			<div class="items">
				<a href="none">Lorem ipsum</a>
				<a href="none">dolor</a>
				<a href="none">sit amet</a>
				<a href="none">sit amet</a>
				<a href="none">sit amet consectur</a>
				<a href="none">sit amet consectur</a>

			</div>
		</div>

		<div class="container-col">
			<h3>Iasum</h3>
			<div class="items">
				<a href="none">Lorem ipsum</a>
				<a href="none">dolor</a>
				<a href="none">sit amet consectur</a>
				<a href="none">sit amet</a>
				<a href="none">sit amet consectur</a>
				<a href="none">sit amet consectur</a>
				<a href="none">sit amet consectur</a>
				<a href="none">sit amet</a>
				<a href="none">sit amet</a>

			</div>
		</div>

		<div class="container-col">
			<h3>Dolor sit amet</h3>
			<div class="items">
				<a href="none">Lorem ipsum</a>
				<a href="none">dolor</a>
				<a href="none">sit amet</a>
				<a href="none">sit amet</a>
			</div>
		</div>
	</div>
</footer>



<style>
	.navbar {
		display: inline-flex;
		border-radius: 0px 0px 20px 20px;
		box-shadow: 0px 0px 0px 0px #3335;
	}

	.navbar-items {
		display: inline-flex;
		width: 100%;
		align-items: center;
		list-style-type: none;
	}

	h1 {
		font-size: 1.5rem;
	}

	.navbar-items li {
		font-size: 1rem;
		margin-right: 3rem;
		
		
	}

	.navbar-items a:hover {
		transition: 0.2s ease-out;
		text-decoration: underline;
		align-items: center;

	}
	.navbar-items a:visited {
		transition: font-size 0.2s ease;
	}

	.main-container {
		display: none;
		align-items: center;
		justify-content: center;
		height: 80vh;

	}

	.welcome-container {
		display: flex;
		flex-direction: column;
		margin: 10vw;
		font-size: 1em;
		width: 30vw;
		color: white;

	}

	.welcome-container:hover {
		transform: scale(1.1);
		transition: 0.2s ease-in-out;
		text-shadow: 0px 0px 30px white;

	}

	.page-container {
		display: inline;
		border-radius: 15px;
		padding: 1em;
		box-shadow: 0px 0px 10px 10px #0005;
		width: 300px;
		backdrop-filter: blur(10px);
		transition: 0.5s ease-in-out; /* Fade-in transition */
		opacity: 0;
	}

	.page-container:hover {
		transition: 2.0s fadein;
	}


	.page-container h1 {
		font-size: 2em;
		text-align: center;
	}

	.items {
		margin-top: 50px;
	}

	.button-container {
		display: flex;
		margin: auto;

	}

	button {
		background-color: blueviolet;
		border: none;
		padding: 10px;
		border-radius: 10px;
	}

	button:hover {
		transition: 0.2s ease;
		transform: scale(1.1);
		box-shadow: 0px 0px 10px 2px blueviolet;
	}

	button:focus {
		transition: 0.2s ease;
	}

	/*mobile size*/
	@media only screen and (max-width: 720px) {
	  .container-row {
	  	display: flex;
		flex-direction: column;
		width: 100%;
	  }
	  .items {
	  	justify-content: center;
	  }

	  .container-col {
	  	flex-direction: column;
	  	margin: auto;
	  }
	  .welcome-container {
	  	padding-right: 0;
	  	padding: 10vw;
	  }
	}

	.explanation-container {
		margin: 8vw;
		padding: 30px;
		backdrop-filter: blur(10px);
		border-radius: 20px;
		box-shadow: 0px 0px 20px 10px #2229;
		margin-bottom: 100px;
	}

	.container-row {
		display: flex;		
	}

	.container-col {
		margin: 10px;
	}

	.footer-container {
		display: flex;
		background-color: #111d;
		border-radius: 20px;
		box-shadow: 0px 0px 10px 10px #111d;
		padding: 2em;
		backdrop-filter: blur(10px);
	}

</style>