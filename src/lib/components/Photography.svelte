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
                <button class="modal-btn" on:click={openModal}>Photography</button>
            {:else}
    <div class="circle">
        <div class="content">
            <h1>Photography</h1>
            <p><a href="https://helenawsu.github.io/photography/"> Photography Portfolio</p>

        </div>
    </div>
    {/if}
</div>
<Modal bind:showModal>
    <span slot="header"><h2>Photography</h2></span>
                                <p><a href="https://helenawsu.github.io/photography/"> Photography Portfolio</p>
</Modal>
<style>
    .circle {
        background-color: #588ced;
    }
    .circle-container {
        cursor: pointer;
    }


    .circle p, h1 {
        /* padding: 0;
        margin: 0rem; */
    }
    a {
        text-decoration: underline;
        color: inherit;
    }
    .modal-btn {
        background: #588ced;
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
    h1 {
        font-size: 1.5rem;
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
        /* margin: 0rem; */
    }

</style>