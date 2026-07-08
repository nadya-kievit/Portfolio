import './App.css'

function App() {
	return (
		<div className="portfolio">
			<header className="siteHeader">
				<a className="siteLogo" href="#home">
					Your Name
				</a>

				<nav className="siteNav" aria-label="Main navigation">
					<a href="#about">About</a>
					<a href="#experience">Experience</a>
					<a href="#projects">Projects</a>
					<a href="#contact">Contact</a>
				</nav>
			</header>

			<main>
				<section id="home" className="hero">
					<p className="eyebrow">Computer Science Graduate</p>

					<h1>Full-stack developer based in Victoria, BC.</h1>

					<p className="heroDescription">
						I build interactive web applications using React, Python,
						FastAPI, and modern web technologies.
					</p>

					<div className="heroActions">
						<a className="primaryButton" href="#projects">
							View my work
						</a>

						<a className="secondaryButton" href="#contact">
							Contact me
						</a>
					</div>
				</section>

				<section id="about" className="pageSection">
					<h2>About</h2>
					<p>About section coming soon.</p>
				</section>

				<section id="experience" className="pageSection">
					<h2>Experience</h2>
					<p>Experience section coming soon.</p>
				</section>

				<section id="projects" className="pageSection">
					<h2>Selected projects</h2>
					<p>Project case studies coming soon.</p>
				</section>

				<section id="contact" className="pageSection">
					<h2>Contact</h2>
					<p>Contact information coming soon.</p>
				</section>
			</main>
		</div>
	)
}

export default App