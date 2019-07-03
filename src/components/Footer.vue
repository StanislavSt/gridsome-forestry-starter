<template>
    <footer class="footer">
        <div class="container">
            <span v-html="settings.footer" />
            <a href="https://www.facebook.com">
            <img 
                        src="../../static/facebook_icon.svg"
                        :alt="settings.site_name" 
                        class="social"
                    />
            </a>
            <a href="https://www.instagram.com">
            <img 
                        src="../../static/instagram_icon.svg"
                        :alt="settings.site_name" 
                        class="social"
                    />
            </a>
        </div>
    </footer>
</template>

<script>
export default {
    data() {
        return {
            settings: require("../../data/theme.json")
        }
    }
}
</script>

<style scoped>
.footer {
    font-size: 0.8rem;
    padding: 6rem 0;
}
.container{
    border-top: groove;
    padding-top: 2rem;
}
.social{
    float:right;
    height: 2.4rem;
    position: relative;
    /* Adjust these values accordingly */
    bottom: 12px;
    left: 5px;
}
</style>
