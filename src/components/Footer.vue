<template>
    <footer class="container">
        <div class="row icons">
            <a href="https://github.com/oucar" target="_blank">
                <GithubLogo href="google.com"/>
            </a>
            <a href="https://www.linkedin.com/in/onur-ucar-747032186" target="_blank">
                <LinkedinLogo/>
            </a>
        </div>

        <div class="row">
            <p> Onur Ucar | 2022 </p>
        </div>
        

    </footer>
</template>

<script>
import GithubLogo from '@/assets/Icons/github.svg';
import LinkedinLogo from '@/assets/Icons/linkedin.svg';

export default {
    name: "Footer",
    components: {
        GithubLogo,
        LinkedinLogo,
    }
}
</script>

<style lang="scss" scoped>

$space : 7px;

footer {
    width: 100%;
    padding: $space*2 0;
    margin-top: 10px;
    
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .icons {
        display: flex;
        justify-content: center;
        align-items: center;

        a { 
            margin: 0 5px;
        }
    }

    .row {
        margin: $space 0;
    }
}


</style>