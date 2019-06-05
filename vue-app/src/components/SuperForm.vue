<template>
    <form class="super-form" @submit.prevent>
        <p>
        <label for="superhero">Superhero:</label>
        <input id="superhero" v-model="superhero" required>
        </p>
        <p>
        <label for="publisher">Publisher:</label>
        <select v-model="publisher" id="publisher">
            <option value="DC Comics" select="selected">DC Comics</option>
            <option value="Marvel Comics">Marvel Comics</option>
        </select>
        </p>
        <p>
        <label for="alter_ego">Alter ego:</label>
        <input id="alter_ego" v-model="alter_ego">
        </p>
        <p>
        <label for="first_appearance">First appearance:</label>
        <input id="first_appearance" v-model="first_appearance">
        </p>
        <p>
        <label for="characters">Chartacters:</label>
        <input id="characters" v-model="characters">
        </p>
        
        <p>
        <input type="submit" value="Submit" @click="submit">
        </p>

        <router-link to="/">Fermer le formulaire</router-link>

    </form>   
</template>

<script>

export default {
    name: 'SuperForm',
    data() { 
        return {
        superhero: null,
        publisher: null,
        alter_ego: null,
        first_appearance: null,
        characters:null
    }},
    methods : {
        submit() {
            let newSuper = {
                superhero : this.superhero,
                publisher: this.publisher,
                alter_ego: this.alter_ego,
                first_appearance: this.first_appearance,
                characters: this.characters,
                }
            console.log(newSuper)
            this.$emit('superhero-added', newSuper)
            this.superhero = null,
            this.publisher = null,
            this.alter_ego = null,
            this.first_appearance = null,
            this.characters =null
        }
    }
}
</script>