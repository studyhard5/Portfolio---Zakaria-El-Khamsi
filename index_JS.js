let corruptedToggle = false;
let racingBallToggle = false;
let gameJamToggle = false;
let robloxToggle = false;

// section 2 

let toggle_libgdx = false;
let toggle_raylib = false;
let toggle_gfx = false;

// section 3

let toggle_video1 = false;
let toggle_video2 = false;

// section 4

let toggle_my_art = false;

let test = "Je vous invite à visiter mon ArtStation pour découvrir mes autres travaux et réalisations. Je vous remercie"

function exit_button(divId) {
    const div = document.getElementById(divId);
    if (div) {
        div.remove();
    }
}

function corrupted_game() {
    const get_corrupted = document.getElementById("corrupted");
    if (!get_corrupted) return;

    if (!corruptedToggle) {
        const new_Div = document.createElement("div");
        new_Div.id = "corrupter_inner_div";

        const corrupted_video = document.createElement("iframe");
        corrupted_video.id = "corrupted_template";
        corrupted_video.src = "https://www.youtube.com/embed/4GAdEzOxg5Y";
        corrupted_video.frameBorder = "0";
        corrupted_video.allowFullscreen = true;
        corrupted_video.width = "560";
        corrupted_video.height = "315";

        const detail_img = document.createElement("img");
        detail_img.src = "Assets/CORRUPTED_detail.png";
        detail_img.id = "corrupted_img";

        const exit = document.createElement("button");
        exit.id = "exit";
        exit.textContent = "Sortir de la rubrique";
 
        exit.onclick = function() {
            exit_button("corrupter_inner_div");
        };

        new_Div.appendChild(detail_img);
        new_Div.appendChild(corrupted_video);
        new_Div.appendChild(exit);
        get_corrupted.appendChild(new_Div);
        
        corruptedToggle = true;
    } else {
        const existingDiv = document.getElementById("corrupter_inner_div");
        if (existingDiv) existingDiv.remove();
        corruptedToggle = false;
    }
}

function racing_ball() {
    const get_racing_ball = document.getElementById("racing_ball");
    if (!get_racing_ball) return;

    if (!racingBallToggle) {
        const new_Div = document.createElement("div");
        new_Div.id = "racing_ball_inner_div";

        const unity_game = document.createElement("iframe");
        unity_game.src = "https://www.youtube.com/embed/lAWDAD9jpgU";  // ← FIXED (embed format)
        unity_game.id = "template";
        unity_game.frameBorder = "0";
        unity_game.allowFullscreen = true;

        const png = document.createElement("img");
        png.src = "Assets/asset_unity.png";
        png.id = "unity_inner_png";

        const text = document.createElement("p");
        text.textContent = "Ce jeu était à l’origine un projet scolaire dont l’objectif était de créer un wagon en 3D, de le déplier (UV unwrap) et de le texturer. J’ai cependant poussé le projet à un niveau supérieur en y ajoutant du code et des scripts C#, ainsi qu’une interface utilisateur (UI) et animation, comme en témoigne la vidéo ci-dessous.";
        text.id = "text_unity";

           const exit = document.createElement("button");
        exit.id = "exit";
        exit.textContent = "Sortir de la rubrique";
 
        exit.onclick = function() {
            exit_button("corrupter_inner_div");
        };

        new_Div.appendChild(png);
        new_Div.appendChild(text);
        new_Div.appendChild(unity_game);
        new_Div.appendChild(exit);
        
        get_racing_ball.appendChild(new_Div);
        
        racingBallToggle = true;
    } else {
        const existingDiv = document.getElementById("racing_ball_inner_div");
        if (existingDiv) existingDiv.remove();
        racingBallToggle = false;
    }
}

function behaviour_gamejam() {
    const get_game_jam = document.getElementById("Behaviour_gamejam");
    if (!get_game_jam) return;

    if (!gameJamToggle) {
        const new_Div = document.createElement("div");
        new_Div.id = "Behaviour_gamejam_div";
        
        const game_jam_video = document.createElement("iframe");
        game_jam_video.src = "https://www.youtube.com/embed/HbWPVQNJsoA";  // ← FIXED (embed format)
        game_jam_video.id = "template";
        game_jam_video.width = "560";
        game_jam_video.height = "315";
        game_jam_video.frameBorder = "0";
        game_jam_video.allowFullscreen = true;

        const detail_img = document.createElement("img");
        detail_img.src = "Assets/behaviour_jam.jpg";
        detail_img.id = "jam_img";

        const jam_paragraph = document.createElement("p");
        jam_paragraph.textContent = `Game Jam en solo de 48h. le jeu est un monde ouvert, objets cachés à trouver. Organisée par le studio Behaviour. Réalisé sur Unreal Engine (Blueprints only). Thématique de la Game Jam : "If you can't see it, it doesn't exist" une contrainte qui pousse à réfléchir sur la visibilité, la perception et la découverte dans le level design.`;
        jam_paragraph.id = "jam_description";

           const exit = document.createElement("button");
        exit.id = "exit";
        exit.textContent = "Sortir de la rubrique";
 
        exit.onclick = function() {
            exit_button("corrupter_inner_div");
        };

        new_Div.appendChild(detail_img);
        new_Div.appendChild(jam_paragraph);
        new_Div.appendChild(game_jam_video);
        new_Div.appendChild(exit);
        
        get_game_jam.appendChild(new_Div);
        
        gameJamToggle = true;
    } else {
        const existingDiv = document.getElementById("Behaviour_gamejam_div");
        if (existingDiv) existingDiv.remove();
        gameJamToggle = false;
    }
}


function roblox_studio() {
    const get_roblox_studio = document.getElementById("roblox_studio");
    if (!get_roblox_studio) return;

    if (!robloxToggle) {
        const new_Div = document.createElement("div");
        new_Div.id = "roblox_studio_div";

        const roblox_inner_video = document.createElement("iframe");
        roblox_inner_video.id = "template";
        roblox_inner_video.src = "https://www.youtube.com/embed/HpOVOegU5Js";  // ← FIXED
        roblox_inner_video.frameBorder = "0";
        roblox_inner_video.allowFullscreen = true;

        const roblox_detail = document.createElement("p");
        roblox_detail.textContent = "Exploration et objets cachés. Parcourez la carte, collectez tous les objets cachés pour gagner. Programmée en Lua pour Roblox Studio.";
        roblox_detail.id = "roblox_description";

           const exit = document.createElement("button");
        exit.id = "exit";
        exit.textContent = "Sortir de la rubrique";
 
        exit.onclick = function() {
            exit_button("corrupter_inner_div");
        };

        new_Div.appendChild(roblox_detail);
        new_Div.appendChild(roblox_inner_video);
        new_Div.appendChild(exit);
        
        get_roblox_studio.appendChild(new_Div);
        
        robloxToggle = true;
    } else {
        const existingDiv = document.getElementById("roblox_studio_div");
        if (existingDiv) existingDiv.remove();
        robloxToggle = false;
    }
}

// section 2 
function libgdx() {
    const get_lib = document.getElementById("LIB_gdx");
    if (!get_lib) return;

    if (!toggle_libgdx) {
        const new_Div = document.createElement("div");
        new_Div.id = "GDX_inner_div";

        const lib_video = document.createElement("iframe");
        lib_video.src = "https://www.youtube.com/embed/HBNmgkSpHqE";  // ← FIXED (embed format)
        lib_video.id = "LIBGDX_video";
        lib_video.id="template"
        lib_video.frameBorder = "0";
        lib_video.allowFullscreen = true;

        const detail_img = document.createElement("img");
        detail_img.src = "Assets/lib_gdx_logo.png";
        detail_img.id = "lib_img";

        const paragraph_lib = document.createElement("p");
        paragraph_lib.id = "lib_description";
        paragraph_lib.textContent = 'libGDX est un framework de développement de jeux 2D/3D en Java, performant et largement utilisé. Il gère les collisions, l\'affichage, les entrées et le rendu, tout en laissant au développeur le contrôle total du code. Ci-dessous se trouve la démo du jeu "Droplets to Collect". C\'est un jeu de collection : récupère les gouttes bleues, évite les rouges. Système de score, timer, collisions. Développé en Java avec libGDX.';

           const exit = document.createElement("button");
        exit.id = "exit";
        exit.textContent = "Sortir de la rubrique";
 
        exit.onclick = function() {
            exit_button("corrupter_inner_div");
        };


        new_Div.appendChild(detail_img);
        new_Div.appendChild(paragraph_lib);
        new_Div.appendChild(lib_video);
        new_Div.appendChild(exit);
        get_lib.appendChild(new_Div);
        
        toggle_libgdx = true;
    } else {
        const existingDiv = document.getElementById("GDX_inner_div");
        if (existingDiv) existingDiv.remove();
        
        toggle_libgdx = false;
    }
}

function raylib() {
    const get_raylib = document.getElementById("Raylib");
    if (!get_raylib) return;

    if (!toggle_raylib) {
        const new_Div = document.createElement("div");
        new_Div.id = "raylib_inner_div";

        const raylib_video = document.createElement("iframe");
        raylib_video.src = "https://www.youtube.com/embed/lB0KuFJGbWA";  // ← FIXED (embed format)
        raylib_video.id="template";
        raylib_video.frameBorder = "0";
        raylib_video.allowFullscreen = true;

        const detail_img = document.createElement("img");
        detail_img.src = "Assets/Raylib_logo.png";
        detail_img.id = "raylib_img";

        const paragraph = document.createElement("p");
        paragraph.id = "raylib_description";
        paragraph.textContent = "Raylib est une bibliothèque de développement de jeux vidéo en langage C, légère et puissante. Contrairement aux moteurs comme Unity ou Unreal, Raylib permet de tout programmer soi‑même, collisions, game loop, affichage, etc. Ce qui offre une compréhension profonde du fonctionnement interne d’un jeu. Ci-dessous se trouve la démo du jeu de cache-cache 2D. Touche la cible avant la fin du temps imparti. Collisions manuelles, delta time, game loop maison. Développé en C avec Raylib.";


           const exit = document.createElement("button");
        exit.id = "exit";
        exit.textContent = "Sortir de la rubrique";
 
        exit.onclick = function() {
            exit_button("corrupter_inner_div");
        };


        new_Div.appendChild(detail_img);
        new_Div.appendChild(paragraph);
        new_Div.appendChild(raylib_video);
        new_Div.appendChild(exit);
        get_raylib.appendChild(new_Div);
        
        toggle_raylib = true;
    } else {
        const existingDiv = document.getElementById("raylib_inner_div");
        if (existingDiv) existingDiv.remove();
        toggle_raylib = false;
    }
}

function arduino_gfx() {
    const get_arduino_gfx = document.getElementById("arduino_GFX");
    if (!get_arduino_gfx) return;

    if (!toggle_gfx) {
        const new_Div = document.createElement("div");
        new_Div.id = "arduino_gfx_inner_div";

        const gfx_video = document.createElement("iframe");
        gfx_video.src = "https://www.youtube.com/embed/rAJxRytrxus";  // ← FIXED (embed format)
        gfx_video.id = "template";
        gfx_video.width = "560";
        gfx_video.height = "315";
        gfx_video.frameBorder = "0";
        gfx_video.allowFullscreen = true;

        const test_detail = document.createElement("p");
        test_detail.textContent = "Adafruit est une entreprise américaine leader dans la fabrication de composants électroniques open-source (cartes, écrans, capteurs). Leurs bibliothèques, comme Adafruit_GFX et Adafruit_ILI9341, sont largement utilisées pour programmer des écrans TFT avec Arduino. Ce jeu est de type Breakout sur écran TFT 2.4\". Contrôlé par joystick, physique de balle, collisions, score, respawn. Affichage ILI9341.";
        test_detail.id = "gfx_detail";

        const ada_fruit = document.createElement("img");
        ada_fruit.src = "Assets/ada_fruit.png";
        ada_fruit.id = "ada_fruit_img";

           const exit = document.createElement("button");
        exit.id = "exit";
        exit.textContent = "Sortir de la rubrique";
 
        exit.onclick = function() {
            exit_button("corrupter_inner_div");
        };

        new_Div.appendChild(ada_fruit);
        new_Div.appendChild(test_detail);
        new_Div.appendChild(exit);
        new_Div.appendChild(gfx_video);
        
        get_arduino_gfx.appendChild(new_Div);
        
        toggle_gfx = true;
    } else {
        const existingDiv = document.getElementById("arduino_gfx_inner_div");
        if (existingDiv) existingDiv.remove();
        toggle_gfx = false;
    }
}
// section 3 

function fn_short_film1() {
    const get_video1 = document.getElementById("short_film1");
    if (!get_video1) return;

    if (!toggle_video1) {
        const new_Div = document.createElement("div");
        new_Div.id = "video1_inner_div";

        const journey_film = document.createElement("iframe");
        journey_film.id = "template";
        journey_film.src = "https://www.youtube.com/embed/wyxo1ADi2So";  // ← FIXED (embed format)
        journey_film.frameBorder = "0";
        journey_film.allowFullscreen = true;

        const journey_description = document.createElement("p");
        journey_description.id = "journey_descrition";
        journey_description.textContent = "Ceci est mon court-métrage le plus récent. Il met en scène deux personnages qui découvrent un nouveau monde imaginaire et fantastique. Bon visionnage !";


           const exit = document.createElement("button");
        exit.id = "exit";
        exit.textContent = "Sortir de la rubrique";
 
        exit.onclick = function() {
            exit_button("corrupter_inner_div");
        };


        new_Div.appendChild(journey_description);
        new_Div.appendChild(journey_film);
        new_Div.appendChild(exit);
        get_video1.appendChild(new_Div);
        
        toggle_video1 = true;
    } else {
        const existingDiv = document.getElementById("video1_inner_div");
        if (existingDiv) existingDiv.remove();
        toggle_video1 = false;
    }
}


function fn_short_film2() {
    const getvideo2 = document.getElementById("short_film2");
    if (!getvideo2) return;

    if (!toggle_video2) {
        const new_Div = document.createElement("div");
        new_Div.id = "video2_inner_div";

        const text_film1 = document.createElement("p");
        text_film1.id = "film1_description";
        text_film1.textContent = "Ceci est le 3ᵉ épisode de ma série de courts-métrages animés intitulée \"Broken, Together\". Il contient beaucoup d'effets visuels ainsi que du CGI. Dans cet épisode, le personnage principal rencontre pour la première fois le personnage maléfique, tout en essayant de sauver deux créatures innocentes. Il s'enfuit alors en voiture, poursuivi par le personnage maléfique.";

        const film1 = document.createElement("iframe");
        film1.src = "https://www.youtube.com/embed/EKflU4GuW3A";
        film1.id = "template";
        film1.frameBorder = "0";
        film1.allowFullscreen = true;
           const exit = document.createElement("button");
        exit.id = "exit";
        exit.textContent = "Sortir de la rubrique";
 
        exit.onclick = function() {
            exit_button("corrupter_inner_div");
        };

        new_Div.appendChild(text_film1);
        new_Div.appendChild(film1);
        new_Div.appendChild(exit);
        
        getvideo2.appendChild(new_Div);
        
        toggle_video2 = true;
    } else {
        const existingDiv = document.getElementById("video2_inner_div");
        if (existingDiv) existingDiv.remove();
        toggle_video2 = false;
    }
}

function art_station() {
    const get_art_station = document.getElementById("my_art");
    if (!get_art_station) return;

    if (!toggle_my_art) {
        const new_Div = document.createElement("div");
        new_Div.id = "art_station_inner_div";
        new_Div.innerHTML = "Mon ArtStation :  ";
        
        const add_image = document.createElement("img");
        add_image.id = "banner_image";
        add_image.src = "Assets/background_art.png";
     
        const div2 = document.createElement("div");
        div2.id = "inner_inner_div";
        div2.textContent=test;
        div2.style.color = "black";

        const lien = document.createElement("a");
        lien.id ="lien_artstation";
        lien.textContent=" clicker ici pour visiter le site";
        lien.href="https://www.artstation.com/zack_artist"
        lien.style.color = "black";

           const exit = document.createElement("button");
        exit.id = "exit";
        exit.textContent = "Sortir de la rubrique";
 
        exit.onclick = function() {
            exit_button("corrupter_inner_div");
        };


        
        
        new_Div.appendChild(add_image);  
        get_art_station.appendChild(new_Div);
        new_Div.appendChild(div2);
        new_Div.appendChild(exit);
        div2.appendChild(lien);
        toggle_my_art = true;


    } else {
        const existingDiv = document.getElementById("art_station_inner_div");
        if (existingDiv) existingDiv.remove();
        toggle_my_art = false;
    }
}

