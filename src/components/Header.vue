<template>
    <header class="header" :class="{sticky: $route.path === '/' || $route.path.includes('/projects/')}">
        <div class="container-logo">
            <div class="logo-container">
                <g-link :to="{ name: 'home' }" class="home-link">
                    <img 
                        src="../../static/Thea_Logo_Black.svg"
                        :alt="settings.site_name" 
                        class="logo"
                    />
                </g-link>
            </div>
        </div>
        <div class="container">
            <nav class="nav left">
                <g-link class="nav__link" :to="{ name: 'artworks' }">Artworks</g-link>
                <g-link class="nav__link" :to="{ name: 'journal' }">News</g-link>
                <g-link class="nav__link" :to="{ name: 'contact' }">Contact</g-link>
                <g-link class="nav__link" :to="{ name: 'about' }">About</g-link>
            </nav>
            <nav class="nav right">
                <g-link class="nav_language" >EN / BG</g-link>
            </nav>
        </div>
    </header>
</template>

<script>
export default {
  data() {
    return {
        logo: require("../../static/logo.svg"),
        settings: require("../../data/theme.json")
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');
.header {
    position: relative;
    height: 6rem;
    z-index: 10;
    margin-bottom: 5rem;
}
.header.sticky {
    position: relative;
    top: 0;
    left: 0;
    width: 100%;
}
.header > .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100%;
    border-bottom: groove;
}
.container-logo{
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100%;
    margin-bottom: 1rem;
    margin-top: 1rem;
}
.home-link {
    text-decoration: none;
}
.logo {
    height: 7.5rem;
}
.logo-container{
    display: flex;
    margin-left: auto;
    margin-right: auto;
}
.site-name {
    font-size: 0.9rem;
    font-weight: 700;
    letter-spacing: 0.05em;
    text-decoration: none;
    text-transform: uppercase;   
}
.nav > * {
    font-family: "Helvetica",arial,sans-serif;
    text-transform: uppercase;
    font-size: 0.85rem;
    font-weight: bold;
    text-decoration: none;
    margin-top: 4px;
    margin-right: 3rem;
    padding-bottom: 4px;
    border-bottom: 1px solid;
    border-color: transparent;
    transition: border 0.15s;
}
.nav > *:last-of-type {
    margin: 0;
}
.nav > *:hover {
    border-color: inherit;
    color: gray;
}
.nav > .active {
    border-color: inherit;
    color: gray;
}
@media only screen and (max-width: 768px) {

    .nav > * {
        display:grid;
        grid-template-columns: 1fr 1fr;
        border-bottom: none;
    }
    .header > .container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: flex-end;
    padding-bottom: 1rem;
    margin-top: 3.5rem;
    }
    .header{
    margin-bottom: 9rem;
    }
    .nav_language{
        display:block;
        text-align:end;
    }
}
</style>
