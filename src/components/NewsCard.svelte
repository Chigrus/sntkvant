<script>
    // export let title = 'Заголовок';
    // export let text = 'Текст';
</script>

<div class="news">
    <div class="image">
        <div class="data">Январь 14, 2023</div>
    </div>
    <div class="content">
        <div class="title">Заголовок новости</div>
        <div class="text">Текст новости, текст новости, текст новости, текст новости, текст новости</div>
    </div>
</div>

<style lang="scss">

.news{
  position: relative;
  display: flex;
  flex-wrap: wrap;
  width: 100%;
}

.image{
    display: flex;
    align-items: flex-end;
    justify-content: center;
    width: 100%;
    height: auto;
    min-height: 240px;
    background-color: rgba(0,0,0,0.1);
}

.data{
    padding: 12px 25px;
    background-color: #6aaf08;
    color: #fff;
    font-size: 14px;
    border-radius: 25px;
    margin-bottom: 5px;
}

.content{
    width: 100%;
    margin-top: 20px;
}

.title{
    width: 100%;
    font-size: 18px;
    font-weight: 600;
    padding-bottom: 15px;
    border-bottom: 1px solid #d6d6d6;
}

.text{
    width: 100%;
    margin-top: 15px;
    font-size: 14px;
    line-height: 1.4em;
    color: #646464;
}

@media only screen and (max-width: 1023px){

}
</style>