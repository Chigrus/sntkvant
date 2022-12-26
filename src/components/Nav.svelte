<script>
    export let menu;
    export let segment;

    function menuClick(id, url){
        menu.forEach(function(item, i) { 
            item.active = false; 
        });
        menu[id-1].active = true;
    }
</script>

<ul class="mainmenu">
    {#each menu as item}
        <li class="item {segment === item.url || (segment === undefined && item.active) ? 'active' : ''}">
            <a class="link" href="{item.url}" on:click={() => menuClick(item.position, item.url)}>{item.title}</a>
        </li>
    {/each}
</ul>

<style lang="scss">

.mainmenu{
  display: flex;
  height: 100%;
  list-style-type: none;
  margin: 0;
  padding: 0;
}

.item{
    position: relative;
    height: 100%;
    &.active{
		&:before{
            content: '';
            position: absolute;
            z-index: 1;
            left: 0;
            bottom: 0;
            width: 100%;
            height: 2px;
            background-color: #64a507;
        }
        .link{
            color: #64a507;
        }
    }
}

.link{
    display: flex;
    height: 100%;
    padding: 0 10px;
    align-items: center;
    color: #272727;
    text-decoration: none;
}

@media only screen and (max-width: 639px){
	.mainmenu{
		display: none;
	}
}
</style>