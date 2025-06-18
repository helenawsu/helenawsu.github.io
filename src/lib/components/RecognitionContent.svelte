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
                <button class="recognition-btn" on:click={openModal}>Awards</button>
            {:else}
                <div class="circle">
        <div class="content">
                <h1>Awards</h1>
                <br>
                <p><a href="http://www.scholink.org/ojs/index.php/wjssr/article/view/3609">Game Theory and the Three-Body Problem</a></p>
                <p>@ World Journal of Social Science</p>
                <br>
                <p><a href="https://devpost.com/helenawsu">Devpost</a></p>
                <p>@ several XR Hacks</p>
                        </div>
    </div>


            {/if}
</div>

<Modal bind:showModal>
    <span slot="header"><h2>Awards</h2></span>
    <p>
        <a href="http://www.scholink.org/ojs/index.php/wjssr/article/view/3609">Game Theory and the Three-Body Problem</a>
        @ World Journal of Social Science
    </p>
    <p>
        <a href="https://devpost.com/helenawsu">Devpost</a>
        @ several XR Hacks
    </p>

</Modal>

<style>
    .circle p, h1 {
        margin: 0rem;
        padding: 0;
    }
    h1 {
        font-size: 1.5rem;
    }
@media only screen and (min-width: 769px) {
    p {
        font-size: 0.75rem;
    }
}
    .recognition-btn {
        background: #8c975e;
        font-family: "Reddit Mono", monospace;
        color: #fff;
        border: none;
        border-radius: 50%;
        width: 4em;
        height: 4em;
        margin: 0;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0;
    }
    a { color: inherit;  }
            @media only screen and (max-width: 768px) {
            p {
        font-size: 1rem;
    }
}
    @media (hover: none) and (pointer: coarse) {
        .circle-container {
            min-width: 30vw;
        }
        h1 {
            font-size: 0.375rem;
        }
        p {
            font-size: 0.375rem;
        }
    }
</style>