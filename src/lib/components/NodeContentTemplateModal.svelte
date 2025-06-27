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
                <button class="modal-btn" on:click={openModal}>Title</button>
            {:else}
    <div class="circle">
        <div class="content">
            <p>!Under!</p><p> !Construction!</p>

        </div>
    </div>
        {/if}
</div>
<Modal bind:showModal>
    <span slot="header"><h2>Photography</h2></span>
                                <p>!Under!</p><p> !Construction!</p>
</Modal>
<style>
    .circle {
        background-color: #a39f96;
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
        font-size: 0.5rem;
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
    .content {
        margin: 0rem;
    }

</style>
