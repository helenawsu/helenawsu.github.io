<script>
</script>

<div class="root-container">
    <div class="root-circle">
        <div class="content">
            <h1>Welcome to Helena's Page</h1>
            <p>I am a third-year at UC Berkeley majoring in EECS and IEOR.</p>
            <p>Interested in AI, XR, CV.</p>
            <p>Here is my <a href="https://drive.google.com/file/d/1lk2t61f5mADALHl1LuW7USZ8-86D2fq8/view?usp=sharing" target="_blank">resume</a>, or explore around!</p>

        </div>
    </div>
</div>

<style>
    .root-container {
        display: flex;
        justify-content: center;
        align-items: center;
        aspect-ratio: 1;
        border-radius: 50%;  /* Makes it a circle */
        width: max-content ;
        max-width: 450px;
        padding: 0rem;
        z-index: -1;
    }

    .root-circle {
        display: flex; 
        justify-content: center;
        align-items: center; 
        width: 100%;  
        aspect-ratio: 1;
        background-color: #5baeac;
        border-radius: 50%;  /* Makes it a circle */
        text-align: center;
        
    }

    /* .circle p, .circle h1 {
        margin: 1rem;  
    } */
    h1{
        font-size: 1.5rem;
    }
    p {
        margin: .5rem;
    }
</style>
