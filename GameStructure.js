export class GameStructure{
    name;
    life;
    mana;
    defense;
    _class;

    get name(){
        return this.name;
    }
    get life(){
        return this.life;
    }
    get mana(){
        return this.mana;
    }
    get defense(){
        return this.defense;
    }
    get _class(){
        return this._class;
    }
    
    constructor(name,life,mana,defense,_class){
        this.name = name;
        this.life = life;
        this.mana = mana;
        this.defense = defense;
        this._class = _class;
    };

    skillsElements = {
        fire:{
            damage:500,
            mana:100
        },
        water:{
            damage:450,
            mana: 80
        },
        earth:{
            damage:400,
            mana:70
        },
        wind:{
            damage:100,
            mana:140,
            heal:500
        }
    }
    
    fireBall(target){
        let fireBallDamage = Math.floor(Math.random() * this.skillsElements.fire.damage);
        let lessManaFire  = this.mana - this.skillsElements.fire.mana;

        console.log(`Dano de ${fireBallDamage} em ${target}`);
        
    }
    frostBall(target){
        let frostBallDamage = Math.floor(Math.random() * this.skillsElements.water.damage);
        let lessManaWater = this.mana - this.skillsElements.water.mana;

        console.log(`Dano de ${frostBallDamage} em ${target}`);
    }
    shudder(target){
        let shudderDamage = Math.floor(Math.random() * this.skillsElements.earth.damage);
        let lessManaEarth = this.mana - this.skillsElements.earth.mana;

        console.log(`Dano de ${shudderDamage} em ${target}`);
    }
    chaoticWinds(target){
        let chaoticWindsDamage = Math.floor(Math.random() * this.skillsElements.wind.damage)
        let lessManaWind = this.mana - this.skillsElements.wind.mana;
        
        console.log(`Dano de ${chaoticWindsDamage} em ${target}`);
    }
}