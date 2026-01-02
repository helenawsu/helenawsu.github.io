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
                <button class="modal-btn" on:click={openModal}>Music</button>
            {:else}
    <div class="circle">
        <div class="content">
            <h1>Music</h1>
            <br>
            <p>I like sightreading classical music, learning</p><p> improvisation, and exploring computational music</p>
            <br>
            <p>Instruments</p>
            <p> violin, viola, drums, <a href="https://cycling74.com/products/max-9">Max9</a>, clarinet? </p>
            <br>
            <p>Creations</p>
            <p><a href="https://harmonicgraph.vercel.app//">Chord Progression Generator</a></p>

            <p><a href="https://treetraversal-eight.vercel.app/">Tree Traversal (Unplayable Viola Duet)</a></p>
            <p><a href="https://github.com/helenawsu/force_field">Force Field (Crude Sound Installation)</a></p>


        </div>
    </div>
    {/if}
</div>
<Modal bind:showModal>
    <span slot="header"><h2>Music</h2></span>
                                <p>I like sightreading classical music, learning</p><p> improvisation, and exploring computational music</p>

            <p>Instruments: violin, viola, drums, <a href="https://cycling74.com/products/max-9">Max9</a>, clarinet? </p>

            <p>Creations:</p>
            <p><a href="https://harmonicgraph.vercel.app//">Harmonic Progression Generator (Continuous Frequency)</a></p>
            <p><a href="https://treetraversal-eight.vercel.app/">Tree Traversal (Unplayable Viola Duet)</a></p>
            <p><a href="https://github.com/helenawsu/force_field">Force Field (Crude Sound Installation)</a></p>

</Modal>
<style>
    .circle {
        background-color: #655fb8;
    }
    .circle-container {
        /* margin: 0;
        padding: 0; */
    }
a {
        text-decoration: underline;
        color: inherit;
    }
    .modal-btn {
        background: #655fb8;
        font-family: "Reddit Mono", monospace;
        color: #fff;
        border: none;
        border-radius: 50%;
        width: 4rem;
        height: 4rem;
        margin: 0;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
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
    .content {
        margin: 0.5rem;
    }

</style>
