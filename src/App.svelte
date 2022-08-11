<script>
	import { getFirestore } from "firebase/firestore";
	import { getStorage } from "firebase/storage";
	import app from "./firebase";

	import Modal from "./Modal.svelte"
	import PinPoint from "./PinPoint.svelte";
	import UploadForm from "./UploadForm.svelte";

	let coordinate = {}
	let upload = false
	let showModal = false;

	const db = getFirestore(app)
    const storage = getStorage(app)

	function popUpModal(event) {
		if (upload == true) {
			// coorinate = { x: event.clientX - 10, y: event.clientY - 10 }
			coordinate.x = event.clientX - 10
			coordinate.y = event.clientY - 10
			showModal = true
		}
	}

	function closeModal() {
		showModal = false
		upload = false
	}
</script>

<button on:click={() => upload = !upload}>{upload ? "cancel":"+"}</button>

<div on:click={popUpModal} class:upload="{upload === true}">
	<PinPoint db={db} storage={storage} upload={upload} />
</div>

{#if showModal}
	<Modal on:close="{closeModal}">
		<h2 slot="header">
			UPLOAD
		</h2>

		<UploadForm on:close="{closeModal}"  coordinate={coordinate} db={db} storage={storage} />
	</Modal>
{/if}

<style>
	:global(body) {
		background-image: url("https://upload.wikimedia.org/wikipedia/commons/e/ec/World_map_blank_without_borders.svg");
		background-size: cover;
	}

	div {
		height: 100%;
	}

	button {
		position: fixed;
	}

	.upload {
		cursor: crosshair;
	}
</style>