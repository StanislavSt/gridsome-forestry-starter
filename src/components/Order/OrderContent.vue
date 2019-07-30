<template>
    <div class="journal-container">
      <h1 class="journal-header" style="text-align:center">Order Information</h1>
      <h2 class="journal-header">Reproductions / Репродукция</h2>
    <!-- Reproduction-->
      <div class="description">
        You can order a reproduction of a painting from your favourite painter.
        <br />If you would like to order -
        <g-link :to="{ name: 'contact' }">
          <span style="font-weight:bold">contact</span>
        </g-link> &nbsp; us.
      </div>
      <br>
      <div class="description">
        Може да поръчате репродукция на картина от предпочитан от вас автор.
        <br />За поръчки - 
        <g-link :to="{ name: 'contact' }">
          <span style="font-weight:bold">свържете</span>
        </g-link> &nbsp; се с нас.
      </div>

      <h2 class="journal-header">Prints / Принт</h2>

    <!-- Print-->
      <div class="description">
        You can order a high quality print from one of Thea's paintings , with a size by your choice.
        <br />Time to produce -
        <span style="font-weight:bold">one week</span>.
        <br />If you would like to order -
        <g-link :to="{ name: 'contact' }">
          <span style="font-weight:bold">contact </span>
        </g-link> &nbsp; us.
      </div>
      <br>
      <div class="description">
        Може да поръчате висококачествен принт на авторска картина на Tеа по желан от вас размер.
        <br />Срок за изработка -
        <span style="font-weight:bold">една седмица</span>.
        <br />За поръчки -
        <g-link :to="{ name: 'contact' }">
          <span style="font-weight:bold">свържете</span>
        </g-link> &nbsp;се с нас.
      </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
@media only screen and (max-width: 768px) {
h2{
    font-size: 18px;
}
h1{
    font-size: 26px;
}
.description{
    font-size: 14px;
}
}
</style>
