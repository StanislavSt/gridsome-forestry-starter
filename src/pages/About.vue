<template>
  <Layout>
    <div class="container grid-container">
      <div class="contact-header">
        <img 
                        src="../../static/Thea_Contact.jpg"
                    />
        <p class="info">
        <a>PHOTO</a>: 2018 Solo exhibition "Debut" : gallery "Bulgari"
        </p>
      </div>
      <div class="contact-header">
      <h2>About Thea Velichkova</h2>
      <p>
      Thea Velichkova is an art painter born in 1980 in second biggest town in Bulgaria, Plovdiv, where she study in art college. 
      Now a days she is based in capital Sofia. Thea Velichkova have a master of restoration and conservation degree in 
      National Academy of Arts - Sofia, Bulgaria and master of interior design degree in New Bulgarian University, Sofia, Bulgaria. 
      Also she have a educational qualification by the ''Facultad de Bellas Artes de Granada'' ( Spain). 
      Thea started her education with restoration and conservation of artefacts, 
      but after she graduated changed quickly to art painting and interior design. 
      She creates mostly abstract, colourful paintings. Her technique consist of carefully layering colours on canvas. 
      The paintings is an abstract and unique view of her inner world 
      </p>
      <h2>Education:</h2>
        <li>1999 Art College, Plovdiv, Bulgaria.</li>
        <li>2002 ''Facultad de Bellas Artes de Granada'' (Spain)</li>
        <li>2006 Master of Conservation and Restoration degree, National Academy of Arts, Sofia, Bulgaria.</li>
        <li>2016 Master of interior design degree, New Bulgarian University, Sofia, Bulgaria.</li>
        <p></p>
      <h2>Exhibitions:</h2>
      <li>2018 Solo exhibition "Debut", gallery "Bulgari", Sofia, Bulgaria.</li>
      </div>
    </div>
  </Layout>
</template>

<script>
export default {}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Karla&display=swap');
*{
    font-family: 'Karla', sans-serif;
}
p{
    text-align: justify;
}
li{
    text-align: justify;
}
a{
  color:black
}
a.social{
  margin: 0.9rem;
}
img{
  height: 100%;
  width: 100%;
}
.info{
  font-size: .8rem;
  word-spacing: 0.2rem;
  text-transform: uppercase;
  color:gray
}
.about{
  float:right;
}
.container{
  padding-top: 6rem;
}
.contact-title {
  font-size: 3rem;
  margin: 0 0 4rem 0;
  padding: 0;
}
h2{
  margin-bottom: 1rem;
  margin-top:0;
}
span{
  margin-bottom: 1rem;
}

.grid-container {
  display: grid;
  grid-template-columns: 1.3fr 1fr;
  grid-template-areas: ". .";
  grid-gap: 5%;
}

@media only screen and (max-width: 768px) {
  .grid-container{
    display:block;
  }
}
</style>

