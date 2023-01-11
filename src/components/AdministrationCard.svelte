<script>
    export let name = 'Имя Фамилия';
    export let role = 'Должность';
</script>

<div class="user">
    <div class="photo"></div>
    <div class="content">
        <div class="name">{name}</div>
        <div class="role">{role}</div>
    </div>
</div>

<style lang="scss">

.user{
    width: 100%;
}

.photo{
    width: 100%;
    height: 300px;
    background-color: rgba(0,0,0,0.1);
}

.content{
    width: 100%;
    background-color: #333333;
    box-sizing: border-box;
    padding: 15px;
}

.name{
    width: 100%;
    text-align: center;
    color: #fff;
    font-size: 16px;
    line-height: 1em;
    font-weight: 500;
}

.role{
    width: 100%;
    text-align: center;
    color: rgba(255,255,255,0.65);
    font-size: 14px;
    line-height: 1em;
    margin-top: 7px;
}

@media only screen and (max-width: 639px){

}
</style>