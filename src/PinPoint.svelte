<script>
    import { collection, getDocs, onSnapshot, orderBy, query } from "firebase/firestore";
    import { getDownloadURL, ref } from "firebase/storage";
    import { onMount } from "svelte";
    import Detail from "./Detail.svelte";
    import Modal from "./Modal.svelte";

    export let db
    export let storage
    export let upload

    const cloudRef = collection(db, "clouds")
    let coordinates = []
    let coordinate
    let titles = []
    let showModal = false;

    function getQuerySnapshot() {
        const q = query(cloudRef, orderBy("createdAt", "desc"))
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
        querySnapshot.forEach((doc) => {
            const documentObj = {
                id: doc.id,
                ...doc.data(),
            }
            getDownloadURL(ref(storage, doc.id))
                .then((url) => {
                    documentObj.img = url 
                })
            coordinates.push(documentObj);
        });
        coordinates = coordinates
        });
    }

    function handleCloudClick(c) {
        const q = query(collection(cloudRef, c.id, 'titles'))
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
        querySnapshot.forEach((doc) => {
            const titleObject = {
                id: doc.id,
                ...doc.data().title
            }
            titles.push(titleObject)
            titles = titles
            c.titles = titles
        });
        
        coordinate = c
        sortTitle(coordinate)
        showModal = true  
        titles = []
        });
    }

    function sortTitle(coordinate) {
        coordinate.titles.sort((a, b) => b.like - a.like)
        coordinate = coordinate
    }

    onMount(getQuerySnapshot)
</script>

{#each coordinates as c}
    <img class:uploadMode="{upload == true}" on:click={handleCloudClick(c)} width="20px" style="left:{c.coordinate.x}px; top:{c.coordinate.y}px; position:absolute;" src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Cloud_%28fixed_width%29.svg/2048px-Cloud_%28fixed_width%29.svg.png" alt="cloud"/>
{/each}

{#if showModal}
	<Modal on:close="{() => showModal = false}">
        <h1 slot="header">
            {coordinate.titles[0].title}
		</h1>

		<Detail coordinate={coordinate} cloudRef={cloudRef} />
	</Modal>
{/if}

<style>
    .uploadMode {
        pointer-events: none;
    }
</style>