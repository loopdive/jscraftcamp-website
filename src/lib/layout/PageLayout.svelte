<script>
	import { defineCustomElement } from '@loopdive/web-components';
	import FooterNavigation from './FooterNavigation.svelte';
	import * as jscraftcamp from './logo';

	defineCustomElement(jscraftcamp);
</script>

<div class="page">
	<header>
		<input id="navbar-open" type="checkbox" />
		<label for="navbar-open"
			><svg-logo style="max-height: 1em"></svg-logo> <span>JSCraftCamp</span>
			<div class="menu-icon">+</div></label
		>
		<nav>
			<ul>
				<li class="home">
					<a href="/"
						><div style="width: 1em; height: 1em">
							<svg-logo style="max-height: 1em"></svg-logo>
						</div>
						<div>JSCraftCamp</div></a
					>
				</li>
				<li class="mobile-home"><a href="/">Home</a></li>
				<li><a href="registration">Registration</a></li>
				<li><a href="participants">Participants</a></li>
				<li><a href="sponsoring">Sponsoring</a></li>
				<li><a href="venue">Venue</a></li>
				<li><a href="values">Values</a></li>
			</ul>
		</nav>
	</header>
	<div class="content">
		<div>
			<slot />
		</div>
	</div>
	<FooterNavigation />
</div>

<style>
	.page {
		background: linear-gradient(135deg, hsla(120, 100%, 20%, 0.1), #fff 20em),
			linear-gradient(-45deg, hsla(120, 100%, 15%, 0.1), #fff 20em);
		display: flex;
		flex-flow: column;
		gap: 2em;
		min-height: 100vh;
	}

	.content {
		flex: 1;
		padding: 0 2rem;
		z-index: 0;
	}

	.content > div {
		align-items: center;
		display: flex;
		flex-flow: column;
		margin: 0 auto;
		max-width: var(--max-page-width);
	}

	header a {
		color: inherit;
		text-decoration: none;
	}
	header a:hover {
		text-decoration: underline;
	}

	header {
		padding: 2rem 2rem 0 2rem;
		min-width: 100%;
		max-width: var(--max-page-width);
	}
	nav {
		display: flex;
		flex-flow: row wrap;
		align-items: center;
		gap: 2em;
		margin: 0 auto;
		max-width: var(--max-page-width);
	}
	nav > ul {
		display: contents;
	}
	input {
		display: none;
	}
	li {
		list-style: none;
	}
	li.home,
	label {
		flex: 1;
		font-size: 26px;
		font-weight: 600;
		font-family: 'Poppins';
	}
	li.home a,
	label {
		display: flex;
		flex-flow: row nowrap;
		align-items: center;
		gap: 0.3em;
	}
	li.mobile-home {
		display: none;
	}
	label {
		display: none;
		cursor: pointer;
	}
	label span {
		flex: 1;
	}

	.menu-icon {
		display: flex;
		align-items: center;
		justify-content: center;
		height: 1em;
		width: 1em;
		transition: rotate 500ms;
	}

	@media screen and (max-width: 44em) {
		label {
			display: flex;
		}
		input[type='checkbox'] + label + nav {
			display: none;
		}
		input[type='checkbox']:checked + label + nav {
			display: flex;
		}
		input[type='checkbox']:checked + label .menu-icon {
			rotate: calc(3 * 45deg);
		}
		nav {
			align-items: stretch;
			flex-flow: column;
			font-size: 1em;
			gap: 0;
			margin: 1em 0;
		}
		nav li {
			background: #fff;
			flex: 1;
		}
		nav li a {
			display: block;
			padding: 1em;
			text-align: center;
		}
		li.home {
			display: none;
		}
		li.mobile-home {
			display: block;
		}
	}
</style>
