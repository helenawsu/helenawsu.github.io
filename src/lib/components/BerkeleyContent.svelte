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
                <button class="modal-btn" on:click={openModal}>Berkeley</button>
            {:else}
    <div class="circle">
        <div class="content">
            <h1>Berkeley</h1>
            <br>
            <p>Come join </p><p>Extended Reality @ Berkeley </p><p>Cal Community Music </p><p> Cal Archery Club</p>
            <br>
            <a href="https://drive.google.com/file/d/127V4ponujWbnWRjrb6XcHhX7gmzWd2oN/view?usp=sharing"><p>Classes I took</p></a>


        </div>
    </div>
        {/if}
</div>
<Modal bind:showModal>
    <span slot="header"><h2>Berkeley</h2></span>
                               
            <p>Come join Extended Reality @ Berkeley, Cal Community Music, and Cal Archery Club</p>
            <a href="https://drive.google.com/file/d/127V4ponujWbnWRjrb6XcHhX7gmzWd2oN/view?usp=sharing"><p>Classes I took</p></a>
</Modal>
<style>
    .circle {
        background-color: #002676;
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
                background-color: #FDB515;

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
        background: #002676;
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

</style>
