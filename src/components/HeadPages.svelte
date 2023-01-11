<script>
    export let title = 'Заголовок';
    export let text = 'Текст';
</script>

<div class="head_page">
    <div class="title">{title}</div>
    <div class="text">{text}</div>
</div>

<style lang="scss">

.head_page{
  position: relative;
  width: 100%;
}

.title{
  width: 100%;
  text-align: center;
  color: #7eb430;
  font-weight: 700;
  font-size: 18px;
  line-height: 1em;
}

.text{
  width: 100%;
  text-align: center;
  color: #202020;
  font-weight: 800;
  font-size: 36px;
  text-transform: uppercase;
  line-height: 1em;
  margin-top: 10px;
  letter-spacing: 2px;
}

@media only screen and (max-width: 639px){

}
</style>