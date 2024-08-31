<script>
</script>

<div class="circle-container">
    <div class="circle">
        <div class="content">
            <h1>Welcome to Helena's Website</h1>
            <p>explore around!</p>
        </div>
    </div>
</div>

<style>
    .circle-container {
        display: flex;
        justify-content: center;
        align-items: center;
        aspect-ratio: 1;
        width: max-content;
        padding: 4rem;

    }

    .circle {
        display: flex; /* Ensure the circle is a flex container */
        justify-content: center; /* Horizontally center the content */
        align-items: center; /* Vertically center the content */
        width: 100%;  /* Diameter of the circle */
        height: 100%;
        background-color: #1f77b4;
        border-radius: 50%;  /* Makes it a circle */
        text-align: center;
        color: white;
        font-size: 16px;
        font-family: Arial, sans-serif;
    }

    .circle p, .circle h1 {
        margin: 0;  /* Remove default paragraph and heading margins */
    }

    .content {
        display: flex;
        flex-direction: column;
        align-items: center; /* Center the text inside the content div */
        margin: 2rem;
    }
</style>
