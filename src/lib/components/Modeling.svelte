<script>
    import Modal from './Modal.svelte';
    import { onMount } from 'svelte';
    let showModal = false;
    let isMobile = false;

    function checkMobile() {
        isMobile = window.innerWidth < 768;
    }

    onMount(() => {
        checkMobile();
        window.addEventListener('resize', checkMobile);
    });

    function openModal() {
        showModal = true;
    }
</script>

<div class="circle-container">
        {#if isMobile}
                <button class="modal-btn" on:click={openModal}>Modeling</button>
            {:else}
    <div class="circle">
        <div class="content">
            <h1>Modeling</h1>
            <br>
            <p>I like making paper models of</p> <p>anime weapons and realistic flowers.</p>
            <br>
<a href="https://example.com" on:click|preventDefault={openModal}><p>gallery</p></a>
        </div>
    </div>
        {/if}
</div>
<Modal bind:showModal>
    <span slot="header"><h2>Modeling</h2></span>
                                <p>I like making paper models of anime weapons and realistic flowers.</p>
            <div class="gallery">
        {#each [
            '/images/purple_rose.JPG',
             '/images/sword.JPG',
            '/images/pueblo.jpg',
            '/images/gun.jpg',
            '/images/bow.jpg',
            '/images/white_rose.jpg',
            // Add more image paths as needed
        ] as img}
            <!-- svelte-ignore a11y-img-redundant-alt -->
            <img src={img} alt="Modeling gallery image" />
        {/each}
    </div>
</Modal>
<style>
.gallery {
        display: flex;
        flex-direction: column;
        gap: 0.5em;
        justify-content: flex-start;
        align-items: center;
        margin-top: 1em;
        max-width: 95vw;
        width: 100%;
    }
    .gallery-row {
        width: 100%;
        display: flex;
        justify-content: center;
    }
    .gallery img {
        max-width: 90vw;
        max-height: 40vh;
        width: 100%;
        height: auto;

        object-fit: contain;
        background: #fff;
    }
    :global(dialog > div) {
        max-width: 98vw;
        max-height: 90vh;
        overflow-y: auto;
    }
        @media only screen and (max-width: 768px) {
        :global(dialog > div) {
            max-height: 70vh; /* smaller modal on mobile for exit button space */
        }
    }
    .circle {
        background-color: #ed9b58;
    }
    .circle-container {
        margin: 0;
        padding: 0;
    }

    .circle p {
        padding: 0;
        margin: 0rem;
    }

    h1 {
        font-size: 1.5rem;
                margin: 0rem;

    }
    p{
        font-size: 0.75rem;
    }
                @media only screen and (max-width: 768px) {
            p {
        font-size: 1em;
    }
    }
a {
        text-decoration: underline;
        color: inherit;
    }
    .modal-btn {
        background: #ed9b58;
        font-family: "Reddit Mono", monospace;
        color: #fff;
        border: none;
        border-radius: 50%;
        width: 6rem;
        height: 6rem;
        margin: 0;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0;
    }
    .content {
        /* margin: 0rem; */
    }
:global(html:has(dialog[open])) {
    overflow: hidden;
    touch-action: none;
}
</style>
