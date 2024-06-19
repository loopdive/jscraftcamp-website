import { route } from './components/pages';

window.onload = async () => {
	route(document.location.pathname);
};
