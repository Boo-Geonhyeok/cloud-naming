<script>
    import { addDoc, collection, doc, setDoc } from "firebase/firestore";
    import { ref, uploadBytes } from "firebase/storage"
    import { createEventDispatcher } from "svelte";

    const dispatch = createEventDispatcher();
	const close = () => dispatch('close');

    export let coordinate

    let title
    let image
    let src

    export let db
    export let storage

    async function handleSubmit(event) {
        close()
        title = event.target[0].value

        const docID = doc(collection(db, 'clouds')).id
        await uploadBytes(ref(storage, docID), image);
        await setDoc(doc(db, 'clouds', docID), {
            coordinate: coordinate,
            createdAt: Date.now()
        })
        const cloudRef = collection(db, 'clouds')
        await addDoc(collection(cloudRef, docID, 'titles'), {
            title: {
                title: title,
                like: 1
            }
        })
    }

    function handleImgUpload(event) {
        image = event.target.files[0]
        src = URL.createObjectURL(image)
    }
</script>

<form on:submit|preventDefault={handleSubmit}>
    <label for="title">Title</label>
    <input type="text" name="title" id="title" required>

    <label for="image">Image</label>
    <input on:change={handleImgUpload} type="file" name="image" id="image" accept="image/*" required>

    <img width=500px src={src} alt="">

    <hr>
    <button type="submit">submit</button>
    <button type="button" on:click={close}>cancel</button>
</form>