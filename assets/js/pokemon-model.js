class Pokemon {
    number;
    name;
    type;
    types = [];
    image;

    constructor(pokeDetail) {
        this.number = pokeDetail.id
        this.name = pokeDetail.name

        const types = pokeDetail.types.map((typeSlot) => typeSlot.type.name)
        const [type] = types

        this.types = types
        this.type = type

        this.image = pokeDetail.sprites.other.dream_world.front_default

    }
}
