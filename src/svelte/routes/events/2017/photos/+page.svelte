<script lang="ts">
	import PhotoLayout from '../../../../svelte/lib/layout/PhotoLayout.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<PhotoLayout photos={data.photos} year="2017" />
