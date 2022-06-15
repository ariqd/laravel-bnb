<template>
    <div>
        <bookable-list-item item-title="Cheap Villa" item-content="lorem ipsum" :price="2000">
        </bookable-list-item>
        <bookable-list-item item-title="Cheap Villa 2" item-content="lorem ipsum" :price="2000">
        </bookable-list-item>
        <bookable-list-item item-title="Cheap Villa 3" item-content="lorem ipsum" :price="2000">
        </bookable-list-item>
    </div>
</template>

<script>
import BookableListItem from './BookableListItem';

export default {
    components: {
        BookableListItem
    }
}
</script>
