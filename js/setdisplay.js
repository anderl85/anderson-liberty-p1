function displayPokemon(pkmn)
{
    var name = document.getElementById('name');
    var type = document.getElementById('type');
    var desc = document.getElementById('desc');
    var img = document.getElementById('pkmnPic');

    var g = 'Type: Grass';
    var f = 'Type: Fire';
    var w ='Type: Water';

    if (pkmn == 1)
    {
        name.innerHTML='Bulbasaur';
        img.src = "images/bulbasaur.png";
        img.alt = 'Bulbasaur';
        type.innerHTML=g;
        desc.innerHTML="Bulbasaur can be seen napping in bright sunlight. There is a seed on its back. By soaking up the sun's rays, the seed grows progressively larger."
    }
    if (pkmn == 4)
    {
        name.innerHTML='Charmander';
        img.src = "images/charmander.png";
        img.alt ='Charmander';
        type.innerHTML=f;
        desc.innerHTML="The flame that burns at the tip of its tail is an indication of its emotions. The flame wavers when Charmander is enjoying itself. If the Pokémon becomes enraged, the flame burns fiercely.";
    }
    if (pkmn == 7)
    {
        name.innerHTML='Squirtle';
        img.src = "images/squirtle.png";
        img.alt ='Squirtle';
        type.innerHTML=w;
        desc.innerHTML="Squirtle's shell is not merely used for protection. The shell's rounded shape and the grooves on its surface help minimize resistance in water, enabling this Pokémon to swim at high speeds.";
    }

    if (pkmn == 152)
    {
        name.innerHTML='Chikorita';
        img.src = "images/Chikorita.png";
        img.alt ='Chikorita';
        type.innerHTML=g;
        desc.innerHTML="In battle, Chikorita waves its leaf around to keep the foe at bay. However, a sweet fragrance also wafts from the leaf, becalming the battling Pokémon and creating a cozy, friendly atmosphere all around.";
    }
    if (pkmn == 155)
    {
        name.innerHTML='Cyndaquil';
        img.src = "images/Cyndaquil.png";
        img.alt ='Cyndaquil';
        type.innerHTML=f;
        desc.innerHTML="Cyndaquil protects itself by flaring up the flames on its back. The flames are vigorous if the Pokémon is angry. However, if it is tired, the flames sputter fitfully with incomplete combustion.";
    }
    if (pkmn == 158)
    {
        name.innerHTML='Totodile';
        img.src = "images/Totodile.png";
        img.alt ='Totodile';
        type.innerHTML=w;
        desc.innerHTML="Despite the smallness of its body, Totodile's jaws are very powerful. While the Pokémon may think it is just playfully nipping, its bite has enough power to cause serious injury.";
    }

    if (pkmn == 252)
    {
        name.innerHTML='Treecko';
        img.src = "images/Treecko.png";
        img.alt ='Treecko';
        type.innerHTML=g;
        desc.innerHTML="Treecko is cool, calm, and collected—it never panics under any situation. If a bigger foe were to glare at this Pokémon, it would glare right back without conceding an inch of ground.";
    }
    if (pkmn == 255)
    {
        name.innerHTML='Torchic';
        img.src = "images/Torchic.png";
        img.alt ='Torchic';
        type.innerHTML=f;
        desc.innerHTML="Torchic has a place inside its body where it keeps its flame. Give it a hug—it will be glowing with warmth. This Pokémon is covered all over by a fluffy coat of down.";
    }
    if (pkmn == 258)
    {
        name.innerHTML='Mudkip';
        img.src = "images/Mudkip.png";
        img.alt ='Mudkip';
        type.innerHTML=w;
        desc.innerHTML="In water, Mudkip breathes using the gills on its cheeks. If it is faced with a tight situation in battle, this Pokémon will unleash its amazing power—it can crush rocks bigger than itself.";
    }

    if (pkmn == 387)
    {
        name.innerHTML='Turtwig';
        img.src = "images/Turtwig.png";
        img.alt ='Turtwig';
        type.innerHTML=g;
        desc.innerHTML="It undertakes photosynthesis with its body, making oxygen. The leaf on its head wilts if it is thirsty.";
    }
    if (pkmn == 390)
    {
        name.innerHTML='Chimchar';
        img.src = "images/Chimchar.png";
        img.alt ='Chimchar';
        type.innerHTML=f;
        desc.innerHTML="Its fiery rear end is fueled by gas made in its belly. Even rain can't extinguish the fire.";
    }
    if (pkmn == 393)
    {
        name.innerHTML='Piplup';
        img.src = "images/Piplup.png";
        img.alt ='Piplup';
        type.innerHTML=w;
        desc.innerHTML="Because it is very proud, it hates accepting food from people. Its thick down guards it from the cold.";
    }

    if (pkmn == 495)
    {
        name.innerHTML='Snivy';
        img.src = "images/Snivy.png";
        img.alt ='Snivy';
        type.innerHTML=g;
        desc.innerHTML="They photosynthesize by bathing their tails in sunlight. When they are not feeling well, their tails droop.";
    }
    if (pkmn == 498)
    {
        name.innerHTML='Tepig';
        img.src = "images/Tepig.png";
        img.alt ='Tepig';
        type.innerHTML=f;
        desc.innerHTML="	It can deftly dodge its foe's attacks while shooting fireballs from its nose. It roasts berries before it eats them.";
    }
    if (pkmn == 501)
    {
        name.innerHTML='Oshawott';
        img.src = "images/Oshawott.png";
        img.alt ='Oshawott';
        type.innerHTML=w;
        desc.innerHTML="It fights using the scalchop on its stomach. In response to an attack, it retaliates immediately by slashing.";
    }

    if (pkmn == 650)
    {
        name.innerHTML='Chespin';
        img.src = "images/Chespin.png";
        img.alt ='Chespin';
        type.innerHTML=g;
        desc.innerHTML="Such a thick shell of wood covers its head and back that even a direct hit from a truck wouldn't faze it.";
    }
    if (pkmn == 653)
    {
        name.innerHTML='Fennekin';
        img.src = "images/Fennekin.png";
        img.alt ='Fennekin';
        type.innerHTML=f;
        desc.innerHTML="As it walks, it munches on a twig in place of a snack. It intimidates opponents by puffing hot air out of its ears.";
    }
    if (pkmn == 656)
    {
        name.innerHTML='Froakie';
        img.src = "images/Froakie.png";
        img.alt ='Froakie';
        type.innerHTML=w;
        desc.innerHTML="It protects its skin by covering its body in delicate bubbles. Beneath its happy-go-lucky air, it keeps a watchful eye on its surroundings.";
    }
    
    if (pkmn == 722)
    {
        name.innerHTML='Rowlet';
        img.src = "images/Rowlet.png";
        img.alt ='Rowlet';
        type.innerHTML=g;
        desc.innerHTML="It feels relaxed in tight, dark places and has been known to use its Trainer's pocket or bag as a nest.";
    }
    if (pkmn == 725)
    {
        name.innerHTML='Litten';
        img.src = "images/Litten.png";
        img.alt ='Litten';
        type.innerHTML=f;
        desc.innerHTML="Its coat regrows twice a year. When the time comes, Litten sets its own body on fire and burns away the old fur.";
    }
    if (pkmn == 728)
    {
        name.innerHTML='Popplio';
        img.src = "images/Popplio.png";
        img.alt ='Popplio';
        type.innerHTML=w;
        desc.innerHTML="Popplio gets on top of its bouncy water balloons to jump higher. It's quite the acrobatic fighter!";
    }

    if (pkmn == 0)
    {
        name.innerHTML='Select a Pokemon below to view';
        img.src = "";
        img.alt ='';
        type.innerHTML="";
        desc.innerHTML="";
    }
}
