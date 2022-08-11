<script>
    import { addDoc, collection, doc, updateDoc } from "firebase/firestore";

    export let coordinate
    export let cloudRef

    async function upvote(t) {
        const coordinateRef = collection(cloudRef, coordinate.id, 'titles');
        const titleRef = doc(coordinateRef, t.id)
        await updateDoc(titleRef, {
            title: {
                title: t.title,
                like: t.like + 1
            }
        });
    }

    async function uploadTitle(event) {
        const comment = event.target[0].value
        await addDoc(collection(cloudRef, coordinate.id, 'titles'), {
            title: {
                title: comment,
                like: 1
            }
        })
        event.target[0].value = ""
        blur()
    }
</script>

<img src={coordinate.img} alt="detailImg" />
<hr>
{#each coordinate.titles as t}
<li>{t.title} {t.like} <button on:click={upvote(t)}>^</button></li>
{/each}

<form on:submit|preventDefault="{uploadTitle}">
    <input type="text" name="" id="">
    <button>ok</button>
</form>